import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import CartContext from './components/CartContext'

function App() {
  return (
    
      <BrowserRouter>
        <CartContext>
        <Header />  
        <Main /> 
        </CartContext>  
        <Footer />
      </BrowserRouter>
    
  )
}

export default App;


