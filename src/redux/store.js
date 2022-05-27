import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import rootReducer from './rootReducer'

const initialState = {
  tickets: 0,
  counter: 2,
}

const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware', store.getState())
  return result
}

const composeEnhancers = (typeof window !== 'undefined'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
  loggerMiddleware,
  reduxThunk
)))

export default store
