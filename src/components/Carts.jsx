import React from 'react'
import { useCart } from '../context/CartContext'

const Carts = () => {
  // const {cart, removeFromCart, increaseQuantity, decreaseDuantity} = useCart();
  const {state , dispatch} = useCart()

  return (
    <div>
      <h2 className='text-xl mb-2 text-center'>CART</h2>
        {state.cart.map(item => (
          <div key={item.id} className='mb-2 flex justify-between border p-2'>
            <img src= {item.image} alt="" width={100}/>
            <span className='w-1/2'>{item.title}</span>
            <span>{item.quantity}</span>
            <div className='space-x-2'>
              <button onClick={() => dispatch({type : 'INCREMENT' , payload : item})}>➕</button>
              <button className='mx-4' onClick={() => dispatch({type : 'DECREMENT' , payload : item})}>➖</button>
              <button onClick={() => dispatch({type :'REMOVE_FROM_CART', payload :item })}>❌</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Carts