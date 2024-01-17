import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartReducer,OrdersReducer,FavoritesReducer,LogReducer  } from "./slices";
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    REGISTER,
    WebStorage,
    PURGE
} from 'redux-persist'

import createWebStorage from "redux-persist/es/storage/createWebStorage";


export function createPersistStore() :WebStorage|any{
   const isServer = typeof window !== 'undefined' 

   if (isServer) {
        return {
            getItem() {
            return Promise.resolve(null);
            },
            setItem() {
            return Promise.resolve();
            },
            removeItem() {
            return Promise.resolve();
            },
        };
   }

   return createWebStorage("local")
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createPersistStore()


const persistConfig = {
    key:'browsring',
    storage
}

const combineReducer = combineReducers({
    cart:CartReducer,
    orders:OrdersReducer,
    log:LogReducer,
    favorites:FavoritesReducer,
}) 

const persistedReducer = persistReducer(persistConfig, combineReducer);


export const store = configureStore({
    reducer:{combine:persistedReducer },
    middleware:(getDefaultMiddleware)=>{
      return  getDefaultMiddleware({
            serializableCheck:{
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
    }
})

export let persistor = persistStore(store);