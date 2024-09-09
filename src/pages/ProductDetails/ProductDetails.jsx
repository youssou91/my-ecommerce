// eslint-disable-next-line no-unused-vars
import React, {useContext} from 'react'
import  './ProductDetails.css'

import { useParams } from 'react-router-dom'

import { ShopContext } from '../../Components/ShopContext/ShopContext'

import { productsData } from '../../data'

const ProductDetails = () => {
  const {addToCart} = useContext(ShopContext);
  //get the product id
  const { id } = useParams();

  //get product based on the id
  const product = productsData.find((prod) => {
    return prod.id === parseInt(id)
  });


  return (
    <div>
      <div className="product_details_info">
       <div className="detail_left">
        <img src={product.image} alt='' className="detail_image" />
       </div>
        <div className="detail_right">
          <h3>{product.title}</h3>
          <p className='product_price'>Prix : ${product.price}</p>
          <p className='dsc '>{product.description}</p>
          <button onClick={() => addToCart(product, id)}>Ajouter au panier</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails