#!/usr/bin/env bash
# Make sure the motion-site template is on this machine; print its path.
#   scripts/bootstrap.sh            -> echoes the template dir
set -euo pipefail
local_dir="${MOTION_TEMPLATE:-$HOME/Islands/motion-site-template}"
repo="${MOTION_TEMPLATE_REPO:-https://github.com/alyelgohary-isl/motion-site-template.git}"
if [ ! -f "$local_dir/tools/new-site.sh" ]; then
  mkdir -p "$(dirname "$local_dir")"
  git clone -q "$repo" "$local_dir"
fi
echo "$local_dir"
