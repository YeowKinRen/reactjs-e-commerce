import React from 'react'
import { useCart } from '../../context/CartContext';

const CartItem = ({ cartItem }) => {

    const { dispatch } = useCart();
    return (
        <div className="card my-3 p-5">
            <div className='row'>
                <div className="col-3">
                    <img src={cartItem.item.image} alt={cartItem.item.name} className='img-fluid' />

                </div>
                <div className="col-9">
                    <h4>{cartItem.item.title}</h4>
                    <p>USD {cartItem.item.price}</p>
                    <p>
                        <button className='btn' onClick={() => dispatch({
                            type: 'REMOVE_ITEM',
                            payload: { item: cartItem.item, quantity: 1 }
                        })}>-</button>
                        {cartItem.quantity}
                        <button className='btn' onClick={() => dispatch({
                            type: 'ADD_ITEM',
                            payload: { item: cartItem.item, quantity: 1 }
                        })}>+</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartItem