import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home/Home';
import Foodmenu from './Pages/Foodmenu/Foodmenu';
import OrderComplete from './Pages/OrderComplete/OrderComplete';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Order from './Pages/Order/Order';
import Adress from './Pages/Adress/Adress';
import Add_adress from './Pages/Add_Adress/Add_adress';
import Dishes from './Pages/YourDish/Dishes';
function App() {
 

  return (
    <>
     
     <BrowserRouter>
     <Routes> 
       <Route index element={<Home/>}/>
      <Route path='/' element={<Layout/>}>
      <Route path='Foodmenu' element={<Foodmenu/>}/>
      <Route path='ordercomplete' element={<OrderComplete/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='Register' element={<Register/>}/>
      <Route path='order' element={<Order/>}/>
       <Route path='Adress' element={<Adress/>}/>
       <Route path='Add_Adress' element={<Add_adress/>}/>
       <Route path='your_dish' element={<Dishes/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
