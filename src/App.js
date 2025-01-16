import './App.css';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Productpage from './components/Productpage';
import Cart from './components/Cart'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Checkout from './components/Checkout';
import Success from './components/Success'

function App() {

  

  return (
    <>

        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={< Homepage />}></Route>
            <Route path="/cart" element={< Cart />}></Route>
            <Route path="/cart/checkout" element={< Checkout />}></Route>
            <Route path="/cart/checkout/success" element={< Success />}></Route>
            <Route path="product/:id" element={< Productpage />}></Route>
          </Routes>

          <Footer />

        </Router>

    </>
  );
}

export default App;
