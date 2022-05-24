import { useEffect, useRef, useState } from 'react'

import TicketList from '../ticket-list'

import './tabs-price.scss'

const TabsPrice = () => {
  const [activeBtn, setActiveBtn] = useState(1)
  const tabs = [1, 2, 3]
  const names = ['САМЫЙ ДЕШЕВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']
  // В РАЗРАБОТКЕ
  let classBtn = 'tab'
  const activateButton = (e) => {
    // if (e.target.value !== activeBtn) {
    //   e.target.className += ' btn-tab_active'
    // }
    setActiveBtn(e.target.value)
  }
  const elements = tabs.map((elem, index) => {
    return (
      <button
        key={index}
        value={index}
        onClick={activateButton}
        className={activeBtn === index ? 'btn-tab_active' : ''}
      >
        {names[index]}
      </button>
    )
  })

  const moreTickets = () => {
  }
  return (
    <section className="tabs-price__container">
      {elements}
      <TicketList />
      <button
        onClick={moreTickets}
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </section>
  )
}

export default TabsPrice
