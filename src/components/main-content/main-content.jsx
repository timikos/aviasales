import TicketList from '../ticket-list'
import './main-content.scss'
import TabsPrice from '../tabs-price'

const MainContent = () => {
  return (
    <section className="main__container">
      <TabsPrice />
      <TicketList />
      <button
        type="button"
        className="btn btn-primary btn__more"
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </section>
  )
}

export default MainContent
