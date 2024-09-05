// import React from 'react'
import { Link } from 'react-router-dom'
import  './Navbar.css'
import { BiCart, BiUser } from "react-icons/bi"

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>Shop-G</h2>
        </div>
        <div className="link">
          <ul>
            <li>Accueil</li>
            <li>Produits</li>
            <li>Contacts</li>
            <li>Plus</li>
          </ul>
        </div>
        <div className="nav_icon_wrapper">
          <Link to='/cart' className="nav_ico">
            <div className="nav_cart">
              <BiCart className="nav_icon"/>
              <p className="nav_cart_amout">0</p>
            </div>
          </Link>
          <BiUser className="nav_icon"/>
        </div>

      </div>
    </div>
  )
}

export default Navbar