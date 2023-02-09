import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import CartCard from './CartCard';
import { clearCart } from '../utils/cartSlice';

const Cart=()=>{

    const cartItems=useSelector((store)=> store.cart.items);

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return (
        <>
        <div className='flex justify-center mt-6'>
        <h1 className='text-center mt-2 mr-4'> Cart Items-{cartItems.length} </h1>
        <button className="bg-green-300 p-2 rounded-xl cursor-pointer"onClick={()=>handleClearCart()}>Clear Cart</button>
        </div>
        <div className='flex flex-wrap justify-center'>
           {
            cartItems.map((items)=>(
                <CartCard key={items.id} {...items}/>
            ))
           }
        </div>
        </>
    )
}

export default Cart;