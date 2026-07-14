// 把 skill 发布为 npm 包 dashi-ppt-skill(国内经 npmmirror 自动同步分发,
// 替代直连 GitHub 的下载通道)。幂等:npm 上已有当前版本则跳过。
// 用法:node scripts/publish-npm-skill.mjs [--dry-run]
//
// 本脚本在私有开发仓库执行(公开仓库 npm-dist/ 下的同名文件是发布时同步出去的
// 审计副本,不在那里运行,路径均以开发仓库为准)。打包内容默认由本脚本现场
// skill:sync 到临时目录生成 —— 发布物永远与当前工作区一致,不依赖本机安装
// 目录的新旧;DASHI_PPT_SKILL_ROOT 仅作为显式覆盖。
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PACKAGE_NAME = 'dashi-ppt-skill';
const DRY_RUN = process.argv.includes('--dry-run');

// 本地安装目录里的运行时残留,不进分发包。
const EXCLUDED = new Set(['node_modules', 'output', '.preview-server.json', '.DS_Store']);

function run(cmd, args, options = {}) {
  return execFileSync(cmd, args, { encoding: 'utf8', ...options });
}

function copySkillTree(source, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    if (EXCLUDED.has(entry.name)) continue;
    const from = path.join(source, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copySkillTree(from, to);
    else fs.copyFileSync(from, to);
  }
}

function resolveSkillRoot() {
  if (process.env.DASHI_PPT_SKILL_ROOT) return process.env.DASHI_PPT_SKILL_ROOT;
  // 现场 sync 到临时目录:发布内容与当前 commit 严格一致(本机安装目录可能陈旧)。
  const syncRoot = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'dashi-npm-sync-')), 'skill');
  execFileSync('node', ['scripts/sync-skill.mjs'], {
    cwd: ROOT,
    stdio: 'pipe',
    env: { ...process.env, DASHI_PPT_SKILL_ROOT: syncRoot, DASHI_PPT_SKIP_SOURCE_SYNC: '1' },
  });
  return syncRoot;
}

function main() {
  const SKILL_ROOT = resolveSkillRoot();
  for (const required of ['SKILL.md', 'project/package.json', 'project/src', 'assets', 'scripts/render_goal_deck.sh']) {
    if (!fs.existsSync(path.join(SKILL_ROOT, required))) {
      throw new Error(`skill 产物缺少 ${required};先运行 npm run skill:sync`);
    }
  }
  const version = JSON.parse(fs.readFileSync(path.join(SKILL_ROOT, 'project/package.json'), 'utf8')).version;
  if (!/^\d+\.\d+\.\d+$/.test(version)) throw new Error(`非法版本号: ${version}`);

  // 幂等:该版本已在 registry 上则跳过。
  try {
    const published = run('npm', ['view', `${PACKAGE_NAME}@${version}`, 'version']).trim();
    if (published === version) {
      console.log(`npm 包 ${PACKAGE_NAME}@${version} 已发布,跳过。`);
      return;
    }
  } catch {
    // 404:未发布过(含首版),继续。
  }

  const staging = fs.mkdtempSync(path.join(os.tmpdir(), 'dashiai-npm-skill-'));
  try {
    copySkillTree(SKILL_ROOT, path.join(staging, 'skill'));
    fs.mkdirSync(path.join(staging, 'bin'), { recursive: true });
    fs.copyFileSync(path.join(ROOT, 'scripts/npm-dist/install.mjs'), path.join(staging, 'bin/install.mjs'));
    fs.copyFileSync(path.join(ROOT, 'LICENSE'), path.join(staging, 'LICENSE'));
    fs.writeFileSync(path.join(staging, 'package.json'), `${JSON.stringify({
      name: PACKAGE_NAME,
      version,
      description: 'DashiAI PPT skill installer — offline-editable HTML decks with PPTX/PDF export. 国内可经 npmmirror 安装。',
      bin: { 'dashi-ppt-skill': 'bin/install.mjs' },
      files: ['bin', 'skill', 'LICENSE'],
      // 与仓库一致:skill 本体 AGPL-3.0(html-deck-to-pptx 子包为专有组件,见其目录内 LICENSE)。
      license: 'AGPL-3.0-only',
      repository: { type: 'git', url: 'git+https://github.com/chuspeeism/dashi-ppt-skill.git' },
      homepage: 'https://github.com/chuspeeism/dashi-ppt-skill#readme',
      keywords: ['agent-skill', 'ppt', 'presentation', 'claude', 'codex'],
      // 与导出子包 html-deck-to-pptx 的 engines 对齐(README/SKILL 同步声明 20+)。
      engines: { node: '>=20' },
    }, null, 2)}\n`);
    fs.writeFileSync(path.join(staging, 'README.md'), [
      '# dashi-ppt-skill',
      '',
      'Installer package for the [DashiAI PPT](https://github.com/chuspeeism/dashi-ppt-skill) agent skill.',
      '',
      '```bash',
      '# International',
      'npx dashi-ppt-skill',
      '# 中国大陆(走 npmmirror 镜像)',
      'npx --registry=https://registry.npmmirror.com dashi-ppt-skill',
      '```',
      '',
      'Options: `--dir <skills-root>` to target a specific skills directory, `--list` to show detected locations.',
      '',
      'Licensed under AGPL-3.0; the bundled `html-deck-to-pptx` export engine is proprietary, licensed for use only as part of this skill (see its LICENSE). Installer source: `npm-dist/` in the repository.',
      '',
    ].join('\n'));

    const publishArgs = ['publish', '--access', 'public', ...(DRY_RUN ? ['--dry-run'] : [])];
    const output = run('npm', publishArgs, { cwd: staging, stdio: 'pipe' });
    console.log(output.trim().split('\n').slice(-3).join('\n'));
    console.log(`${DRY_RUN ? '[dry-run] ' : ''}npm 包 ${PACKAGE_NAME}@${version} 发布完成。`);

    if (!DRY_RUN) {
      // 主动触发 npmmirror 同步(尽力而为,失败不影响发布结果)。
      fetch(`https://registry-direct.npmmirror.com/-/package/${PACKAGE_NAME}/syncs`, { method: 'PUT' })
        .then((res) => console.log(`npmmirror 同步已触发(${res.status})`))
        .catch(() => console.log('npmmirror 同步触发失败(将由镜像定时同步)'));
    }
  } finally {
    if (!process.env.DASHI_PPT_KEEP_NPM_STAGING) fs.rmSync(staging, { recursive: true, force: true });
  }
}

main();
