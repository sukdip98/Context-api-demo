import React, { useContext, useState } from 'react';
import { faker } from '@faker-js/faker';
import Product from './Product';
import "./style.css"
import { CartContext } from './ContextApi';
faker.seed(100);

const Home = () => {
    const productsArray=[...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        image:faker.image.image(),
        price:faker.commerce.price(),
    }));
    // console.log(productsArray)
    const [products]=useState(productsArray);
    // const[cart,setCart]=useState([]);
    const {cart,setCart}=useContext(CartContext);
    console.log(cart)

  return (
    <div className='productContainer'>
        {
            products.map((prod)=>{
                return <Product prod={prod} />
            })
        }
    </div>
  )
}

export default Home