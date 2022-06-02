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

export default filterObj
