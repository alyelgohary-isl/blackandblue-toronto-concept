#!/usr/bin/env bash
# Encode a clip as a seamless forward-then-reverse loop (no jump at the seam), muted H.264 + webp poster.
#   tools/pingpong.sh in.mp4 public/assets/loops/name [width] [seconds] [start]   → name.mp4, name.webp
set -euo pipefail
in="$1"; out="$2"; w="${3:-1600}"; t="${4:-5}"; ss="${5:-0}"
ffmpeg -v error -y -ss "$ss" -t "$t" -i "$in" -an -filter_complex \
  "[0:v]fps=24,scale=$w:-2:flags=lanczos,split[a][b];[b]reverse,trim=start_frame=1,setpts=PTS-STARTPTS[r];[a][r]concat=n=2:v=1[v]" \
  -map "[v]" -c:v libx264 -profile:v high -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "$out.mp4"
tmp="$(mktemp -t poster).png"; ffmpeg -v error -y -ss "$ss" -i "$in" -frames:v 1 -vf "scale=$w:-2:flags=lanczos" "$tmp" && cwebp -quiet -q 78 "$tmp" -o "$out.webp"; rm -f "$tmp"
echo "$out.mp4 $(du -h "$out.mp4" | cut -f1)"
