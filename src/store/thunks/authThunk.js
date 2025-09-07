import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";




export const userLogin = createAsyncThunk("userLogin",async (payload,{rejectWithValue})=>{
    try{
        const response = await api.post('/auth/login',{...payload, expiresInMins: 30 })
        return response.data;
    }catch(err){
        rejectWithValue(err.message);
    }
})