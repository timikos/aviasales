import TicketList from '../../components/TicketList'
import './Main.scss'
import TabsSort from '../../components/TabsSort'

const Main = () => {
  return (
    <section className="main__container">
      <TabsSort />
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

export default Main
