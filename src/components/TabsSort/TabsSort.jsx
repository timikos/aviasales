import { useDispatch, useSelector } from 'react-redux'

import objSorts from '../../models/tabsModel'
import './TabsSort.scss'
import * as ticketAction from '../../redux/actions/tickets'

const TabsSort = () => {
  const state = useSelector(state => ({
    activeSort: state.sortReducer
  }))
  const dispatch = useDispatch()
  const elements = Object.keys(objSorts).map((elem, index) => {
    return (
      <li key={index}>
        <input
          type="radio"
          className="btn-check"
          name={state.activeSort}
          id={`btnradio${index + 1}`}
          autoComplete="off"
          onChange={() => dispatch(objSorts[index].func())}
        />
        <label
          className="btn btn-outline-primary tab__btn"
          htmlFor={`btnradio${index + 1}`}
        >
          {objSorts[index].name}
        </label>
      </li>
    )
  })
  return (
    <div className="tabs__container" onChange={() => dispatch(ticketAction.nullShowMore())}>
      <div className="btn-group" role="group" aria-label="Basic">
        {elements}
      </div>
    </div>
  )
}

export default TabsSort
