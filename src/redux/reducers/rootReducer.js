import { combineReducers } from 'redux'

import ticketsReducer from './ticketsReducer'
import asyncReducer from './asyncReducer'

export default combineReducers({
  ticketsReducer,
  asyncReducer
})
