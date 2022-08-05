import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './store/Store'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ProductDetail from './components/ProductDetail'
import Products from './pages/Products'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </Provider>
  )
}

export default App