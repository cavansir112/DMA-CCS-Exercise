import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
// import type { PayloadAction } from '@reduxjs/toolkit'

let praductUrl = 'http://localhost:8070/praduct';
let basketUrl = 'http://localhost:8070/basket';

export const getAllProducts = createAsyncThunk("products/getAllProducts",async()=>{
    let reponse = await axios.get(praductUrl)
    return reponse?.data;
});

export const getBasket = createAsyncThunk("basket/getBasket",async()=>{
    let reponse = await axios.get(basketUrl)
    return reponse?.data;
});

export const postProduct = createAsyncThunk("basket/postProduct",async(product)=>{
    let reponse = await axios.post(basketUrl,product)
    return reponse?.data;
})

export const basketSlice = createSlice({
  name: 'soppingCard',
  initialState:{
    products:[],
    basket:[]
  },
  extraReducers:(builder)=>{
    builder.addCase(getAllProducts.fulfilled,(state,action)=>{
        state.products = action.payload;
    })
    .addCase(getBasket.fulfilled,(state,action)=>{
        state.basket = action.payload;
    })
    .addCase(postProduct.fulfilled,(state,action)=>{
        state.basket.push(action.payload)
    })
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default basketSlice.reducer