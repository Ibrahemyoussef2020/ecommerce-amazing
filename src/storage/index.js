import { FavoritesDataProps } from "@/types"

export const productsDataStorage = localStorage.getItem('products') !== null ?  JSON.parse(localStorage.getItem('products')) : [] 
export const favoritesDataStorage = localStorage.getItem('favorites') !== null ?  JSON.parse(localStorage.getItem('favorites')) : [] 
export const ordersDataStorage = localStorage.getItem('orders') !== null ?  JSON.parse(localStorage.getItem('orders')) : [] 
export const userInfoStorage = localStorage.getItem('user') !== null ?  JSON.parse(localStorage.getItem('user')) : null