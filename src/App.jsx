import { connect } from 'react-redux'
import { useEffect } from 'react'

import Header from './containers/Header'
import Main from './containers/Main'
import Filters from './containers/Filters'
import * as ticketsAction from './redux/actions/tickets'

import './App.scss'

function App({ fetchId }) {
  useEffect(() => {
    fetchId()
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

const mapStateToProps = (state) => {
  return {
    searchId: state.ticketsReducer.searchId
  }
}

export default connect(mapStateToProps, ticketsAction)(App)
