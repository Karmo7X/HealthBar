import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home/Home';
import Foodmenu from './Foodmenu/Foodmenu';
import OrderComplete from './OrderComplete/OrderComplete';
function App() {
 

  return (
    <>
     
     <BrowserRouter>
     <Routes> 
       <Route index element={<Home/>}/>
      <Route path='/' element={<Layout/>}>
      <Route path='Foodmenu' element={<Foodmenu/>}/>
      <Route path='ordercomplete' element={<OrderComplete/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
