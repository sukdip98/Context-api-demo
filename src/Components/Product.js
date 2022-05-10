import React, { useContext } from 'react'
import { CartContext } from './ContextApi'

const Product = ({prod}) => {
    const {cart,setCart}=useContext(CartContext);
  return (
    <div className="products">
        <img src={prod.image} alt={prod.name}/>
        <div className="productDesc">
            <span >
            {prod.name}
            </span>
                <span >$:{prod.price.substring(0,3)}</span>
        </div>
        {
            cart.includes(prod)?(<button onClick={()=>{setCart(cart.filter((c)=>c.id!==prod.id))}}>Remove</button>):
            (<button className='add' onClick={()=>{setCart([...cart,prod])}}>Add to cart</button>)

        }
    </div>
  )
}

export default Product