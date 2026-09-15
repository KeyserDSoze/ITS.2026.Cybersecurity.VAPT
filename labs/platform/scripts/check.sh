#!/usr/bin/env sh
set -eu
for url in \
  http://127.0.0.1:5005/api/health \
  http://127.0.0.1:3000 \
  http://127.0.0.1:8080 \
  http://127.0.0.1:9090; do
  printf '%-42s' "$url"
  if curl -fsS --max-time 5 "$url" >/dev/null; then
    echo ' OK'
  else
    echo ' FAIL'
  fi
done
