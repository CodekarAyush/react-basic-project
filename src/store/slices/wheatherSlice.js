import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchWheather = createAsyncThunk('wheather/fetchWheather',async (city)=>{
    const API_KEY = "43f59d59bdbdab102ad6f2abb04f8cb9"
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    return resp.data
})


const initialState = {
    data:null ,
    loading :false,
    error :null
}

const wheatherSlice = createSlice({
    name:"wheather",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
builder.addCase(fetchWheather.pending,(state)=>{
    state.loading = true
    state.error = null
}).addCase(fetchWheather.fulfilled,(state,action)=>{
    state.loading = false
    state.data = action.payload
}).addCase(fetchWheather.rejected,(state,action)=>{
    state.loading = false
    state.error = action.error.message
})
    }
})


export default wheatherSlice.reducer