import { createSlice } from "@reduxjs/toolkit";
import {ProductsDataProps,ProductProps} from '@/types'


const initialState : ProductsDataProps  = {
    productsData :[]
}

export const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           const existingProduct = state.productsData.find((productData:ProductProps)=> productData?._id === action.payload._id)

           if (existingProduct) {
            existingProduct.quantity += action.payload.quantity;
          } else {
            state.productsData.push(action.payload);
          }
        },
        removeFromCart:(state,action)=>{
            const existingProduct = state.productsData.find((productData:ProductProps)=> productData?._id === action.payload)
            if (existingProduct) {
                state.productsData = state.productsData.filter((productData:ProductProps) => productData._id !== existingProduct._id)
              }
        },
        increaseCount:(state:any,action)=>{
            const existingProduct = state.productsData.find((productData:ProductProps)=> productData?._id === action.payload._id)
            if (existingProduct) {
               existingProduct.quantity++
            }
        },
        decreaseCount:(state:any,action)=>{
            const existingProduct = state.productsData.find((productData:ProductProps)=> productData?._id === action.payload)
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity--
            }
        },
        clearCart:(state)=>{
            state.productsData = []
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    clearCart
} = cartSlice.actions

export default cartSlice.reducer
