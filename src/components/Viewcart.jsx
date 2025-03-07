import React, { useEffect, useState, useContext } from 'react';
import './Viewcart.css';
import { cartContext } from '../App';

const Viewcart = () => {
  const { cart, setCart } = useContext(cartContext); // Destructure directly from context

  const [total, setTotal] = useState(0);

  useEffect(() => {
   
    const totalPrice = cart.reduce((acc, cv) => acc + (cv.price * cv.count), 0);
    setTotal(totalPrice);
  }, [cart]);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <>
      <h1>Cart Products</h1>
      <div className='cart-container'>
        {cart.map((product) => (
          <div className='cart-product' key={product.id}>
            <div className='img'>
              <img src={product.url} alt={product.name} /> {/* Improved alt text */}
            </div>
            <div className='cart-details'>
              <h3>{product.name}</h3>
              <p>Quantity: {product.count}</p>
              <h4>Price: Rs. {product.price}.00</h4>
              
              <h3>Total Price for {product.name}: Rs. {product.price * product.count}.00</h3>

              <button className='remove-btn' onClick={() => removeFromCart(product.id)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className='total-price'>Total Price: Rs. {total.toFixed(2)}</h2> {/* Ensure two decimal places */}
    </>
  );
};

export default Viewcart;
