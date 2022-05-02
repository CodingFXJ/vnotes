# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public/

# 如果是发布到自定义域名
git init
git add -A
git commit -m 'deploy'

# 打包后的文件推送到gitee的gh-pages分支

 git push -f git@gitee.com:GiteeFXJ/vnotes.git master:gh-pages
cd ..
git add .
git commit -m 'vnotes-src'
git push -f origin master
git push -f git@github.com:CoderFXJ/vnotes.git master
cd -