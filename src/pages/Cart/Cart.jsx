import React from 'react'
import './Cart.css';
import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
 const { state, dispatch, totalPrice } = useCart();
 return (
   <div className='container py-3'>
     <h2>Cart</h2>
     <hr />
     {
       state.cart.length === 0
       ? <p>No item in the cart.</p> :
       state.cart.map(val => <CartItem cartItem={val} key={val.item.id} />)
     }

     <hr />
     <button onClick={() => dispatch({ type: 'EMPTY_CART' })}>Empty Cart</button>
     <hr />
     <h3>Total Price</h3>
     <h5>{totalPrice.toFixed(2)}</h5>
   </div>
 )
}

export default Cart

