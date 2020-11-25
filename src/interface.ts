export type HelperCheck = Array<any>

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
