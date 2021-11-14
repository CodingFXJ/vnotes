---
title: 手写JS高阶函数
date: 2021-10-13
tags:
 - JavaScript
categories: 
 -  前端基础
---

## 手写 map

### 简单写法

```js
 let arr1 = [1, 2, 3]
 //es6map
var array = arr1.map((item, index) => {
    return item * 2
})
console.log(array);
//手写map
function mymap(arr, mapCallback) {
    if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
        return []
    } else {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            result.push(mapCallback(arr[i], i, arr))
        }
        return result;
    }
}
let arr2 = mymap(arr1, (item, i, arr) => {
    return item * 2
})
console.log(arr2);
```

### 完整写法

```js
let arr1 = [1, 2, 3]
let arr4 = [6, 9]
//写在数组原型链上
Array.prototype.myMap = function(fn, thisArg) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw (fn + ' is not a function')
    }
    let resultArr = []
    let currentArr = this
    for (let i = 0; i < currentArr.length; i++) {
        resultArr[i] = fn.call(thisArg, currentArr[i], i, currentArr)
    }
    console.log(thisArg);//[6, 9]
    return resultArr
}
//调用手写map函数
let arr3 = arr1.myMap((item, index, arr1) => {
    return item * 100
}, arr4)
console.log(arr3);[100,200,300]
```





## 手写 filter

```js
 Array.prototype.myfilter = function(fn, thisArg) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw (fn + ' is not function')
    }
    let resArray = []
    let curArray = this
    for (let i = 0; i < curArray.length; i++) {
        if (fn.call(thisArg, curArray[i], i, curArray)) {
            resArray.push(curArray[i])
        }
    }
    return resArray
}
//测试
arr1 = [111, 22, 234, 999]
let arr6 = arr1.myfilter((item) => item > 200)
console.log('arr6: ', arr6);//[234,999]
```





## 手写 reduce

```js
 // 手写rudece
Array.prototype.myreduce = function(fn, initValue) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw new Error(fn + ' is not function')
    }
    let initIndex
    let acc
    let thisArr = this
    //有无初始值
    acc = arguments.length == 1 ? thisArr[0] : initValue
    initIndex = arguments.length == 1 ? 1 : 0
    //数组是否为空
    if (thisArr.length == 0 && arguments.length == 1) {
        throw new Error('Reduce of empty array with no initial value')
    }
    for (let i = initIndex; i < thisArr.length; i++) {
        acc = fn(acc, thisArr[i], i, thisArr)
    }
    return acc
}
```

测试

```js
arr22 = [1, 2, 3, 4, 5]
let count = arr22.myreduce((pre, cur) => {
    return pre + cur
}) 		//15
```



## 手写 some

```js
Object.prototype.mysome = function(fn, thisArg) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw new Error(fn + ' is not function')
    }
    let thisArr = this
    for (let i = 0; i < thisArr.length; i++) {
        let result = fn.call(thisArg, thisArr[i], i, thisArr)
        if (result) return true
    }
    return false
}

let res1 = arr1.mysome((item) => item > 10)
console.log('myres: ', res1);
```



## 手写 join

```js
Array.prototype.myjoin = function(str) {
    //join()默认无参数时为逗号
   str = arguments.length == 0 ? ',' : str
   	 //空字符串处理
     //if (str !== '') {
     //      str = str || ','
     //  }
    let arr = this
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr.length - 1 === i) {
            res += arr[i]
        } else {
            res += arr[i] + str
        }


    }
    return res
}
console.log(" arr.join(' - '): ", arr.myjoin('=='));
console.log(" arr.join(' - '): ", arr.myjoin());
```



## 手写函数计时器

```js
function fn() {
        for (let i = 0; i < 10000; i++) {

        }
    }
let countTime = function(callback) {
    let res;
    console.time('execute time');
    res = callback();
    console.timeEnd('execute time')
    return res;
}
countTime(fn)
```



## 结合 filter 和 every

**打印自除数**

```js
function count(left, right) {
    let arr = []
    for (let i = left; i <= right; i++) {
        arr.push(i)
    }
    return arr.filter((item) => {
        return item.toString().split('').every((val) => {
            return item % parseInt(val) == 0
        })
    })
}
// 自除数
console.log(' count(1, 200): ', count(1, 200));
```



## 手写 toLowerCase

```js
let str = 'hello VUE ,I WILL study hard'
    console.table(str.toLowerCase());
    let mytoLowerCase = (str) => {
        return str.replace(/[A-Z]/g, (char) => {
            return String.fromCharCode(char.charCodeAt(0) + 32)
        })
    }
  console.log(' mytoLowerCase(str): ', mytoLowerCase(str));
//hello vue ,i will study hard
```

