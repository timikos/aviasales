import { Checkbox, FormControlLabel } from '@mui/material'

import * as checkboxActions from '../redux/actions/filters'

const filterObj = [
  {
    name: 'Все',
    func: checkboxActions.setCheckboxAll
  }, {
    name: 'Без пересадок',
    func: checkboxActions.setCheckboxWithout
  }, {
    name: '1 пересадка',
    func: checkboxActions.setCheckboxOne
  }, {
    name: '2 пересадки',
    func: checkboxActions.setCheckboxTwo
  }, {
    name: '3 пересадки',
    func: checkboxActions.setCheckboxThree
  }]

function createElementsFilters(values, dispatch) {
  const elements = filterObj.map((elem, index) => {
    return (
      <FormControlLabel
        key={index}
        checked={values[index]}
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
  return elements
}

export default createElementsFilters
