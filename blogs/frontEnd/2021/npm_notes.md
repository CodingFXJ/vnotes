---
title: npm学习笔记
date: 2021-09-23 13:26:00
tags:
 - NPM
categories: 前端
---
[[toc]]
## 一、npm介绍

npm（Node Package Manager）是 node 的包管理器，它是随着 NodeJs 安装时一起被安装。



### npm作用

通过 NPM 可以对 Node 的工具包进行搜索、下载、安装、删除、上传。借助别人写好的包，方便于开发。

### 安装

官网地址：https://nodejs.org/en/download/

中文文档：https://www.npmjs.com.cn/



### 二、npm常用命令

- 查看

```
nmp -v                   #查看npm版本
npm -init                #初始化，创建package.json文件
npm init --yes           #直接参加创建 package.json 文件
npm versison             #查看所有模块的版本
npm search 包名           #搜索包
npm root -g              #查看全局安装包的存放位置
```



- 安装与删除

```
npm install 包名 --save / s   #安装并添加dependencies 属性
npm install 包名 --save-dev   #安装并添加devDependencies 属性
npm install 包名 -D           #安装并添加开发环境依赖
npm install              #下载当前项目所依赖的包
npm install 包名 -g       #全局安装包
npm remove / r 包名       #删除包
npm audit fix            #包的修复、包的更新
```

- [镜像安装](http://npm.taobao.org/mirrors/npm/)

```
npm config set registry https://registry.npm.taobao.org
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm config get registry     #验证镜像服务器安装是否成功
cnpm install xxx            #使用镜像服务器
```

### package.json文件

```
{
  "name": "1-npm",      #包的名字
  "version": "1.0.0",   #包的版本
  "description": "",    #包的描述
  "main": "index.js",   #包的入口文件
  "scripts": {          #脚本配置
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",         #作者
  "license": "ISC"      #版权声明
}

```



## 三、版本符号

> version: 13.6.8
>
> major:13, 	minor:6, 	patch:8

```json
^ : 锁定major
~ : 锁定minor
空 : 锁定patch
* : 最新版本
```

```bash
查看包的版本：npm view xxx versions

安装开发依赖：npm i xxx -D

安装开发依赖：npm i xxx -D

查看依赖关系：npm list xxx | grep xxx

强制清空缓存：npm cache clean --force

```



## 四、nvm

nvm安装踩坑：`No installations recognized.` 

必须先卸载干净之前已安装的nodejs，再利用`nvm install 指定版本`安装nodejs



