const reducer = (state = 0, action) => {
  switch (action.type) {
  case 'TEST_1':
    return {
      testValue: action.value
    }
  case 'TEST_2':
    return {
      testValue: action.value
    }
  case 'TEST_3':
    return {
      counter: state.counter + 1
    }
  default:
    return state
  }
}

export default reducer
