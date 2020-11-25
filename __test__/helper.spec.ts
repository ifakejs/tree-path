import { isArr } from '../src/helper'

describe('helper', () => {
  it('should return true when given an array', () => {
    expect(isArr([])).toBe(true)
  })

  it('should return true when given an object', () => {
    // @ts-ignore
    expect(isArr({})).toBe(false)
  })
})
