import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Product from './components/Product'
import { Provider } from 'react-redux'
import store from './store/Store'
import Cart from './pages/Cart'
import Login from './pages/Login'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Provider>
  )
}

export default App