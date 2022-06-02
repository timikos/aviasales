import './Filters.scss'

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { filterObj } from '../../models/models'

const Filters = () => {
  const state = useSelector(state => ({
    filters: state.filterReducer
  }))
  const dispatch = useDispatch()
  const elements = filterObj.map((elem, index) => {
    return (
      <FormControlLabel
        key={index}
        checked={Object.values(state.filters)[index]}
        onChange={() => dispatch(filterObj[index].func())}
        className="filter__checkbox"
        control={<Checkbox />}
        label={filterObj[index].name}
        sx={{
          ml: 0,
          mr: 0,
        }}
      />
    )
  })
  return (
    <div className="filter__container">
      <label className="filter__label">КОЛИЧЕСТВО ПЕРЕСАДОК</label>
      <FormGroup className="filter__checkbox-group">
        {elements}
      </FormGroup>
    </div>
  )
}

export default Filters
