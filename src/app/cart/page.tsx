'use client'

import { useSelector } from "react-redux"

const Cart = () => {
  const {productsData} = useSelector((state:any) => state.cart)


 console.log(productsData);
 
  return (
    <div>Cart</div>
  )
}

export default Cart