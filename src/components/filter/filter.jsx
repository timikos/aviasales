import './filter.scss'

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { connect } from 'react-redux'

import * as checkboxActions from '../../redux/actions/checkbox'

const Filter = () => {
  const optionsCheckbox = [
    {
      name: 'Все',
      active: true,
    },
    {
      name: 'Без пересадок',
      active: false,
    },
    {
      name: '1 пересадка',
      active: false,
    },
    {
      name: '2 пересадки',
      active: false,
    },
    {
      name: '3 пересадки',
      active: false,
    },
  ]
  const handleChange = (e) => {
    e.target.checked = !e.target.checked
    console.log(e.target)
    console.log(e.target.checked)
  }
  const filters = Object.values(optionsCheckbox).map((elem, index) => {
    return (
      <FormControlLabel
        checked={false}
        onChange={handleChange}
        className="filter__checkbox"
        control={<Checkbox />}
        label={elem.name}
        sx={{
          ml: 0,
          mr: 0,
        }}
      />
    )
  })
  if (optionsCheckbox[0].active) {
    Object.values(optionsCheckbox).forEach(elem => {
      elem.active = true
    })
  }
  Object.values(optionsCheckbox).forEach(elem => {
    console.log(elem)
    if (elem.name !== 'Все') {
      if (!elem.active) {
        optionsCheckbox[0].active = false
      }
    }
  })
  // filters.forEach((elem, index) => {
  //   if (optionsCheckbox[index].active) {
  //     elem.checked = true
  //   } else elem.checked = false
  //
  // })
  return (
    <div className="filter__container">
      <label className="filter__label">КОЛИЧЕСТВО ПЕРЕСАДОК</label>
      <FormGroup className="filter__checkbox-group">
        {filters}
      </FormGroup>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activeCheckbox: state.checkboxReducer.activeCheckbox,
  }
}

export default connect(mapStateToProps, checkboxActions)(Filter)
