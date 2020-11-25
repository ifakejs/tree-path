import { Tree, treePath, TreePath } from '../src'

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
      tree: originData
    }
    expect(treePath(data, node => node.id === '3-1-1')).toEqual([
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
      tree: []
    }
    expect(treePath(data, node => node.id === '3-1')).toEqual([])
  })

  it('should return error message when given non of array', () => {
    const data: TreePath = {
      // @ts-ignore
      tree: {}
    }
    try {
      treePath(data, node => node.id === '3-1')
    } catch (e) {
      expect(e).toBe('data must be an array of object.')
    }
  })

  it('should returns [] when no condition is matched', () => {
    const data: TreePath = {
      tree: originData
    }
    expect(treePath(data, node => node.id === '9')).toEqual([])
  })
})
