/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react'
import './ShopContext.css'

export const ShopContext = createContext();

import { productsData } from '../../data';

// eslint-disable-next-line react/prop-types
const ShopContextProvider = ({ children }) => {
  // Etat des produits
  /// eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(productsData);
  // etat panier 
  const [cart, setCart] = useState([]);
  //etat item
  const [itemAmount, setItemAmount] = useState(0);
  //etat prix total
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcul du prix total du panier
    const total = cart.reduce((accumulator, currentItem) => {
      const priceNumber = parseFloat(currentItem.price);
      if (isNaN(priceNumber)) {
        return accumulator;
      }
      return accumulator + priceNumber * currentItem.amount;
    }, 0);
    setTotal(total);
   
  }, [cart]);
  // Fonction pour ajouter un produit au panier
  const addToCart = (item, id) => {
    const existingItem = cart.find((cartItem) => cartItem.id === id);
  
    if (existingItem) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, amount: 1 }]); // Initialisation de 'amount' à 1
    }
  };
  
  //Quantite des produits dans le panier 
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
      // console.log(amount);
    }
  }, [cart]);
  // Fonction pour retirer un produit du panier
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id!== id;
    });
    setCart(newCart);
  };
  //Fonction pour vider le panier des produits
  const clearCart = () => {
    setCart([]);
  };
 
  // Fonction pour augmenter la quantité d'un produit dans le panier
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
  
    if (cartItem && typeof cartItem.amount === 'number') {
      addToCart(cartItem, id);
    }
  };
  
  // Fonction pour diminuer la quantité d'un produit dans le panier
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
  
    if(cartItem && cartItem.amount > 1) {
      const newCart = cart.map((item) => {
        if(item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else if (cartItem && cartItem.amount <= 1) {
      removeFromCart(id);
    }
  }
  
  return <ShopContext.Provider value={{ products,total, addToCart, removeFromCart, cart, clearCart, increaseAmount, decreaseAmount, itemAmount }}>
    {children}
  </ShopContext.Provider>

}

export default ShopContextProvider;

