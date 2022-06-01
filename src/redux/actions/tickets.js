import axios from 'axios'

import {
  FETCH_ID_ERROR, FETCH_ID_START,
  FETCH_ID_SUCCESS,
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_START,
  FETCH_TICKETS_SUCCESS,
  SHOW_MORE_TICKETS,
} from './actionTypes'

export function showMore() {
  return {
    type: SHOW_MORE_TICKETS,
  }
}

export function fetchId() {
  return async dispatch => {
    dispatch(fetchIdStart())
    try {
      const response = axios.get('https://aviasales-test-api.kata.academy/search')
      const { searchId } = (await response).data
      dispatch(fetchIdSuccess(searchId))
    } catch (e) {
      dispatch(fetchIdError(e))
    }
  }
}

export function fetchIdStart() {
  return {
    type: FETCH_ID_START,
  }
}

export function fetchIdSuccess(searchId) {
  return {
    type: FETCH_ID_SUCCESS,
    searchId
  }
}

export function fetchIdError(e) {
  return {
    type: FETCH_ID_ERROR,
    error: e
  }
}

export function fetchTickets(searchId) {
  return async dispatch => {
    // if (searchId) {
      dispatch(fetchTicketsStart())
      try {
        const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
        if (response.data.stop) {
          return
        }
        const tickets = [...response.data.tickets]
        dispatch(fetchTicketsSuccess(tickets))
      } catch (e) {
        dispatch(fetchTicketsError(e))
      }
    // }
  }
}

export function fetchTicketsStart() {
  return {
    type: FETCH_TICKETS_START
  }
}

export function fetchTicketsSuccess(tickets) {
  return {
    type: FETCH_TICKETS_SUCCESS,
    tickets
  }
}

export function fetchTicketsError(e) {
  return {
    type: FETCH_TICKETS_ERROR,
    error: e
  }
}
