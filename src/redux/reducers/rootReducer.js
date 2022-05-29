import { combineReducers } from 'redux'

import ticketsReducer from './ticketsReducer'
import checkboxReducer from './checkboxReducer'

export default combineReducers({
  ticketsReducer,
  checkboxReducer
})
