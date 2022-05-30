import TicketList from '../../components/TicketList'
import './Main.scss'
import TabsPrice from '../../components/TabsPrice'

const Main = () => {
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

export default Main
