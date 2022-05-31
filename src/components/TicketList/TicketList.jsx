import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { fetchTickets } from '../../redux/actions/tickets'
import './TicketList.scss'
import Ticket from '../Ticket'

const TicketList = () => {
  const state = useSelector(state => ({
    tickets: state.ticketsReducer.tickets,
    loading: state.ticketsReducer.loading,
    searchId: state.ticketsReducer.searchId,
    showLen: state.ticketsReducer.showLen,
  }))
  const dispatch = useDispatch()
  const tmpArr = state.tickets
  const elements = tmpArr.map((elem, index) => {
    if (index < state.showLen) {
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
  useEffect(() => {
    dispatch(fetchTickets(state.searchId))
  })

  return (
    <ul className="ticket-list__container">
      {elements}
    </ul>
  )
}

export default TicketList
