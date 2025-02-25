. "$(dirname -- "$0")/functions.sh"
setup
install

f=".archy/pre-commit"

npx --no-install archgpt install

npx --no-install archgpt add $f "foo"
grep -m 1 _ $f && grep foo $f && ok

npx --no-install archgpt add .archy/pre-commit "bar"
grep -m 1 _ $f && grep foo $f && grep bar $f && ok

npx --no-install archgpt set .archy/pre-commit "baz"
grep -m 1 _ $f && grep foo $f || grep bar $f || grep baz $f && ok

