/* eslint-disable no-unused-vars */
import  {useContext} from 'react'
import { Link } from 'react-router-dom'
import  './Navbar.css'
import { BiCart, BiUser } from "react-icons/bi"
import { ShopContext } from '../ShopContext/ShopContext'

const Navbar = () => {
  //grestion de la navbar
  window.addEventListener('scroll', function (){
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('active', window.scrollY >= 20)
  });
  // Récupérer le nombre d'items dans le panier dans le context ShopContext
  const {itemAmount} = useContext(ShopContext);
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
              <p className="nav_cart_amout">{itemAmount}</p>
            </div>
          </Link>
          <BiUser className="nav_icon"/>
        </div>

      </div>
    </div>
  )
}

export default Navbar