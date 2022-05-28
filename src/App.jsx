import { connect } from 'react-redux'
import { useEffect } from 'react'

import Header from './components/header'
import MainContent from './components/main-content'
import Filter from './components/filter'
import * as ticketsAction from './redux/actions/tickets'

import './App.scss'

function App({ fetchId }) {
  useEffect(() => fetchId(), [])
  return (
    <>
      <Header />
      <div className="wrapper__main-content">
        <Filter />
        <MainContent />
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
