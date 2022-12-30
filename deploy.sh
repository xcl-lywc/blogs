#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 填写变量值
push_addr=git@github.com:xcl-lywc/blogs.git # git提交地址，必须是SSH（需生成公钥）
commit_info=... # 定义提交的信息
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=main # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

# 部署到github
# git init
git add -A
git commit -m "部署, ${commit_info}"
git push -f $push_addr HEAD:$push_branch

cd - # 退回开始所在目录
rm -rf $dist_path # 删除生成的文件夹
