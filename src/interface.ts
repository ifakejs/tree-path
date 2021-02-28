export type HelperCheck = Array<any>

export interface JSONObject {
  [key: string]: any
}

export type Tree = JSONObject[]

export interface BreakCondition {
  // eslint-disable-next-line no-unused-vars
  (treeNode: JSONObject): boolean
}

export interface TreePath {
  tree: Tree
  childrenKey?: string
  breakCondition: BreakCondition
}
