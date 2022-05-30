import {
  ACTIVE_TAB_CHEAP, ACTIVE_TAB_FAST, ACTIVE_TAB_OPTIMAL,
} from './actionTypes'

export function setTabCheap() {
  return {
    type: ACTIVE_TAB_CHEAP,
  }
}
export function setTabFast() {
  return {
    type: ACTIVE_TAB_FAST
  }
}
export function setTabOptimal() {
  return {
    type: ACTIVE_TAB_OPTIMAL
  }
}
