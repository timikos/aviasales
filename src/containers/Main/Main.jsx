import { useDispatch, useSelector } from 'react-redux'

import TicketList from '../../components/TicketList'
import TabsSort from '../../components/TabsSort'
import './Main.scss'
import * as ticketsActions from '../../redux/actions/tickets'
import SpinnerLoad from '../../components/SpinnerLoad'

const Main = () => {
  const state = useSelector(state => ({
    loadingTickets: state.ticketsReducer.loadingTickets,
    showLen: state.ticketsReducer.showLen
  }))
  const dispatch = useDispatch()
  console.log(state.loadingTickets)
  return (
    <section className="main__container">
      {state.loadingTickets ? <SpinnerLoad /> : null }
      {/* <SpinnerLoad /> */}
      <TabsSort />
      <TicketList />
      <button
        onClick={() => dispatch(ticketsActions.showMore())}
        type="button"
        className="btn btn-primary btn__more"
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </section>
  )
}

export default Main
