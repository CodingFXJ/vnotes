npm run build

cd public/

git init

git add -A


git commit -m 'deploy'

git push -f git@gitee.com:GiteeFXJ/vnotes.git master:gh-pages

cd ..

git add .

git commit -m 'vnotes-src'


git push -f git@gitee.com:GiteeFXJ/vnotes.git 


