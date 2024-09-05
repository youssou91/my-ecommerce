// import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import  './Cart.css'
import CartDetails from './CartDetails'

const Cart = () => {
  return (
    <div>
      <div className="cart_container">
        <div className="cart_left">
          <div className="cart_header">
            <h3>Shopping Cart</h3>
            <h3>Items: (0)</h3>
            <FiTrash2 className='delete_cart'/>
          </div>
          <div className="cart_header">
            <span>Description</span>
            <span>Quantite</span>
            <span>Prix</span>
            <span>Total</span>
          </div>
          <div className="cart_detail">
            <CartDetails />
          </div>
        </div>
        <div className="cart_right">
          <h3>Total panier</h3>
          <div className="cart_summary">
            <div className="summary_item">
              <span>Items</span>
              <span>0</span>
            </div>
            <div className="summary_item">
              <span>Sous Total</span>
              <span>0</span>
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
              <span>0</span>
            </div>
            <button className='checkout_btn'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
