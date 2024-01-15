'use client'

import { ProductProps, ProductsProps, SelectorStateProps } from '@/types'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FormattedPrice } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToWishList, removeFromWishList } from '@/redux/slices'
import toast, {Toaster} from 'react-hot-toast'

const Product = ({products}:ProductsProps) => {
  const dispatch = useDispatch()
  const {productsData} = useSelector((state:SelectorStateProps)=> state.cart)
  const {favoritesData} = useSelector((state:SelectorStateProps)=> state.favorites)

  const isAddedToCart = (_id:number)=>{
    return productsData?.some((productData:ProductProps)=> productData._id == _id)
  }

  const isAddedToWishList = (_id:number)=>{
    
    return favoritesData?.some((favoriteData:ProductProps)=> favoriteData._id == _id)
  }

  const handleAddToCart = (product:ProductProps)=>{
    dispatch(addToCart(product))
    toast.success(`${product?.title || 'Item'} added To Cart`)
  }

  const handleToggleWishLis = (product:ProductProps)=>{
    if (isAddedToWishList(product._id)) {
      dispatch(removeFromWishList(product._id))
      toast.error(`${product?.title || 'Item'} removed from Favoriets`)
    }
    else{
      dispatch(addToWishList(product))
      toast.success(`${product?.title || 'Item'} added To Favoriets`)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
      {
        products?.map(product => 
        <article key={product._id} className="relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow-hidden">
          <Link href={{pathname:`/${product?._id}`, query:{_id:product._id}}}>
          <Image
              src={product?.image}
              alt="Product image"
              width={450}
              height={450}
              className="w-full h-80 object-contain lg:object-cover group-hover:scale-105 duration-300"
            />
            </Link>

            <Heart
            fill={isAddedToWishList(product._id) ? 'red' : 'black'}     
            className={`absolute top-4 right-4  h-5  cursor-pointer duration-200 border-none outline-none ${ isAddedToWishList(product._id) ? 'text-red-500' : 'text-black' }`}
            onClick={()=>handleToggleWishLis(product)}
          />
           <div className="p-4 bg-white/80 group-hover:bg-white group-hover:shadow-xl duration-300">
           <p className="group-hover:text-designColor duration-300 mb-2">
              {product?.title}
            </p>
            <p className="font-semibold">
              <FormattedPrice amount={product?.price} />
            </p>
            <div className="flex items-center justify-between text-sm mt-2">
              <button
                onClick={()=>handleAddToCart(product)}
                 className="uppercase font-semibold hover:text-designColor duration-300"
              >
                 Add to cart
              </button>
              <Link
                className="uppercase font-semibold hover:text-designColor duration-300"
                href={{pathname:`/${product?._id}`, query:{_id:product._id}}}
              >
                More Info
              </Link>
            </div>
           </div>
        </article>)
      }
      <Toaster 
        position='bottom-right'
        toastOptions={{
          style:{
            background:'#111',
            color:'#fff',
            bottom:'50px',
            right:'50px'
          }
        }}
      />
    </div>
  )
}

export default Product