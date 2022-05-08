---
title: MongoDB学习
date: 2022-5-7 21:20:00
tags:
 - MongoDB
categories: 
 - 后端学习
---



### 一、相关概念

MongoDB是文档型的NoSQL数据库

![image-20220508194905648](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220508194905648.png)

![image-20220507220553150](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220507220553150.png)



**优点**：

1. 高性能

2. 高可用性
3. 可扩展分片集群



**应用场景**：（数据量大、读写操作频繁、对事务要求不高）



### 二、数据库操作

**查看所有数据库**

```sh
show databases
show dbs
#连接数据库后默认在test库
use testdb01 	#切换数据库
```

![image-20220507215028603](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220507215028603.png)

**创建/删除数据库**

```shell
use 数据库名 	# use testdb01
db 	#查看所在数据库
db.dropDatabase() 	#删除当前所在库
```



### 三、集合相关操作

```shell
show collections; 	# 查看数据库集合	show tables;
db.createCollection('collectionName',[option]);	 #显式创建集合
db.users.insert({'name':'李四'}); 	#隐式创建集合 往不存在的集合插入数据
db.users.drop(); 	#删除集合
```



### 四、文档相关操作

#### 1.查询

```shell
db.users.find() 	#查询所有 SELECT * from users  
db.getCollection('users').find()	#查询所有
db.getCollection('users').findOne()	#查询第一个
db.getCollection('users').findOne({name:'zhang3'})		#查询符合条件的第一个

db.users.find( { name: 1, age: 1 } ) 	#SELECT _id,name,age from users 
db.users.find( {  name: 1, age: 1, _id: 0 } ) 	#去除id字段
db.users.find( { name: 0, age: 0 } ) 	#去除特定字段
db.users.find().pretty() 	#格式化查询(适用于长/复杂数据)
```

- **等值查询**

```shell
db.users.find( { age:18} )
#	WHERE age = 18
```

- **AND条件**

```shell
db.users.find( { age: { $lt: 30 } ,sex:'男',} )
#	WHERE sex = "男" AND age < 30
db.users.find( { age:24, age: { $lt: 30 } } )  #相同字段and查询中出现多次,以最后一个为查询条件
#	WHERE age < 30
```

- **OR条件**

```shell
db.users.find( { $or: [{sex:'男'}, { age: { $lt: 30 } } ] } )
#	WHERE sex = "男" OR age < 30
```

- **同时使用AND和OR条件**

```shell
db.users.find( {
    { like:'美女'},
     $or: [{sex:'男'}, { age: { $lt: 30 } },{ name: /^p/ } ] 
} )
#	WHERE like = "美女" AND (sex = "男" OR age < 30 OR name LIKE "%p%")
```

- **查询条件中使用查询操作符**

```shell
db.users.find( { age: { $in: [ "20", "22" ] } } )
```

- **模糊查询**

```shell
db.users.find( { name:/张/} ) #查询名字中含有'张'的所有
# WHERE name LIKE "%张%
```

- **数组中的查询**

```shell
db.users.find(likes:{$size:3})	#查询'喜好'数组大小为3
```

- **排序**

```shell
db.users.find().sort({age:-1}) # 1 升序 	-1 降序 (没有这个字段的数据排在前面)
```

- **分页**

```shell
db.users.find().skip(40).limit(30) # 跳过40条数据查30条数据 (起始0,则从40开始)
```

- **条数**

```shell
db.users.find().count()
```

- **去重**

```shell
db.users.find().distinct('字段')
```





- **对比语法:**

![image-20220507231641824](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220507231641824.png)

#### 2.插入

- **单条文档**

```shell
db.users.insert({'name':'李四',age:18,sex:'男'});  # 提示已弃用
db.getCollection('users').insert({'name':'李四',age:18,sex:'男'})
db.users.insertOne({'name':'赵六'})
```

- **多条文档**

```shell
db.users.insert([{name:'缘一'},{name:'二楞'}])
db.users.insertMany([{name:'缘一1'},{name:'二楞1'}])
db.getCollection('users').insertMany([{name:'zhang3',age:19},{name:'zhang4',age:19}])
```

- **脚本方式**

```shell
for(let i =0;i<5;i++){ 
	db.users.insert({id:i,name:'zhang'+i})
}
```



#### 3.删除

```shell
db.users.remove({}) 	#删除所有文档
db.users.remove({_id:ObjectId("62767f841f41a9d7de748124")})	 #删除某一条
db.users.remove({age:20})	 #删除满足条件的数据

db.getCollection('users').deleteOne({name:'zhang3'})	 #删除某一条
db.getCollection('users').deleteMany({age:18})	 #删除满足条件的数据
```



#### 4.更新

语法 :

```js
db.集合名称.update(
	<query>,
    <update>,
    {
        updert:<boolean>, 
        multi:<boolean>,
    	writeConcern:<document> //抛出异常的级别
    }
)
```



```shell
db.users.update({_id:ObjectId('627686574f57a31b328b63ab')},{$set:{age:24,likes:['代码','吃饭']}})  #指定更新
db.users.update({age:18},{$set:{age:24,likes:['动漫','美女']}})  #更新匹配到的第一条
db.users.update(
    {age:18},
    {$set:{age:24,likes:['动漫','美女']}},
    {multi:true} 	#更新多条
    {upsert:true} 	#不存在则插入
)  #更新匹配到的所有

db.getCollection('users').update({age:18},{$set:{age:24,likes:['动漫','美女']}})	#更新匹配到的第一条
```



### 五、[Mongoose学习](http://www.mongoosejs.net/docs/index.html)

 
