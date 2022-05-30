import {
  ACTIVE_TAB_CHEAP, ACTIVE_TAB_FAST, ACTIVE_TAB_OPTIMAL,
} from '../actions/actionTypes'

const initialState = {
  sort: ''
}

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIVE_TAB_CHEAP:
    return {
      sort: 'cheap'
    }
  case ACTIVE_TAB_FAST:
    return {
      sort: 'fast'
    }
  case ACTIVE_TAB_OPTIMAL:
    return {
      sort: 'optimal'
    }
  default:
    return state
  }
}

export default sortReducer
