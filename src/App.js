import React, { useState, useEffect } from 'react';
import { Navbar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";
import { Routes, Route } from "react-router-dom";


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    setCart(await commerce.cart.add(productId, quantity))
  }
  
  const handleUodateCartQty = async (productId, quantity) => {
    setCart(await commerce.cart.update(productId, {quantity}));
  };

  const handleRemoveFromCart = async (productId) => {
    setCart(await commerce.cart.remove(productId));
  };


  const handleEmptyCart = async () => {
    setCart(await commerce.cart.empty());
  }


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
        <div>
          <Navbar totalItem ={ cart.total_items } />
          <Routes>
              <Route path='/' element={<Products 
                products={products} 
                onAddToCart = {handleAddToCart}
              />}></Route>
              <Route path='cart' element={<Cart 
              cart={cart}
              handleRemoveFromCart = {handleRemoveFromCart}
              handleUodateCartQty = {handleUodateCartQty}
              handleEmptyCart = {handleEmptyCart}
               />}></Route>
               <Route path='/checkout' element={ <Checkout cart={cart} />}></Route>
          </Routes>
        </div>
  )
}

export default App
