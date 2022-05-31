import { useDispatch, useSelector } from 'react-redux'

import TicketList from '../../components/TicketList'
import TabsSort from '../../components/TabsSort'
import './Main.scss'
import * as ticketsActions from '../../redux/actions/tickets'

const Main = () => {
  const state = useSelector(state => ({
    showLen: state.ticketsReducer.showLen
  }))
  console.log(state)
  const dispatch = useDispatch()
  return (
    <section className="main__container">
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
