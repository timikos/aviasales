import { createStore } from 'redux'

import reducer from './reducer'

const initialState = {
  tickets: 0,
  counter: 2,
}

const store = createStore(reducer, initialState)
store.subscribe(() => console.log(store.getState()))

export default store
