import { createSlice } from "@reduxjs/toolkit";
import {UserLogProps} from '@/types'

const initialState : UserLogProps = {
    userInfo:null
}

export const handleLog = createSlice({
    name:'handleLog',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.userInfo = action.payload;
        },
        logout:(state)=>{
            state.userInfo = null
        }
    }
})

export const {
    login,
    logout
} = handleLog.actions

export default handleLog.reducer