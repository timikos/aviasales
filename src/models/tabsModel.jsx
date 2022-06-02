import { setTabCheap, setTabFast, setTabOptimal } from '../redux/actions/sorts'

const obj = [
  {
    name: 'САМЫЙ ДЕШЕВЫЙ',
    func: setTabCheap
  },
  {
    name: 'САМЫЙ БЫСТРЫЙ',
    func: setTabFast
  },
  {
    name: 'ОПТИМАЛЬНЫЙ',
    func: setTabOptimal
  }
]

function createElementsTickets(active, dispatch) {
  const elements = Object.keys(obj).map((elem, index) => {
    return (
      <li key={index}>
        <input
          type="radio"
          className="btn-check"
          name={active}
          id={`btnradio${index + 1}`}
          autoComplete="off"
          onChange={() => dispatch(obj[index].func())}
        />
        <label
          className="btn btn-outline-primary tab__btn"
          htmlFor={`btnradio${index + 1}`}
        >
          {obj[index].name}
        </label>
      </li>
    )
  })
  return elements
}

export default createElementsTickets
