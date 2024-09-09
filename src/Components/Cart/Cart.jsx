/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { FiTrash2 } from 'react-icons/fi'
import  './Cart.css'
import CartDetails from './CartDetails'
import { ShopContext } from '../ShopContext/ShopContext'

const Cart = () => {
  const { total, cart, clearCart, itemAmount } = useContext(ShopContext);
  return (
    <div>
      <div className="cart_container">
        <div className="cart_left">
          <div className="cart_header">
            <h3>Shopping Cart</h3>
            <h3>Items: ({itemAmount})</h3>
            <FiTrash2 onClick={clearCart} className='delete_cart'/>
          </div>
          <div className="cart_header">
            <span>Description</span>
            <span>Quantite</span>
            <span>Prix</span>
            <span>Total</span>
          </div>
          <div className="cart_detail">
            {cart.length > 0 ? (
              cart.map((item) =>(
                <CartDetails item = {item} key ={item.id} />
              ))
            ):
              <div className="empty_cart">
                <h3>Votre panier est vide</h3>
                <p>Rendez-vous sur notre boutique pour ajouter des produits</p>
              </div>
            }
          </div>
        </div>
        <div className="cart_right">
          <h3>Total panier</h3>
          <div className="cart_summary">
            <div className="summary_item">
              <span>Items</span>
              <span>{itemAmount}</span>
            </div>
            <div className="summary_item">
              <span>Sous Total</span>
              <span>$ {isNaN(total)? 0: total}</span>
            </div>
            <div className="summary_item">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary_item">
              <span>Code Promo</span>
              <input type="text" placeholder='Entrer votre code'/>
              <button className='apply_btn'>Appliquer</button>
            </div>
            <div className="summary_item total_cost">
              <span>Total</span>
              <span>$ {isNaN(total)? 0: total}</span>
            </div>
            <button className='checkout_btn'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
