import './App.scss'
import AsapiService from './services/asapi'
import Header from './components/header'
import TabsPrice from './components/tabs-price'
import Filter from './components/filter'

function App() {
  AsapiService()
  return (
    <>
      <Header />
      <TabsPrice />
      <Filter />
    </>
  )
}

export default App
