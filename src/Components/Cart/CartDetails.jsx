/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { FiTrash2 } from 'react-icons/fi';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import './Cart.css'


const CartDetails = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext);
  const { id, title, image, price, amount } = item;
  return (
    <div>
      <div className="cart_item">
        <div className="product_details">
          <img src={image} alt={title} />
          <div className="product_info">
            <h3>{title}</h3>
            <div onClick={() => removeFromCart(id)} className="cart_item_remove"><FiTrash2 /> </div>
          </div>
        </div>
        <div className="cart_quantity">
          <button onClick={() => decreaseAmount(id)}><IoMdRemove /> </button>
          <span>{amount}</span>
          <button onClick={() => increaseAmount(id)}> <IoMdAdd /> </button>
        </div>
        <div className="price">$ {price}</div>
        <div className="total_price">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
      </div>
    </div>
  )
}

export default CartDetails