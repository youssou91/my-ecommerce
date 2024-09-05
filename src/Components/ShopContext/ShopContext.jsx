/* eslint-disable no-unused-vars */
import React, {createContext, useState, useEffect} from 'react'
import  './ShopContext.css'


export const ShopContext = createContext();

import {productsData} from '../../data';

// eslint-disable-next-line react/prop-types
const ShopContextProvider = ({children}) => {
  // Etat des produits
  /// eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(productsData);
  // etat panier 
  const [cart, setCart] = useState([]);
  //etat item
  const [itemAmount, setItemAmount] = useState(0);
  //etat prix total
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem)=>{
      const priceNumber = parseFloat(currentItem.price);
      if (isNaN(priceNumber)) {
        return accumulator;
      }
      return accumulator + priceNumber * currentItem.itemAmount;
    },0);
    setTotalPrice(total);
  },[cart]);
  
  // Fonction pour ajouter un produit au panier
  const addToCart = (product, id) => {
    const newItem = {...product, amount:1};
    console.log(newItem);
    // 
    // const existingItem = cart.find((item) => item.id === product.id);
    // if (existingItem) {
    //   setCart(cart.map((item) =>
    //     item.id === product.id? {...item, itemAmount: item.itemAmount + 1} : item
    //   ));
    //   setItemAmount(itemAmount + 1);
    // } else {
    //   setCart([...cart, {...product, itemAmount: 1 }]);
    //   setItemAmount(itemAmount + 1);
    // }
  };

  
  return <ShopContext.Provider value={{products, addToCart }}>
      {children}
    </ShopContext.Provider>
  
}

export default ShopContextProvider;

