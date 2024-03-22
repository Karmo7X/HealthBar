import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const baseurl = `https://8f18-197-60-62-93.ngrok-free.app/api/`;

const initialState = {
  data: null,
  error: null,
  status: null,
};

const token = Cookies.get("token");


// -----------------------add address-----------
export const Add_address = createAsyncThunk("post/Add_address", async () => {
    try {
      const req = await axios.get(`${baseurl}addAddress`);
  
      const res = req.data;
      console.log(res);
  
      return res;
    } catch (err) {
      console.error("api error", err.response.data);
    }
  });
  
export const GetMaindish = createAsyncThunk("get/Main_dish", async () => {
  try {
    const req = await axios.get(`${baseurl}getMainDish`);

    const res = req.data;
    console.log(res);

    return res;
  } catch (err) {
    console.error("api error", err.response.data);
  }
});

const FoodSlice = createSlice({
  name: "Food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetMaindish.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.error=null;
        state.status='success';
     
     })
     .addCase(GetMaindish.rejected,(state,action)=>{
         state.userdata=null
         state.error=action.error;
         state.status='fail';
      
      })
  },
});

export default FoodSlice.reducer;
