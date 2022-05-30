import {
  ACTIVE_CHECKBOX_ALL,
  ACTIVE_CHECKBOX_ONE,
  ACTIVE_CHECKBOX_THREE,
  ACTIVE_CHECKBOX_TWO,
  ACTIVE_CHECKBOX_WITHOUT,
  ACTIVE_TAB_PRICE,
} from '../actions/actionTypes'

const initialState = {
  activeCheckbox: '',
  activeTabPrice: '',
}

const checkboxReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
  case ACTIVE_CHECKBOX_ALL:
    return {
      ...state, activeCheckbox: 'all'
    }
  case ACTIVE_CHECKBOX_WITHOUT:
    return {
      ...state, activeCheckbox: 'without'
    }
  case ACTIVE_CHECKBOX_ONE:
    return {
      ...state, activeCheckbox: 'one'
    }
  case ACTIVE_CHECKBOX_TWO:
    return {
      ...state, activeCheckbox: 'two'
    }
  case ACTIVE_CHECKBOX_THREE:
    return {
      ...state, activeCheckbox: 'three'
    }
  case ACTIVE_TAB_PRICE:
    return {
      ...state, activeTabPrice: ''
    }
  default:
    return state
  }
}

export default checkboxReducer
