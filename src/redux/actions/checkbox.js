import {
  ACTIVE_CHECKBOX_ALL,
  ACTIVE_CHECKBOX_ONE,
  ACTIVE_CHECKBOX_THREE,
  ACTIVE_CHECKBOX_TWO,
  ACTIVE_CHECKBOX_WITHOUT,
} from './actionTypes'

export function setCheckboxAll() {
  return {
    type: ACTIVE_CHECKBOX_ALL,
  }
}
export function setCheckboxWithout() {
  return {
    type: ACTIVE_CHECKBOX_WITHOUT
  }
}
export function setCheckboxOne() {
  return {
    type: ACTIVE_CHECKBOX_ONE
  }
}
export function setCheckboxTwo() {
  return {
    type: ACTIVE_CHECKBOX_TWO
  }
}
export function setCheckboxThree() {
  return {
    type: ACTIVE_CHECKBOX_THREE
  }
}
