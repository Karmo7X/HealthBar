import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"



const baseurl= `https://ce30-102-44-255-132.ngrok-free.app/api/`

const initialState={
    userdata:null,
    error:null,
    status:null,
    data:null,

}


export const LoginApi = createAsyncThunk('Auth/Login', async (datalogin) => {
    try {
      const req = await axios.post(`${baseurl}login`, datalogin);
      const res = req.data;
      Cookies.set('token',req.data.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${req.data.token}`;
      console.log(res);
      return res ;
    } catch (err) {
      console.error(err);
      return err.response.data; // or handle the error appropriately
    }
  });
export const RegisterApi =createAsyncThunk('Auth/Register', async (datauser)=>{
  
    try{
        const req=await axios.post(`${baseurl}register`,datauser)
        const res =req.data
        
        console.log(res)
        return res
    
    }
    catch(err)
    {
        console.error(err);
        return err.response.data;
    }






})
export const ForgetPassApi = createAsyncThunk('Auth/Forget', async (forgetdata) => {
  try {
    const req = await axios.post(`${baseurl}forgetPassword`, forgetdata);
    const res = req.data;
   
    console.log(res);
    return res ;
  } catch (err) {
    console.error(err);
    return err.response.data; // or handle the error appropriately
  }
});

export const OTP = createAsyncThunk('Auth/OTP', async (dataOTP) => {
    try {
      const req = await axios.post(`${baseurl}verifyOtp`, dataOTP);
      const res = req.data;
     
      console.log(res);
      return res ;
    } catch (err) {
      console.error(err);
      return err.response.data; // or handle the error appropriately
    }
  });



const Authslice =createSlice({
name:'auth',
initialState,
reducers:{},
extraReducers:(builder)=>{
 builder
 .addCase(LoginApi.fulfilled,(state,action)=>{
    state.userdata=action.payload;
    state.error=null;
    state.status='success';
 
 })
 .addCase(LoginApi.rejected,(state,action)=>{
     state.userdata=null
     state.error=action.payload;
     state.status='fail';
  
  })
 .addCase(RegisterApi.fulfilled,(state,action)=>{
   state.userdata=action.payload;
   state.error=null;


})
.addCase(RegisterApi.rejected,(state,action)=>{
    state.userdata=null
    state.error=action.payload;
 
 
 })
 .addCase(ForgetPassApi.fulfilled,(state,action)=>{
  state.userdata=action.payload;
  state.error=null;


})
.addCase(ForgetPassApi.rejected,(state,action)=>{
   state.userdata=null
   state.error=action.payload;


})
 .addCase(OTP.fulfilled,(state,action)=>{
    state.data=action.payload;
    state.error=null;
 
 
 })
 .addCase(OTP.rejected,(state,action)=>{
     state.data=null
     state.error=action.payload;
  
  
  })

 


}




})
  

export default Authslice.reducer
