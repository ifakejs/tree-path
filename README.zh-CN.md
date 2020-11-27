# Welcome to @ifake/tree-path 👋
![Version](https://img.shields.io/npm/v/@ifake/tree-path)
[![codecov](https://codecov.io/gh/ifakejs/tree-path/branch/master/graph/badge.svg?token=a7710442-2e1c-41cb-ad48-3da63c8ca3bf)](https://codecov.io/gh/ifakejs/tree-path)
![Npm Bundle Size](https://img.shields.io/bundlephobia/min/@ifake/tree-path)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ifakejs/tree-path/blob/master/LICENSE)
![Build Status](https://travis-ci.org/ifakejs/tree-path.svg?branch=master)

> 根据条件获取该条件下的所有树的节点.

[English]((https://github.com/ifakejs/tree-path/blob/master/README.md)) | 简体中文

### 🏠 [首页](https://github.com/ifakejs/tree-path)

## 安装

```sh
npm install @ifake/tree-path -S
# 或者
yarn add @ifake/tree-path -S
```

## 使用

- 浏览器
```js
// 在浏览器端, 我们暴露了一个全局变量`IFakeTP`

const { treePath } = window.IFakeTP
```
- ES6 Module
```js
import { treePath } from '@ifake/tree-path'
```
- CommonJs
```js
const { treePath } = require('@ifake/tree-path')
```

## API
#### **treePath(TreePath)**

```ts
export interface TreePath {
  tree: Tree
  childrenKey?: string
  breakCondition: BreakCondition
}
```

- **tree**
接受一个树即数组对象的形式.
- **childrenKey**
自定义树的嵌套的属性值, 默认是 `children`
- **breakCondition**
实时地返回当前遍历的树的节点, 根据该函数返回的条件返回所需要查询的数据结构

## 例子
```js
const sourceData = [
 {
   id: 1,
   child: [
     {
       id: '1-1'
     },
     {
       id: '1-2',
       child: [
         {
           id: '1-2-1'
         }
       ]
     }
   ]
 },
 {
   id: 2
 }
]

const result = treePath({
    tree: sourceData,
    childrenKey: 'child',
    breakCondition: treeNode => treeNode.id === '1-2-1'
})

// 结果:
[
    {
       id: 1,
       child: [...]
     },
    {
       id: '1-2',
       child: [...]
     },
    {
      id: '1-2-1'
    }
]
```

## 测试

```sh
yarn run test
```

## 作者信息

* Website: http://loadingmore.com
* Github: [@BiYuqi](https://github.com/BiYuqi)

## 🤝 Contributing

欢迎贡献代码, 发现问题!

问题报告地址 [issues page](https://github.com/ifakejs/tree-path/issues).

## 📝 License

Copyright © 2020 [biyuqiwan@163.com](https://github.com/BiYuqi).

当前项目的许可是[MIT](https://github.com/ifakejs/tree-path/blob/master/LICENSE).

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
