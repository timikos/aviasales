import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import Header from './containers/Header'
import Main from './containers/Main'
import Filters from './containers/Filters'
import './App.scss'
import { fetchId } from './redux/actions/tickets'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchId())
  }, [])
  return (
    <>
      <Header />
      <div className="wrapper__main-content">
        <Filters />
        <Main />
      </div>
    </>
  )
}

export default App
