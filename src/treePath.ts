import { isArr } from './helper'

export interface JSONObject {
  [key: string]: any
}

export type Tree = JSONObject[]

export interface BreakCondition {
  (treeNode: JSONObject): boolean
}

export interface TreePath {
  tree: Tree
  childrenKey?: string
  breakCondition: BreakCondition
}

const DEFAULT_KEY = 'children'

export function treePath(treeData: TreePath): Tree {
  const { tree, childrenKey, breakCondition } = treeData
  const defaultChildrenKey = childrenKey || DEFAULT_KEY

  if (!isArr(tree)) {
    throw 'data must be an array of object.'
  }

  const len = tree.length

  if (len === 0) {
    return []
  }

  const result: Tree = []

  function conditionLoop(treeNode: JSONObject): void {
    result.push(treeNode)

    if (breakCondition && typeof breakCondition === 'function' && breakCondition(treeNode)) {
      throw 'Get the target data.'
    }

    const childLen = treeNode[defaultChildrenKey]?.length

    if (childLen && childLen > 0) {
      for (let j = 0; j < childLen; j++) {
        conditionLoop(treeNode[defaultChildrenKey][j])
      }
    }

    result.pop()
  }

  try {
    for (let i = 0; i < len; i++) {
      conditionLoop(tree[i])
    }
  } catch (e) {
    return result
  }
  return result
}
