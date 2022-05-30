import { combineReducers } from 'redux'

import ticketsReducer from './ticketsReducer'
import filterReducer from './filterReducer'
import sortReducer from './sortReducer'

export default combineReducers({
  ticketsReducer,
  filterReducer,
  sortReducer
})
