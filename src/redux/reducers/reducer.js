import { TEST_1, TEST_2, TEST_3 } from '../actions/actionTypes'

const reducer = (state = 0, action) => {
  switch (action.type) {
  case TEST_1:
    return {
      testValue: action.value
    }
  case TEST_2:
    return {
      testValue: action.value
    }
  case TEST_3:
    return {
      counter: state.counter + 1,
      ticket: state.ticket + 1,
      asy: state.asy
    }
  default:
    return state
  }
}

export default reducer
