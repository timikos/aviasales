import './Filters.scss'

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import * as checkboxActions from '../../redux/actions/checkbox'

const Filters = () => {
  const state = useSelector(state => ({
    filters: state.checkboxReducer
  }))
  const dispatch = useDispatch()

  return (
    <div className="filter__container">
      <label className="filter__label">КОЛИЧЕСТВО ПЕРЕСАДОК</label>
      <FormGroup className="filter__checkbox-group">
        <FormControlLabel
          checked={state.filters.all}
          onChange={() => {
            dispatch(checkboxActions.setCheckboxAll())
          }}
          className="filter__checkbox"
          control={<Checkbox />}
          label="Все"
          sx={{
            ml: 0,
            mr: 0,
          }}
        />
        <FormControlLabel
          checked={state.filters.without}
          onChange={() => dispatch(checkboxActions.setCheckboxWithout())}
          className="filter__checkbox"
          control={<Checkbox />}
          label="Без пересадок"
          sx={{
            ml: 0,
            mr: 0,
          }}
        />
        <FormControlLabel
          checked={state.filters.one}
          onChange={() => dispatch(checkboxActions.setCheckboxOne())}
          className="filter__checkbox"
          control={<Checkbox />}
          label="1 пересадка"
          sx={{
            ml: 0,
            mr: 0,
          }}
        />
        <FormControlLabel
          checked={state.filters.two}
          onChange={() => dispatch(checkboxActions.setCheckboxTwo())}
          className="filter__checkbox"
          control={<Checkbox />}
          label="2 пересадки"
          sx={{
            ml: 0,
            mr: 0,
          }}
        />
        <FormControlLabel
          checked={state.filters.three}
          onChange={() => dispatch(checkboxActions.setCheckboxThree())}
          className="filter__checkbox"
          control={<Checkbox />}
          label="3 пересадки"
          sx={{
            ml: 0,
            mr: 0,
          }}
        />
      </FormGroup>
    </div>
  )
}

export default Filters
