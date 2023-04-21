
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CartProvider } from './CartContext';
// import CartContext from './CartContext';

//pages
import Products from './components/Products';
import Checkout from './components/CheckOut';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
    <CartProvider>
     <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={< Products/>} />
        <Route path="/checkout" element={< Checkout/>}   />

      </Routes>
     </BrowserRouter>
     </CartProvider>
    </div>
  );
}

export default App;
