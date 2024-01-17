'use client'

import { Title , Purchases} from "@/components"


const Cart = () => {
 
  return (
    <div className=" p-4 lg:p-6">
      <Title text='Your Products' className="" />
      <Purchases />
    </div>
  )
}

export default Cart