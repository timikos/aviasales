import TicketList from '../ticket-list'
import './main-content.scss'
import TabsPrice from '../tabs-price'

const MainContent = () => {
  return (
    <section className="main__container">
      <TabsPrice />
      <TicketList />
      <button
        onClick=""
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </section>
  )
}

export default MainContent
