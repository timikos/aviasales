import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import TicketList from '../../components/TicketList'
import TabsSort from '../../components/TabsSort'
import './Main.scss'
import * as ticketsActions from '../../redux/actions/tickets'
import SpinnerLoad from '../../components/SpinnerLoad'
import { fetchTickets } from '../../redux/actions/tickets'

const Main = () => {
  const state = useSelector(state => ({
    tickets: state.ticketsReducer.tickets,
    searchId: state.ticketsReducer.searchId,
    loadingTickets: state.ticketsReducer.loadingTickets,
    showLen: state.ticketsReducer.showLen
  }))
  const dispatch = useDispatch()
  const noResults = <div className="ticket-list__no-results">Рейсов, подходящих под заданные фильтры, не найдено</div>
  useEffect(() => {
    dispatch(fetchTickets(state.searchId))
  }, [state.searchId])

  return (
    <section className="main__container">
      {state.loadingTickets ? <SpinnerLoad /> : null }
      <TabsSort />
      {(!state.tickets.length && noResults) || <TicketList />}
      {noResults && !state.tickets.length
        ? null
        : <button
          onClick={() => dispatch(ticketsActions.showMore())}
          type="button"
          className="btn btn-primary btn__more"
        >
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>}
    </section>
  )
}

export default Main
