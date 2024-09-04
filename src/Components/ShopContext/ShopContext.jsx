/* eslint-disable no-unused-vars */
import React, {createContext, useState} from 'react'
import  './ShopContext.css'


export const ShopContext = createContext();

import {productsData} from '../../data';

// eslint-disable-next-line react/prop-types
const ShopContextProvider = ({children}) => {

  // Etat des produits

  /// eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(productsData);
  return (
    <ShopContext.Provider value={{products }}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;

