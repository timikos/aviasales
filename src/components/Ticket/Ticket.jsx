import { useSelector } from 'react-redux'
import './Ticket.scss'

const Ticket = ({ index }) => {
  const state = useSelector(state => ({
    tickets: state.ticketsReducer.tickets
  }))
  if (state.tickets.length > 0) {
    const hoursPathTo = Math.floor(state.tickets[index].segments[0].duration / 60)
    const minutesPathTo = Math.floor(state.tickets[index].segments[0].duration % 60)
    const timePathTo = `${hoursPathTo}ч ${minutesPathTo}м`
    const hoursDepTo = new Date(state.tickets[index].segments[0].date).getHours()
    const minutesDepTo = new Date(state.tickets[index].segments[0].date).getMinutes()
    const timeDepTo = `${hoursDepTo > 9
      ? hoursDepTo
      : '0' + hoursDepTo}:${minutesDepTo > 9
      ? minutesDepTo
      : '0' + minutesDepTo}`
    const addHoursArrivalTo = Math.floor((minutesDepTo + minutesPathTo) / 60)
    const hoursArrivalTo = (hoursDepTo + hoursPathTo + addHoursArrivalTo) % 24
    const minutesArrivalTo = (minutesDepTo + minutesPathTo) % 60
    const timeArrivalTo = `${hoursArrivalTo > 9
      ? hoursArrivalTo
      : '0' + hoursArrivalTo}:${minutesArrivalTo > 9
      ? minutesArrivalTo
      : '0' + minutesArrivalTo}`

    const hoursPathFrom = Math.floor(state.tickets[index].segments[1].duration / 100)
    const minutesPathFrom = Math.floor(state.tickets[index].segments[1].duration % 100)
    const timePathFrom = `${hoursPathFrom}ч ${minutesPathFrom}м`
    const hoursDepFrom = new Date(state.tickets[index].segments[1].date).getHours()
    const minutesDepFrom = new Date(state.tickets[index].segments[1].date).getMinutes()
    const timeDepFrom = `${hoursDepFrom > 9
      ? hoursDepFrom
      : '0' + hoursDepFrom}:${minutesDepFrom > 9
      ? minutesDepFrom
      : '0' + minutesDepFrom}`
    const addHoursArrFrom = Math.floor((minutesDepFrom + minutesPathFrom) / 60)
    const hoursArrFrom = (hoursDepFrom + hoursPathFrom + addHoursArrFrom) % 24
    const minutesArrFrom = (minutesDepFrom + minutesPathFrom) % 60
    const timeArrivalFrom = `${hoursArrFrom > 9
      ? hoursArrFrom
      : '0' + hoursArrFrom}:${minutesArrFrom > 9
      ? minutesArrFrom
      : '0' + minutesArrFrom}`
    return (
      <div className="ticket__container">
        <p className="ticket__price">
          {state.tickets[index].price} Р
        </p>
        <img className="ticket__logo" src={`//pics.avs.io/99/36/${state.tickets[index].carrier}.png`} alt="logo-company" />
        <div className="ticket__data">
          <div className="ticket__column">
            <p>MOW - HKT</p>
            <p>
              {timeDepTo}
              -
              {timeArrivalTo}
            </p>
          </div>
          <div className="ticket__column">
            <p>В ПУТИ</p>
            <p>
              {timePathTo}
            </p>
          </div>
          <div className="ticket__column">
            {state.tickets[index].segments[0].stops.length === 0
              ? <p>БЕЗ ПЕРЕСАДОК</p>
              : state.tickets[index].segments[0].stops.length === 1
                ? <p>1 ПЕРЕСАДКА</p>
                : state.tickets[index].segments[0].stops.length === 2
                  ? <p>2 ПЕРЕСАДКИ</p>
                  : <p>3 ПЕРЕСАДКИ</p>}
            <p>{state.tickets[index].segments[0].stops.join(', ')}</p>
          </div>
        </div>
        <div className="ticket__data">
          <div className="ticket__column">
            <p>HKT - MOW</p>
            <p>
              {timeDepFrom}
              -
              {timeArrivalFrom}
            </p>
          </div>
          <div className="ticket__column">
            <p>В ПУТИ</p>
            <p>
              {timePathFrom}
            </p>
          </div>
          <div className="ticket__column">
            {state.tickets[index].segments[1].stops.length === 0
              ? <p>БЕЗ ПЕРЕСАДОК</p>
              : state.tickets[index].segments[1].stops.length === 1
                ? <p>1 ПЕРЕСАДКА</p>
                : state.tickets[index].segments[1].stops.length === 2
                  ? <p>2 ПЕРЕСАДКИ</p>
                  : <p>3 ПЕРЕСАДКИ</p>}
            <p>{state.tickets[index].segments[1].stops.join(', ')}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Ticket
