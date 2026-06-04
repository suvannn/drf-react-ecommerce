import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from './components/screens/HomeScreen'
import SigninScreen from './components/screens/SigninScreen'
import SignupScreen from './components/screens/SignupScreen'
import CartScreen from './components/screens/CartScreen'
import AboutScreen from './components/screens/AboutScreen'
import ShopScreen from './components/screens/ShopScreen'

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path ="/" element={<HomeScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path ="/signin" element={<SigninScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path ="/signup" element={<SignupScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path ="/about" element={<AboutScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path ="/shop" element={<ShopScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path ="/cart" element={<CartScreen/>}></Route>
      </Routes>
    </Router>

    </>
  )
}

export default App
