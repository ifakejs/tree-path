# Welcome to @ifake/tree-path 👋
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ifakejs/tree-path/blob/master/LICENSE)
![CI](https://travis-ci.org/ifakejs/tree-path.svg?branch=master)

> Get tree path by the given condition.

### 🏠 [Homepage](https://github.com/ifakejs/tree-path)

## Install

```sh
npm install ifake/tree-path -S
# or
yarn add ifake/tree-path -S
```

## Usage

- Browser
```js
// We expose a global variable that can be used directly in the browser.

window.TreePath(data)
```
- ES6 Module
```js
import { treePath } from 'ifake/tree-path'
// or
import treePath from 'ifake/tree-path'
```
- CommonJs
```js
const { treePath } = require('ifake/tree-path')
// or
const treePath = require('ifake/tree-path')
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
Receive an array of object data.
- **childrenKey**
Custom property values, default is `children`
- **breakCondition**
Receives a real-time value from inside the function, defines conditions based on the value and returns a boolean value.

## Example
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

// The value should be:
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

## Run tests

```sh
yarn run test
```

## Author

👤 **biyuqiwan@163.com**

* Website: http://loadingmore.com
* Github: [@BiYuqi](https://github.com/BiYuqi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/ifakejs/tree-path/issues).

## 📝 License

Copyright © 2020 [biyuqiwan@163.com](https://github.com/BiYuqi).

This project is [MIT](https://github.com/ifakejs/tree-path/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
