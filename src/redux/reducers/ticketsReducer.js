import {
  FETCH_ID_ERROR,
  FETCH_ID_START, FETCH_ID_SUCCESS,
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_START,
  FETCH_TICKETS_SUCCESS,
  SHOW_MORE_TICKETS,
} from '../actions/actionTypes'

const initialState = {
  tickets: [],
  loading: false,
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
  case FETCH_TICKETS_START:
    return {
      ...state, loading: true
    }
  case FETCH_TICKETS_SUCCESS:
    return {
      ...state, loading: false, tickets: action.tickets
    }
  case FETCH_TICKETS_ERROR:
    return {
      ...state, loading: false, error: action.error
    }
  case FETCH_ID_START:
    return {
      ...state, loading: true
    }
  case FETCH_ID_SUCCESS:
    return {
      ...state, loading: false, searchId: action.searchId
    }
  case FETCH_ID_ERROR:
    return {
      ...state, loading: false, error: action.error
    }
  default:
    return state
  }
}

export default ticketsReducer
