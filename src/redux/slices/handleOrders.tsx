import { createSlice } from "@reduxjs/toolkit";
import {OrdersDataProps} from '@/types'

const initialState : OrdersDataProps = {
    ordersData:[]
}

export const ordersSlice = createSlice({
    name:'ordersSlice',
    initialState,
    reducers:{
        addOrder:(state,action)=>{
           state.ordersData.push(action.payload); 
        },
        clearOrders:(state)=>{
            state.ordersData = []
        }
    }
})

export const {
    addOrder,
    clearOrders
} = ordersSlice.actions

export default ordersSlice.reducer