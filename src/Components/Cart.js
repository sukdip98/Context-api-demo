import { toContainHTML } from '@testing-library/jest-dom/dist/matchers'
import React, { useContext, useEffect,useState } from 'react'
import { CartContext } from './ContextApi'
import Product from './Product';

const Cart = () => {
  const {cart,setCart}=useContext(CartContext);
  const [total,setTotal]=useState(0);
  useEffect(()=>{
      setTotal(  cart.reduce((acc,curr)=>acc+Number(curr.price),0)
      )
  },[cart])
  return (
    <div>
        <span style={{fontSize:"25px"}}>My Cart</span>
        <br/>
        <span style={{fontSize:"25px"}}>Total:{total}</span>
        <div className='productContainer'>
         {cart.map((prod)=>{
             return <Product prod={prod}/>
         })}
        </div>
    </div>
  )
}

export default Cart