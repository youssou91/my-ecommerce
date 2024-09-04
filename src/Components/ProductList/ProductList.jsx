/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import './ProductList.css'
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { products } = useContext(ShopContext);
  return (
    <div>
      <div className="product_list">
        <h2>Our Collections</h2>
        <div className="product_grid">
          {products.map((prod) => {
            const { id, image, title, price } = prod;
            return (
              <div key={id} className="product_card">
                <Link to={`/product/${prod.id}`} key={prod.id}>
                  <img src={image} alt="" className='product_img' />
                  <div className="product_info">
                    <h4>{title}</h4>
                    <p>$ {price}</p>
                  </div>
                </Link>
                <button className='add_to_card'>Add To Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductList