import { connect } from 'react-redux'

import Header from './components/header'
import MainContent from './components/main-content'
import Filter from './components/filter'
import * as actions from './redux/actions'
// import AsapiService from './services/asapi'
// import SearchIdSession from './services/idapi'
import './App.scss'

function App({ counter, test3 }) {
  // const searchId = SearchIdSession()
  // console.log(counter)
  // console.log(store.getState())
  return (
    <>
      <Header />
      <div className="wrapper__main-content" onClick={test3}>
        <Filter />
        <MainContent />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, actions)(App)
