import { configureStore } from "@reduxjs/toolkit";

import authreducer from './slices/Auth/Authslice'



const store =configureStore({
  reducer:{
  auth:authreducer
}


})


export default  store;