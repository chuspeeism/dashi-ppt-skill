#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="${DASHI_PPT_PROJECT_ROOT:-$(cd "$SCRIPT_DIR/../project" && pwd)}"
CALLER_CWD="$(pwd)"

if [[ $# -ne 2 ]]; then
  echo "Usage: render_goal_deck.sh <goal-spec.json> <output/ppt/index.html>" >&2
  exit 2
fi

SPEC_PATH="$1"
OUT_PATH="$2"

if [[ "$SPEC_PATH" != /* ]]; then
  SPEC_PATH="$CALLER_CWD/$SPEC_PATH"
fi

if [[ "$OUT_PATH" != /* ]]; then
  OUT_PATH="$CALLER_CWD/$OUT_PATH"
fi

cd "$PROJECT_ROOT"
# .npmrc 缺失时从模板重建(npm publish 会剔除 .npmrc,个别安装路径可能丢失)。
if [[ ! -f .npmrc && -f npmrc.template ]]; then
  cp npmrc.template .npmrc
fi
if [[ ! -d node_modules || package.json -nt node_modules/.package-lock.json || package-lock.json -nt node_modules/.package-lock.json ]]; then
# 首装前探测 npm 源:官方可达走官方(尊重全局镜像配置),不可达锁 npmmirror。
# 探测失败不阻塞 —— 缺省 .npmrc 已指 npmmirror,任何网络保底可装。
node scripts/ensure-registry.mjs || true
npm install
fi
# chromium headless shell:无 ProcessSingleton 的无头浏览器。沙箱型宿主(如豆包)会拦完整版
# Chrome 创建单例锁,导出直接失败;headless shell 同一沙箱下可正常导出。幂等(已装秒过),
# 下载失败不阻塞生成(那样导出回退系统 Chrome,与旧行为一致)。
# 镜像模式下浏览器二进制同样走 npmmirror(官方认可的 playwright 镜像),否则国内下载必败。
if grep -q 'registry=https://registry.npmmirror.com' .npmrc 2>/dev/null; then
  export PLAYWRIGHT_DOWNLOAD_HOST="${PLAYWRIGHT_DOWNLOAD_HOST:-https://cdn.npmmirror.com/binaries/playwright}"
fi
npx --no-install playwright-core install chromium-headless-shell >/dev/null 2>&1 || true
mkdir -p "$(dirname "$OUT_PATH")"
npm run props:safe -- --goal "$SPEC_PATH" --write
npm run validate:goal-spec -- "$SPEC_PATH"
npm run render:goal -- "$SPEC_PATH" "$OUT_PATH"
npm run validate:swiss -- "$OUT_PATH"
npm run validate:goal-copy -- "$SPEC_PATH" "$OUT_PATH"
OUT_DIR="$(dirname "$OUT_PATH")"
PREVIEW_PORT="${DASHI_PPT_PREVIEW_PORT:-5200}"
npm run preview:start -- "$OUT_DIR" "$PREVIEW_PORT"
