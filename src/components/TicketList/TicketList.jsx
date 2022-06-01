import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { fetchTickets } from '../../redux/actions/tickets'
import './TicketList.scss'
import Ticket from '../Ticket'

function filterElements(arr, len) {
  return arr.map((elem, index) => {
    if (index < len) {
      return (
        <li key={index}>
          <Ticket
            index={index}
            {...elem}
          />
        </li>
      )
    }
  })
}

const TicketList = () => {
  const state = useSelector(state => ({
    tickets: state.ticketsReducer.tickets,
    loadingId: state.ticketsReducer.loadingId,
    loadingTickets: state.ticketsReducer.loadingTickets,
    searchId: state.ticketsReducer.searchId,
    showLen: state.ticketsReducer.showLen,
    filters: state.filterReducer
  }))
  const dispatch = useDispatch()
  const tmpArr = state.tickets

  const elementsAll = tmpArr.filter(elem => elem)
  const elementsWithout = tmpArr.filter(elem => elem.segments[0].stops.length === 0)
  const elementsOne = tmpArr.filter(elem => elem.segments[0].stops.length === 1)
  const elementsTwo = tmpArr.filter(elem => elem.segments[0].stops.length === 2)
  const elementsThree = tmpArr.filter(elem => elem.segments[0].stops.length === 3)
  let elements = []

  if (state.filters.all) {
    elements.push(filterElements(elementsAll, state.showLen))
  }
  useEffect(() => {
    dispatch(fetchTickets(state.searchId))
  }, [state.searchId, state.showLen])

  return (
    <ul className="ticket-list__container">
      {elements}
    </ul>
  )
}

export default TicketList
