import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Features from './Features';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userData } from './Usereducer.jsx';
import Productone from './Productone.jsx';
import Cart from './Cart.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Checkout from './Checkout.jsx';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then((res)=>{return res.json()})
    .then((data)=>{dispatch(userData(data))})
  },[userData])
  return (
    <div className="">
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/productone/:id' element={<Productone/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
