import { configureStore } from "@reduxjs/toolkit";
import { CartReducer,OrdersReducer,FavoritesReducer,LogReducer  } from "./slices";

export const store = configureStore({
    reducer:{
        cart:CartReducer,
        orders:OrdersReducer,
        log:LogReducer,
        favorites:FavoritesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch