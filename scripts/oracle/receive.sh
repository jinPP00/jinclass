#!/usr/bin/env bash
# Restricted SSH receiver. Admin installs a separate forced command for each site.
# Adapted from project_hub/scripts/oracle-deploy-receive.sh; atomically switches static releases.
set -euo pipefail
site=${1:?site}; port=${2:?port}
[[ $site == jinclass && $port == 8891 || $site == aimoa && $port == 8892 ]] || exit 1
[[ ${SSH_ORIGINAL_COMMAND:-} =~ ^deploy\ ([0-9a-f]{40})$ ]] || exit 1
revision=${BASH_REMATCH[1]}
root="/home/ubuntu/static-sites/$site"
exec 9>"$root/.deploy.lock"
flock -w 60 9
release=$(mktemp -d "$root/releases/$revision.XXXXXXXX")
cat > "$release/source.tar"
tar -tf "$release/source.tar" > "$release/entries"
if grep -E '(^/|(^|/)\.\.(/|$))' "$release/entries"; then exit 1; fi
if grep -Ev '^(\./)?(dist/.*)$' "$release/entries"; then exit 1; fi
if tar -tvf "$release/source.tar" | grep -Ev '^[-d]'; then exit 1; fi
tar -xf "$release/source.tar" -C "$release" --no-same-owner
test -s "$release/dist/index.html"
printf '{"commit":"%s","deployedAt":"%s"}\n' "$revision" "$(date -u +%FT%TZ)" > "$release/dist/deploy-version.json"
previous=$(readlink "$root/current")
ln -s "$release/dist" "$root/current.next"
mv -Tf "$root/current.next" "$root/current"
rollback() { result=$?; if [[ $result != 0 ]]; then ln -s "$previous" "$root/current.rollback"; mv -Tf "$root/current.rollback" "$root/current"; fi; exit "$result"; }
trap rollback EXIT
curl --fail --silent --show-error --retry 3 "http://127.0.0.1:$port/" -o /dev/null
curl --fail --silent --show-error "http://127.0.0.1:$port/deploy-version.json" > "$release/verified.json"
node -e 'const fs=require("fs");if(JSON.parse(fs.readFileSync(process.argv[1])).commit!==process.argv[2])process.exit(1)' "$release/verified.json" "$revision"
echo "$site Oracle revision verified: $revision"
trap - EXIT
