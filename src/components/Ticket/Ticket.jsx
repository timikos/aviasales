import './Ticket.scss'
import durationHelpers from '../../helpers/durationHelpers'
import transplants from '../../helpers/transplantsHelpers'

const Ticket = ({ tickets, elem }) => {
  if (tickets.length > 0) {
    const time = durationHelpers(elem)
    return (
      <div className="ticket__container">
        <p className="ticket__price">
          {elem.price} Р
        </p>
        <img className="ticket__logo" src={`//pics.avs.io/99/36/${elem.carrier}.png`} alt="logo-company" />
        <div className="ticket__data">
          <div className="ticket__column">
            <p>MOW - HKT</p>
            <p>
              {time[0]}
              -
              {time[1]}
            </p>
          </div>
          <div className="ticket__column">
            <p>В ПУТИ</p>
            <p>
              {time[2]}
            </p>
          </div>
          <div className="ticket__column">
            {transplants(elem.segments[0])}
            <p>{elem.segments[0].stops.join(', ')}</p>
          </div>
        </div>
        <div className="ticket__data">
          <div className="ticket__column">
            <p>HKT - MOW</p>
            <p>
              {time[4]}
              -
              {time[5]}
            </p>
          </div>
          <div className="ticket__column">
            <p>В ПУТИ</p>
            <p>
              {time[3]}
            </p>
          </div>
          <div className="ticket__column">
            {transplants(elem.segments[1])}
            <p>{elem.segments[1].stops.join(', ')}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Ticket
