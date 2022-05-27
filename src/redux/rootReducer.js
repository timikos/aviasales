import { combineReducers } from 'redux'

import reducer from './reducers/reducer'
import asyncReducer from './reducers/asyncReducer'

export default combineReducers({
  reducer,
  asyncReducer
})
