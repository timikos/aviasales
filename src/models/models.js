import { setTabCheap, setTabFast, setTabOptimal } from '../redux/actions/sorts'
import * as checkboxActions from '../redux/actions/filters'

export const objSorts = [
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

export const filterObj = [
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
