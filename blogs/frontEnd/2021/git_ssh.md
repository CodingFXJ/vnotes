---
title: 添加多个SSH公钥对应多个代码托管平台
date: 2021-12-04 19:26:00
tags:
 - Git
categories: 
 - 踩坑积累
---



### 1.生成公钥和私钥

```bash
ssh-keygen -t rsa -C '8888888@qq.com'  #换成自己邮箱,可以随便填,相当于一个标识
#密码不用填 直接回车
```

![image-20220416211353115](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220416211353115.png)

> `ls` 查看生成的文件



![image-20220416211808297](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220416211808297.png)



### 2.在github/gitee/gitlab设置添加公钥

+ **查看生成的公钥`.pub`文件  例如: `cat  id_rsa_github_gmail.pub`**
+ **复制公钥所有内容 ，在github添加**

![image-20220416212417100](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220416212417100.png)

+ **添加私钥到ssh-agent中 ，出现`Identity added`表示成功**

  ```bash
  ssh-add ~/.ssh/id_rsa_github_qq
  ```

1. 若提示 `Could not open a connection to your authentication agent`

​	先执行`ssh-agent bash` 再执行上面代码



2. 报错: `Error connecting to agent: No such file or directory`

​	解决方法：【**以管理员身份运行**】在 PowerShell 执行

```bash
Set-Service ssh-agent -StartupType Manual
Start-Service ssh-agent
```



+ **查看私钥列表**

 ```bash
 ssh-add -l
 ```



**出现此提示表示未配置成功，重新检查步骤配置**

```bash
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

```

+ 创建config文件，并编辑 `vi config`

```bash
Host github.com 
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_git_gmail #私钥地址
```

+ 测试连接是否成功

  ```bash
  ssh -T git@giee.com
  #或
  ssh -T git@github.com
  ```

  

  

   