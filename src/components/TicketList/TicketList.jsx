import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { fetchTickets } from '../../redux/actions/tickets'
import './TicketList.scss'
import Ticket from '../Ticket'

const TicketList = () => {
  const state = useSelector(state => ({
    tickets: state.ticketsReducer.tickets,
    loading: state.ticketsReducer.loading,
    searchId: state.ticketsReducer.searchId
  }))
  const dispatch = useDispatch()

  const tmpArr = [1, 2, 3, 4, 5]
  const elements = tmpArr.map((elem, index) => {
    return (
      <li key={index}>
        <Ticket
          elem={elem}
          index={index}
          {...elem}
        />
      </li>
    )
  })
  useEffect(() => {
    dispatch(fetchTickets(state.searchId))
  }, [])

  return (
    <ul className="ticket-list__container">
      {elements}
    </ul>
  )
}

export default TicketList
