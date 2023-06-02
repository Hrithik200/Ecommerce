import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Hero from './pages/Hero';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './pages/Cart';
import Register from './Components/Register';
import Login from './Components/Login';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
