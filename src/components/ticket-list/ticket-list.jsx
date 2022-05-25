import './ticket-list.scss'
import Ticket from '../ticket'

const TicketList = () => {
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
  return (
    <ul className="ticket-list__container">
      {elements}
    </ul>
  )
}

export default TicketList
