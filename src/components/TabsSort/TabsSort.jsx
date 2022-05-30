import { useDispatch, useSelector } from 'react-redux'

import { setTabCheap, setTabFast, setTabOptimal } from '../../redux/actions/sorts'

import './TabsSort.scss'

const TabsSort = () => {
  const state = useSelector(state => ({
    activeSort: state.sortReducer
  }))
  const dispatch = useDispatch()
  return (
    <div className="tabs__container">
      <div className="btn-group" role="group" aria-label="Basic">
        <input
          type="radio"
          className="btn-check"
          name={state.activeSort.sort}
          id="btnradio1"
          autoComplete="off"
          checked=""
          onChange={() => dispatch(setTabCheap())}
        />
        <label
          className="btn btn-outline-primary tab__btn"
          htmlFor="btnradio1"
        >
          САМЫЙ ДЕШЕВЫЙ
        </label>
        <input
          type="radio"
          className="btn-check"
          name={state.activeSort.sort}
          id="btnradio2"
          autoComplete="off"
          onChange={() => dispatch(setTabFast())}
        />
        <label
          className="btn btn-outline-primary tab__btn"
          htmlFor="btnradio2"
        >
          САМЫЙ БЫСТРЫЙ
        </label>
        <input
          type="radio"
          className="btn-check"
          name={state.activeSort.sort}
          id="btnradio3"
          autoComplete="off"
          onChange={() => dispatch(setTabOptimal())}
        />
        <label
          className="btn btn-outline-primary tab__btn"
          htmlFor="btnradio3"
        >
          ОПТИМАЛЬНЫЙ
        </label>
      </div>
    </div>
  )
}

export default TabsSort
