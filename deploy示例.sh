#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 填写变量值
DIST_PATH=docs/.vuepress/dist # 打包生成的文件夹路径
GITHUB_TOKEN= # github的token
CODING_TOKEN= # CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $DIST_PATH

# 部署到github
echo 'a.xcl.com' > CNAME # 自定义域名
if [ -z "$GITHUB_TOKEN" ]; then
  msg='来自github pages的部署'
  githubUrl=git@github.com:xcl-lywc/blogs.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://xcl-lywc:${GITHUB_TOKEN}@github.com/xcl-lywc/blogs.git
  git config --global user.name "xcl-lywc"
  git config --global user.email "xiaochuanlin941109@163.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages

# 部署到腾讯云
echo 'www.xiaochuanlin.com\xiaochuanlin.com' > CNAME  # 自定义域名
echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true
  codingUrl=git@e.coding.net:xcl/xcl.git
else
  codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xcl/xcl.git
fi
git add -A
git commit -m "${msg}"
git push -f $codingUrl master

cd - # 退回开始所在目录
rm -rf $DIST_PATH # 删除生成的文件夹