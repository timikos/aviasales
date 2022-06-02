import { setTabCheap, setTabFast, setTabOptimal } from '../redux/actions/sorts'

const objSorts = [
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

export default objSorts
