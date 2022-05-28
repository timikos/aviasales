import { connect } from 'react-redux'

import { fetchId, fetchTickets } from '../../redux/actions/tickets'
import './ticket-list.scss'
import Ticket from '../ticket'

const TicketList = (props) => {
  const tmpArr = [1, 2, 3, 4, 5]
  // const elements = tmpArr.map((elem, index) => {
  //   return (
  //     <li key={index}>
  //       <Ticket
  //         elem={elem}
  //         index={index}
  //         {...elem}
  //       />
  //     </li>
  //   )
  // })
  return (
    props.fetchTickets()
    // <ul className="ticket-list__container">
    //   {elements}
    // </ul>
  )
}

function mapStateToProps(state) {
  return {
    tickets: state.ticketsReducer.tickets,
    loading: state.ticketsReducer.loading,
    searchId: state.ticketsReducer.searchId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTickets: () => dispatch(fetchTickets()),
    fetchId: () => dispatch(fetchId())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
