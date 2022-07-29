import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Product from './components/Product'
import { Provider } from 'react-redux'
import store from './store/Store'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Provider>
  )
}

export default App