import {
  FETCH_ID_ERROR,
  FETCH_ID_START,
  FETCH_ID_SUCCESS,
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_START,
  FETCH_TICKETS_SUCCESS,
  SHOW_MORE_TICKETS,
  NULL_SHOW_MORE_TICKETS,
} from '../actions/actionTypes'

const initialState = {
  tickets: [],
  prevTickets: [],
  loadingTickets: false,
  loadingId: false,
  searchId: '',
  error: null,
  showLen: 5,
}

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_MORE_TICKETS:
    return {
      ...state, showLen: state.showLen + 5
    }
  case NULL_SHOW_MORE_TICKETS:
    return {
      ...state, showLen: 5
    }
  case FETCH_TICKETS_START:
    return {
      ...state, loadingTickets: true
    }
  case FETCH_TICKETS_SUCCESS:
    return {
      ...state, loadingTickets: false, tickets: [...state.tickets, ...action.tickets]
    }
  case FETCH_TICKETS_ERROR:
    return {
      ...state, loadingTickets: false, error: action.error
    }
  case FETCH_ID_START:
    return {
      ...state, loadingId: true
    }
  case FETCH_ID_SUCCESS:
    return {
      ...state, loadingId: false, searchId: action.searchId
    }
  case FETCH_ID_ERROR:
    return {
      ...state, loadingId: false, error: action.error
    }
  default:
    return state
  }
}

export default ticketsReducer
