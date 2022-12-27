import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting="1" />
      <Main />
      <Footer />
    </>
  )
}

export default App;
