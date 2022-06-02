import './Filters.scss'

import { FormGroup } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import createElementsFilters from '../../models/filtersModel'

const Filters = () => {
  const state = useSelector(state => ({
    filters: state.filterReducer
  }))
  const dispatch = useDispatch()

  return (
    <div className="filter__container">
      <label className="filter__label">КОЛИЧЕСТВО ПЕРЕСАДОК</label>
      <FormGroup className="filter__checkbox-group">
        {createElementsFilters(Object.values(state.filters), dispatch)}
      </FormGroup>
    </div>
  )
}

export default Filters
