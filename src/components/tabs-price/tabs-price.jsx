import './tabs-price.scss'

const TabsPrice = () => {
  // const [value, setValue] = useState('1')
  //
  // const handleChange = (event, newValue) => {
  //   setValue(newValue)
  // }

  return (
    <div className="tabs__container">
      <div className="btn-group" role="group" aria-label="Basic">
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          checked=""
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
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
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
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
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

export default TabsPrice
