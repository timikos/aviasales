import * as actionsType from './actionTypes'

export const test = (value) => ({
  type: actionsType.TEST_1,
  value
})
export const test2 = (value) => ({
  type: actionsType.TEST_2,
  value: value - 1
})
export const test3 = (value) => ({
  type: actionsType.TEST_3,
})
