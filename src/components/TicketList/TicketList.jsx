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
  const filterTicketsTemplate = (tickets, count) => {
    ticketsArr = [...ticketsArr,
      ...tickets.filter(elem => elem.segments[0].stops.length === count)]
  }
  const filterTickets = (filter, tickets) => {
    filter.without ? filterTicketsTemplate(state.tickets, 0) : null
    filter.one ? filterTicketsTemplate(state.tickets, 1) : null
    filter.two ? filterTicketsTemplate(state.tickets, 2) : null
    filter.three ? filterTicketsTemplate(state.tickets, 3) : null
    filter.all ? [...tickets] : null
  }
  const sortTickets = (sort) => {
    sort === 'cheap' ? ticketsArr.sort((a, b) => a.price - b.price) : null
    sort === 'fast'
      ? ticketsArr.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
      : null
    sort === 'optimal'
      ? ticketsArr.sort(
        (a, b) => (a.price + a.segments[0].duration) - (b.price + b.segments[0].duration)
      )
      : null
  }
  filterTickets(state.filters, state.tickets, ticketsArr)
  sortTickets(state.sort)
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
