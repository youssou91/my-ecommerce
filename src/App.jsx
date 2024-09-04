// import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import ProductDetails from "./pages/ProductDetails/ProductDetails"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* Render your routes here */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        {/* Add more routes as needed */}
        {/* <Route path="/about" element={<AboutPage/>} /> */}
        {/* <Route path="/contact" element={<ContactPage/>} /> */}
        {/* <Route path="/cart" element={<CartPage/>} /> */}
        {/* <Route path="*" element={<NotFoundPage/>} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </div>
  )
}

export default App
