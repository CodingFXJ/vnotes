---
title: AntV使用总结
date: 2022-4-20 22:26:00
tags:
 - AntV
categories: 
 - 踩坑积累
---



### 一、默认收缩二级节点

[控制收缩节点](https://antv-g6.gitee.io/zh/docs/manual/middle/states/defaultBehavior#collapse-expand)

```js
//树形图哪个需要收缩则把属性collapsed设置为true
data.children.forEach(item => item.collapsed = true)
```

### 二、改用iconfont文字不居中问题

![image-20220828171953671](C:\Users\30100\AppData\Roaming\Typora\typora-user-images\image-20220828171953671.png)

```js
//注册节点添加label图形时动态计算label位置
 group.addShape("text", {
   attrs: {
     x: 0,
     y: -80,
   textAlign: "center",
   textBaseline: "middle",
    text: cfg.label,
   ...labelStyle.style,//这里需要重新处理x,y
 },
  name: "hubCombo-label",
});
 return keyShape;
},
},

```



### 三、初始化画图完成后出现这个锯齿

官方解决思路: [https://github.com/antvis/G6/issues/3896](antv/G6-github-issues)
