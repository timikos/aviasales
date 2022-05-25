import './App.scss'
import AsapiService from './services/asapi'
import Header from './components/header'
import MainContent from './components/main-content'
import Filter from './components/filter'
import SearchIdSession from './services/idapi'

function App() {
  const searchId = SearchIdSession()
  setTimeout(() => {
    AsapiService(searchId)
  }, 1500)

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

export default App
