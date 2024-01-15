import {
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    clearCart
} from './handleCart'

import {
    addOrder,
    clearOrders
} from './handleOrders'

import {
    addToWishList,
    removeFromWishList,
    clearWishList
} from './handleFavorite'

import {
    login,
    logout
} from './handleUser'





export {
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    clearCart,

    addOrder,
    clearOrders,

    addToWishList,
    removeFromWishList,
    clearWishList,

    login,
    logout
}

export {default as CartReducer} from './handleCart'
export {default as OrdersReducer} from './handleOrders'
export {default as FavoritesReducer} from './handleFavorite'
export {default as LogReducer} from './handleUser'