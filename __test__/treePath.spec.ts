import { Tree, TreePath, JSONObject } from '../src/interface'
import { treePath } from '../src'

describe('treePath', () => {
  let originData: Tree
  beforeAll(() => {
    originData = [
      {
        id: 1,
        children: [
          {
            id: '1-1',
            children: [
              {
                id: '1-1-1'
              }
            ]
          },
          {
            id: '1-2'
          }
        ]
      },
      {
        id: 2,
        children: []
      },
      {
        id: 3,
        children: [
          {
            id: '3-1',
            children: [
              {
                id: '3-1-1'
              }
            ]
          },
          {
            id: '3-2'
          }
        ]
      }
    ]
  })

  it('should get the correct path', () => {
    const data: TreePath = {
      tree: originData,
      breakCondition: (node: JSONObject) => node.id === '3-1-1'
    }
    expect(treePath(data)).toEqual([
      {
        id: 3,
        children: [
          {
            id: '3-1',
            children: [
              {
                id: '3-1-1'
              }
            ]
          },
          {
            id: '3-2'
          }
        ]
      },
      {
        id: '3-1',
        children: [
          {
            id: '3-1-1'
          }
        ]
      },
      {
        id: '3-1-1'
      }
    ])
  })

  it('should return [] when given []', () => {
    const data: TreePath = {
      tree: [],
      breakCondition: (node: JSONObject) => node.id === '3-1'
    }
    expect(treePath(data)).toEqual([])
  })

  it('should return error message when given non of array', () => {
    const data: TreePath = {
      // @ts-ignore
      tree: {},
      breakCondition: (node: JSONObject) => node.id === '3-1'
    }
    try {
      treePath(data)
    } catch (e) {
      expect(e).toBe('data must be an array of object.')
    }
  })

  it('should returns [] when no condition is matched', () => {
    const data: TreePath = {
      tree: originData,
      breakCondition: (node: JSONObject) => node.id === '9'
    }
    expect(treePath(data)).toEqual([])
  })
})
