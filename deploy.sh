# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
echo "开始打包静态文件..."

npm run build
echo "静态文件打包完毕！"

# 进入生成的文件夹

echo "进入public文件夹！"
cd public/

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

echo "初始化git..."
git init

echo "将所有更改提交至暂存区---"
git add -A

echo "将暂存区内容添加到本地仓库中..."
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>

echo "开始强制推送打包后的博客静态资源..."
 git push -f git@gitee.com:GiteeFXJ/vnotes.git master:gh-pages


 echo "返回Vnotes根目录---"
cd ..

echo "将所有源码更改提交至暂存区---"
git add .

echo "将暂存区源码添加到本地仓库中..."
git commit -m 'vnotes-src'

echo "开始强制推送博客源码..."
git push -f origin master

