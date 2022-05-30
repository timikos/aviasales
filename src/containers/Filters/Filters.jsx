import './Filters.scss'

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import * as checkboxActions from '../../redux/actions/checkbox'

const Filters = () => {
  const state = useSelector(state => ({
    activeCheckbox: state.checkboxReducer.activeCheckbox
  }))
  const dispatch = useDispatch()
  const optionsCheckbox = [
    {
      name: 'Все',
      active: true,
      onClick: () => {
        dispatch(checkboxActions.setCheckboxAll())
      }
    },
    {
      name: 'Без пересадок',
      active: false,
      onClick: () => {
        dispatch(checkboxActions.setCheckboxWithout())
      }
    },
    {
      name: '1 пересадка',
      active: false,
      onClick: () => {
        dispatch(checkboxActions.setCheckboxOne())
      }
    },
    {
      name: '2 пересадки',
      active: true,
      onClick: () => {
        dispatch(checkboxActions.setCheckboxTwo())
      }
    },
    {
      name: '3 пересадки',
      active: false,
      onClick: () => {
        dispatch(checkboxActions.setCheckboxThree())
      }
    },
  ]

  const handle = element => {
    element.active = !element.active
  }


  const filters = Object.values(optionsCheckbox).map((elem, index) => {
    return (
      <FormControlLabel
        checked={elem.active}
        key={index}
        onChange={() => handle(elem)}
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

  if (state.activeCheckbox === 'all') {
    optionsCheckbox[0].active = true
    optionsCheckbox[1].active = true
    optionsCheckbox[2].active = true
    optionsCheckbox[3].active = true
    optionsCheckbox[4].active = true
  }
  if (state.activeCheckbox !== 'all') {
    optionsCheckbox[0].active = false
  }


  console.log(state)
  console.log(optionsCheckbox)
  return (
    <div className="filter__container">
      <label className="filter__label">КОЛИЧЕСТВО ПЕРЕСАДОК</label>
      <FormGroup className="filter__checkbox-group">
        {filters}
      </FormGroup>
    </div>
  )
}

export default Filters
