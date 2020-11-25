import { isArr } from './helper'

interface JSONObject {
  [key: string]: any
}

export type Tree = Array<JSONObject>

export interface TreePath {
  tree: Array<JSONObject>
  childrenKey?: string
}

interface BreakCondition {
  (treeNode: JSONObject): boolean
}

const defaultKey = 'children'

export function treePath(treeData: TreePath, breakCondition: BreakCondition): Tree {
  const { tree, childrenKey } = treeData
  const defaultChildrenKey = childrenKey || defaultKey

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

export default treePath
