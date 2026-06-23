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
if [[ ! -d node_modules || package.json -nt node_modules/.package-lock.json || package-lock.json -nt node_modules/.package-lock.json ]]; then
npm install
fi
mkdir -p "$(dirname "$OUT_PATH")"
npm run props:safe -- --goal "$SPEC_PATH" --write
npm run validate:goal-spec -- "$SPEC_PATH"
npm run render:goal -- "$SPEC_PATH" "$OUT_PATH"
npm run validate:swiss -- "$OUT_PATH"
npm run validate:goal-copy -- "$SPEC_PATH" "$OUT_PATH"
OUT_DIR="$(dirname "$OUT_PATH")"
PREVIEW_PORT="${DASHI_PPT_PREVIEW_PORT:-4178}"
npm run preview:start -- "$OUT_DIR" "$PREVIEW_PORT"
