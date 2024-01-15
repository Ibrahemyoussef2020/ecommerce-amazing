import { createSlice } from "@reduxjs/toolkit";
import {ProductProps, FavoritesDataProps} from '@/types'
import { favoritesDataStorage } from "@/storage";


const initialState:FavoritesDataProps = {
    favoritesData : favoritesDataStorage
}

export const favoriteSlice = createSlice({
    name:'favoriteSlice',
    initialState,
    reducers:{
        addToWishList:(state,action)=>{
           const existingProduct = state.favoritesData.find((productData:ProductProps)=> productData?._id === action.payload._id)
           if (existingProduct) {
            existingProduct.quantity += action.payload.quantity;
          } else {
            state.favoritesData.push(action.payload);
          }

          localStorage.setItem('favorites' , JSON.stringify(state.favoritesData))
        },
        removeFromWishList:(state,action)=>{
            const existingProduct = state.favoritesData.find((productData:ProductProps)=> productData?._id === action.payload)
            if (existingProduct) {
                state.favoritesData = state.favoritesData.filter((productData:ProductProps) => productData._id !== existingProduct._id)
              }
              localStorage.setItem('favorites' , JSON.stringify(state.favoritesData))
        },
        clearWishList:(state)=>{
            state.favoritesData = [];
            localStorage.setItem('favorites' , JSON.stringify(state.favoritesData))
        }
    }
})

export const {
    addToWishList,
    removeFromWishList,
    clearWishList
} = favoriteSlice.actions

export default favoriteSlice.reducer