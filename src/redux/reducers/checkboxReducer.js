import {
  ACTIVE_CHECKBOX,
  ACTIVE_TAB_PRICE
} from '../actions/actionTypes'

const initialState = {
  activeCheckbox: '',
  activeTabPrice: '',
}

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIVE_CHECKBOX:
    return {
      ...state, activeCheckbox: ''
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
