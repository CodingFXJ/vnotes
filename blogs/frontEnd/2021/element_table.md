---
title: Element纵向表头表格
date: 2021-11-27 11:26:00
tags:
 - ElementUI
categories: 
 - 踩坑积累
---





**横向表头元数据**

```js
 originData: [
          {
              month: '1-1',
              bandwith: '50',
          },
          {
              month: '1-2',
              bandwith: '70',
          },
          {
              month: '1-3',
              bandwith: '30',
          },
          {
              month: '1-4',
              bandwith: '30',
          },
          {
              month: '1-5',
              bandwith: '30',
          },
          {
              month: '1-6',
              bandwith: '30',
          },
          {
              month: '1-7',
              bandwith: '30',
          }, 
          {
              month: '1-8',
              bandwith: '30',
          },
          {
              month: '1-9',
              bandwith: '30',
          },
          {
              month: '1-10',
              bandwith: '30',
          },
          
      ],
```

#### 现状

> 由于月份过多，按原来横向表头表格展示的话， 表格的宽很小，长度占整个页面很大空间，右侧有很大的空间浪费



#### 思路

> **方案一**: 想着把表格用`css`旋转角度, 但想着数据内容也会跟着旋转，害得把每个数据内容和表头都反向旋转
>
> （显然有点麻烦且造成重绘影响性能 ）



> **方案二**：想着从数据结构上做手脚，然后把表头隐藏，把第一列加粗显示为表头



#### 行动

```vue
<el-table border style="margin-top: 50px;" :data="translateData" :show-header="false">
    <el-table-column v-for="(item, index) in originData.length"   :key="index" 
     :class-name="index ===0 ? 'cloumn-header':''" align="center">
        <template slot-scope="{row}">
            {{row[index]}}
        </template>
    </el-table-column>
</el-table>
```

```js
  data () {
    return {
      wrapperLoading:false,
      monthValue:"",
      bandwidthChart:{},
      originData: [
        //...
        ],
      originTitle: ['计费月份', '计费带宽',  ], 
      translateData: []
    }
  },
  created () { 
      let matrixData = this.originData.map((row) => {
          let arr = []
          for (let key in row) {
              arr.push(row[key])    
          }
          return arr
      })
      // 合并标题形成最终的数据
      this.translateData = matrixData[0].map((col, i) => {
          return [this.originTitle[i], ...matrixData.map((row) => {
              return row[i]
          })]
      })
  
  },
```



```scss
 .el-table ::v-deep .cloumn-header{
      font-weight: bold;
}
```



#### 效果

![image-20220425134732165](https://vnote-bucket.oss-cn-shanghai.aliyuncs.com/image-20220425134732165.png)