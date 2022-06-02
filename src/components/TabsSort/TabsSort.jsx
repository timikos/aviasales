import { useDispatch, useSelector } from 'react-redux'

import createElementsTickets from '../../models/tabsModel'
import './TabsSort.scss'
import * as ticketAction from '../../redux/actions/tickets'

const TabsSort = () => {
  const state = useSelector(state => ({
    activeSort: state.sortReducer
  }))
  const dispatch = useDispatch()
  return (
    <div className="tabs__container" onChange={() => dispatch(ticketAction.nullShowMore())}>
      <div className="btn-group" role="group" aria-label="Basic">
        {createElementsTickets(state.activeSort, dispatch)}
      </div>
    </div>
  )
}

export default TabsSort
