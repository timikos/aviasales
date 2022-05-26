import './ticket.scss'

import logo from '../static/test-logo.svg'

const Ticket = () => {
  return (
    <div className="ticket__container">
      <p className="ticket__price">13 400 Р</p>
      <img className="ticket__logo" src={logo} alt="logo-company" />
      <div className="ticket__data">
        <div className="ticket__column">
          <p>MOW - HKT</p>
          <p>10:45 - 08:00</p>
        </div>
        <div className="ticket__column">
          <p>В ПУТИ</p>
          <p>21ч 15м</p>
        </div>
        <div className="ticket__column">
          <p>2 ПЕРЕСАДКИ</p>
          <p>HKG, JNB</p>
        </div>
      </div>
      <div className="ticket__data">
        <div className="ticket__column">
          <p>MOW - HKT</p>
          <p>11:20 - 00:50</p>
        </div>
        <div className="ticket__column">
          <p>В ПУТИ</p>
          <p>13ч 30м</p>
        </div>
        <div className="ticket__column">
          <p>1 ПЕРЕСАДКА</p>
          <p>HKG</p>
        </div>
      </div>
    </div>
  )
}

export default Ticket
