#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

msg="deploy at `date`"
if [ $# != 0 ]
  then msg="$*"
fi
git add -A
git commit -m "$msg"
echo 'local commited'

git push -f https://github.com/lq782655835/node-checker.git master
echo 'remote commited'
# cd -