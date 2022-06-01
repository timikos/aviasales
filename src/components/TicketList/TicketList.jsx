import { useSelector } from 'react-redux'

import './TicketList.scss'
import Ticket from '../Ticket'

const TicketList = () => {
  const state = useSelector(state => ({
    tickets: state.ticketsReducer.tickets,
    loadingId: state.ticketsReducer.loadingId,
    loadingTickets: state.ticketsReducer.loadingTickets,
    searchId: state.ticketsReducer.searchId,
    showLen: state.ticketsReducer.showLen,
    filters: state.filterReducer,
    sort: state.sortReducer.sort
  }))
  let ticketsArr = []
  if (state.filters.without === true) {
    ticketsArr = [...ticketsArr,
      ...state.tickets.filter(elem => elem.segments[0].stops.length === 0)]
  }
  if (state.filters.one === true) {
    ticketsArr = [...ticketsArr,
      ...state.tickets.filter(elem => elem.segments[0].stops.length === 1)]
  }
  if (state.filters.two === true) {
    ticketsArr = [...ticketsArr,
      ...state.tickets.filter(elem => elem.segments[0].stops.length === 2)]
  }
  if (state.filters.three === true) {
    ticketsArr = [...ticketsArr,
      ...state.tickets.filter(elem => elem.segments[0].stops.length === 3)]
  }
  if (state.filters.all === true) {
    ticketsArr = [...state.tickets]
  }
  state.sort === 'cheap' ? ticketsArr.sort((a, b) => a.price - b.price) : null
  state.sort === 'fast'
    ? ticketsArr.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    : null
  state.sort === 'optimal'
    ? ticketsArr.sort(
      (a, b) => (a.price + a.segments[0].duration) - (b.price + b.segments[0].duration)
    )
    : null
  return (
    <ul className="ticket-list__container">
      {ticketsArr.slice(0, state.showLen).map((elem, index) => {
        return (
          <li key={index}>
            <Ticket
              tickets={ticketsArr}
              elem={elem}
              {...elem}
            />
          </li>
        )
      })}

    </ul>
  )
}

export default TicketList
