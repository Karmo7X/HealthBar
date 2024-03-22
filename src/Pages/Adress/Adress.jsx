import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    
    IoLocationOutline ,
    IoCloseCircle,
  
  } from "react-icons/io5";
  import { IoIosAddCircleOutline } from "react-icons/io";
  import { CiEdit } from "react-icons/ci";



const Adress = () => {
  
  const navigate =useNavigate()
  const handleadd_address =()=>{
  
    navigate('/Add_Adress')
  
  
  }
  return (
    <>
      <div className='Adress' style={{ marginTop: "7rem", minHeight: "100vh"}}>
       <div className="container-fluid">
        <div className="Adress_sec">
            <div className="Adress_sec_head d-flex  align-items-center  justify-content-between mb-5" style={{padding:'10px 40px'}}>
                <div>
                    <h5>عنوان التوصيل</h5> 
                    <p className='mt-4 mb-4'>اختر عنوان التوصيل أو أضف عنوان جديد</p>
                </div>
               <div>
               <Link to=''  variant="outline-success login-btn" className='text-decoration-none mb-5' style={{padding:'10px 50px' ,border:"1px solid #4E4D4D" ,borderRadius:"20px",fontWeight:"500" ,color:"#383838" ,background:'#ffffff'}}> استمرار </Link>
               </div>
            </div>
            <div className='Adress_sec_content'>
                <div className="row  ">
                     <div className="col-lg-4 col-sm-6 col-sm-12 mb-4">
                <div class="card   w-100 " style={{padding:'10px 40px' ,minHeight:'420px'}}>
  <div class="card-body">
    <div className="d-flex align-items-center justify-content-between ">
    <h5 class="card-title"><IoLocationOutline style={{color:'#6DC177'}}/> عماره   </h5>
    <CiEdit style={{fontSize:"35px" ,color:'#6DC177'}}/>

    </div>
    <hr className='mt-4 mb-4'/>
   <div>
    <label htmlFor="" style={{color:'#CECECE'}}>العنوان</label>
    <p style={{fontSize:"20px"}}>شارع 59 - مصر الجديدة - القاهرة</p>
   </div>
   <div>
    <label htmlFor="" style={{color:'#CECECE'}}>رقم المبني / فيلا</label>
    <p style={{fontSize:"20px"}}> 7 </p>
   </div>
   <div className="d-flex align-items-center justify-content-between ">
 
   <div>
    <label htmlFor="" style={{color:'#CECECE'}}> رقم الطابق </label>
    <p style={{fontSize:"20px"}}> 5 </p>
   </div>
   <div>
    <label htmlFor="" style={{color:'#CECECE'}}> رقم الشقة </label>
    <p style={{fontSize:"20px"}}> 15 </p>
   </div>
    </div>
    <div>
    <label htmlFor="" style={{color:'#CECECE'}}> رقم الاتصال </label>
    <p style={{fontSize:"20px"}}> 01010101010 </p>
   </div>
   
   
  </div>
</div>
                </div>

                <div className="col-lg-4 col-sm-6 col-sm-12 mb-4" onClick={()=>handleadd_address()}>
                <div class="card w-100 " style={{padding:'10px 40px' ,minHeight:'420px'}}>
  <div class="card-body">
    <div  className="d-flex align-items-center justify-content-center flex-column  " style={{height:"300px" ,margin:'0'}} >
    <IoIosAddCircleOutline style={{fontSize:"50px" ,color:'#6DC177'}}/>
    <h5 class="card-title mt-4">أضف عنوان جديد  </h5>
    

    </div>
  
   
   
  </div>
</div>
                </div>
                </div>
               
         
            </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default Adress
