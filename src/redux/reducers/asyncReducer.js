import { ASYNC_TEST } from '../actions/actionTypes'

const asyncReducer = (state = 0, action) => {
  switch (action.type) {
  case ASYNC_TEST:
    return {
      asTest: state.asTest
    }
  default:
    return state
  }
}

export default asyncReducer
