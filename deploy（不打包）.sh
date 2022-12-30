#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 填写变量值
push_addr=git@github.com:xcl-lywc/blogs.git # git提交地址，必须是SSH（需生成公钥）
commit_info=... # 定义提交的信息
push_branch=main # 推送的分支

# 部署到github
# git init
git add -A
git commit -m "部署, ${commit_info}"
git push -f $push_addr HEAD:$push_branch
