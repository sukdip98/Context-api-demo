import { createContext, useState } from 'react'
export const CartContext=createContext();
const ContextApi = ({children}) => {
    const [cart,setCart]=useState([]);
  return (
      <CartContext.Provider value={{cart,setCart}}>
    {children}
    </CartContext.Provider>
  );
}

export default ContextApi