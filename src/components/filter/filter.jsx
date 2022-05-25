import './filter.scss'

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const Filter = () => {
  const optionsCheckbox = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
  const handleChange = () => {
  }
  return (
    <div className="filter__container">
      <label className="filter__label">КОЛИЧЕСТВО ПЕРЕСАДОК</label>
      <FormGroup className="filter__checkbox-group">
        <FormControlLabel
          onChange={handleChange}
          className="filter__checkbox"
          control={<Checkbox defaultChecked />}
          label={optionsCheckbox[0]}
          sx={{
            ml: 0,
            mr: 0,
          }}
        />
        <FormControlLabel
          onChange={handleChange}
          className="filter__checkbox"
          control={<Checkbox />}
          label={optionsCheckbox[1]}
          sx={{
            ml: 0,
            mr: 0,
          }}
        />
        <FormControlLabel
          onChange={handleChange}
          className="filter__checkbox"
          control={<Checkbox />}
          label={optionsCheckbox[2]}
          sx={{
            ml: 0,
            mr: 0,
          }}
        />
        <FormControlLabel
          onChange={handleChange}
          className="filter__checkbox"
          control={<Checkbox />}
          label={optionsCheckbox[3]}
          sx={{
            ml: 0,
            mr: 0,
          }}
        />
        <FormControlLabel
          onChange={handleChange}
          className="filter__checkbox"
          control={<Checkbox />}
          label={optionsCheckbox[4]}
          sx={{
            ml: 0,
            mr: 0,
          }}
        />
      </FormGroup>
    </div>
  )
}

export default Filter
