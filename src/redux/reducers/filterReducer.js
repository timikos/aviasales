import {
  ACTIVE_CHECKBOX_ALL,
  ACTIVE_CHECKBOX_ONE,
  ACTIVE_CHECKBOX_THREE,
  ACTIVE_CHECKBOX_TWO,
  ACTIVE_CHECKBOX_WITHOUT,
} from '../actions/actionTypes'

const initialState = {
  all: true,
  without: true,
  one: true,
  two: true,
  three: true,
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIVE_CHECKBOX_ALL:
    if (state.all === false) {
      return {
        all: true,
        without: true,
        one: true,
        two: true,
        three: true
      }
    }
    return {
      all: !state.all,
      without: !state.without,
      one: !state.one,
      two: !state.two,
      three: !state.three
    }
  case ACTIVE_CHECKBOX_WITHOUT:
    if (state.all === false) {
      if (state.one && state.two && state.three) {
        return {
          ...state, without: !state.without, all: !state.all
        }
      }
      return {
        ...state, without: !state.without
      }
    }
    return {
      ...state, all: !state.all, without: !state.without
    }
  case ACTIVE_CHECKBOX_ONE:
    if (state.all === false) {
      if (state.without && state.two && state.three) {
        return {
          ...state, one: !state.one, all: !state.all
        }
      }
      return {
        ...state, one: !state.one
      }
    }
    return {
      ...state, all: !state.all, one: !state.one
    }
  case ACTIVE_CHECKBOX_TWO:
    if (state.all === false) {
      if (state.one && state.without && state.three) {
        return {
          ...state, two: !state.two, all: !state.all
        }
      }
      return {
        ...state, two: !state.two
      }
    }
    return {
      ...state, all: !state.all, two: !state.two
    }
  case ACTIVE_CHECKBOX_THREE:
    if (state.all === false) {
      if (state.one && state.two && state.without) {
        return {
          ...state, three: !state.three, all: !state.all
        }
      }
      return {
        ...state, three: !state.three
      }
    }
    return {
      ...state, all: !state.all, three: !state.three
    }
  default:
    return state
  }
}

export default filterReducer
