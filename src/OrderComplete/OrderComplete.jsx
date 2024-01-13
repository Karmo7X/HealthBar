import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import {
    IoSearchOutline,
    IoCloseCircleSharp,
    IoCloseCircle,
    IoBag,
  } from "react-icons/io5";
  import payment1 from './../assets/icons/visa.png'
  import payment2 from './../assets/icons/master-card.png'
  import payment3 from './../assets/icons/Button.png'
  import paymentgate from './../assets/icons/payment-gate.png'
  import animation from './../assets/animation.gif'
  import { FaCheckToSlot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const OrderComplete = () => {
    const [counter, setCounter] = useState(1);
    const handelebuttonplus = () => setCounter(counter + 1);
  const handelebuttonminus = () => setCounter(counter - 1);
  return (
    <>
    <div style={{ marginTop: "7rem", minHeight: "100vh"}}>
      <div className="container-fluid">
        <div className="row  ">
            <div className="d-flex align-items-cetner justify-content-end checksolt-mobile " style={{display:'none'}} >
            <Button
                     data-bs-toggle="modal" data-bs-target="#exampleModalcheck"
                     className='checksolt-mobile-btn'
                      variant="outline-success btn"
                      style={{
                        padding: "10px 20px",
                        fontWeight: "500",
                        border: "none",
                        borderRadius: "10px",
                        background:
                          " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                        color: "#FFF",
                        display:'none'
                      }}
                    >
                     <FaCheckToSlot style={{fontSize:'20px'}} />
                    </Button>
            </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
        <div className="contact_sec mb-5">
        <h5>التواصل</h5>
        <div className='row align-items-center mt-3 mb-5'>
        <div className="col-lg-6 col-md-12 col-sm-12">
    
                <div class=" form-floating mb-3"> 
                   <input type="text" class="form-control form-control-lg p-lg-3 " id="floatingInput" style={{boxShadow:'none',outline:"none",border:"1px solid #CECECE",borderRadius:"40px",color:'#CECECE'}} placeholder="name@example.com"/>

    <label for="floatingInput" >الاسم الاول</label>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>  
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div class="form-floating  mb-3"> 
                   <input type="text" class="form-control form-control-lg p-lg-3"style={{boxShadow:'none',outline:"none",border:"1px solid #CECECE",borderRadius:"40px",color:'#CECECE'}} placeholder="name@example.com"   id="floatingInputName" />

    <label for="floatingInputName" >الاسم الاخير</label>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>  
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div class="form-floating  mb-3"> 
                   <input type="email" class="form-control form-control-lg p-lg-3"style={{boxShadow:'none',outline:"none",border:"1px solid #CECECE",borderRadius:"40px",color:'#CECECE'}} placeholder="name@example.com"   id="floatingInputEmail1" />

    <label for="floatingInputEmail1" >البريد الإلكتروني</label>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>  
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div class="form-floating text-right  mb-3">
        <input type="tel" class="form-control form-control-lg p-lg-3"style={{boxShadow:'none',outline:"none",border:"1px solid #CECECE",borderRadius:"40px",color:'#CECECE'}} placeholder="name@example.com"id="floatingInputtel" />

    <label for="floatingInputtel text-right" >رقم الهاتف</label>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>  
            </div>
            
        </div>
        </div>
        <hr className='mt-5 mb-5'/>
        <div className="delivery_sec mt-5 mb-5">
        <h5>التوصيل</h5>
        <div className='row align-items-center mt-3 mb-5'>
        <div className="col-lg-12 col-md-12 col-sm-12">
                <div class="mb-3 ">
     
    <select   class="form-select-lg p-lg-3 w-100 " placeholder='البلد  ' style={{boxShadow:'none',outline:"none",border:"1px solid #CECECE",borderRadius:"40px",color:'#CECECE'}}  id="exampleInputEmail1" >
    <option selected disabled>البلد</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
    </select>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>  
            </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <div class="mb-3 ">
     
     <select   class=" form-select-lg p-lg-3 w-100 " placeholder='البلد  ' style={{boxShadow:'none',outline:"none",border:"1px solid #CECECE",borderRadius:"40px",color:'#CECECE'}}  id="exampleInputEmail1" >
     <option selected disabled>المحافظة</option>
   <option value="1">One</option>
   <option value="2">Two</option>
   <option value="3">Three</option>
     </select>
     {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
   </div> 
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <div class="mb-3 ">
     
     <select   class="form-select-lg p-lg-3 w-100 " placeholder='البلد  ' style={{boxShadow:'none',outline:"none",border:"1px solid #CECECE",borderRadius:"40px",color:'#CECECE'}}  id="exampleInputEmail1" >
     <option selected disabled>المدينة</option>
   <option value="1">One</option>
   <option value="2">Two</option>
   <option value="3">Three</option>
     </select>
     {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
   </div>
            </div>
        
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div class="mb-3">
                <textarea class="form-control" style={{boxShadow:'none',outline:"none",border:"1px solid #CECECE",borderRadius:"10px", color:'#CECECE' ,resize:"none"}}   placeholder='العنوان بالتفصيل' id="exampleFormControlTextarea1" rows="5"></textarea>
  </div>  
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12' >
           <div className='w-100' style={{background:"#FCFCFC"}}>
           <div class="alert alert-success" role="alert" style={{background:"#FCFCFC" ,border:'none'}}>
           التوصيل في خلال 1-2 ساعة
            </div>
           </div>
            </div>
        </div>
        </div>
        <hr className='mt-5 mb-5'/>
        <div className="delivery_sec mt-5 mb-5">
        <h5>الدفع</h5>
        <p className='mt-2'>جميع المعاملات آمنة ومشفرة</p>
        <div className='row align-items-center mt-3 mb-5'>
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div style={{border:"1px solid #CECECE",borderRadius:"10px"}}>
                 <div class="mb-3 d-flex  align-items-center justify-content-between w-100 " style={{padding:' 40px'}}>
                <div class="form-check d-flex  ">
  <input class="form-check-input" style={{float:"none" ,marginLeft:"10px" }} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label w-75 "   style={{color:'#CECECE'}} for="flexCheckChecked">
  الدفع عن طريق (الخصم/الائتمان
البطاقات / المحافظ / الأقساط)
    </label>
    
  </div>
  <div className=''>
    <img src={payment1} alt="" className='img-fluid ' />
    <img src={payment2} alt="" className='img-fluid ' />
    <img src={payment3} alt="" className='img-fluid ' />
    {/* <img src={payment4} alt="" /> */}
    </div> 
  </div>  
  <div className='d-flex  align-items-center justify-content-center flex-column     ' style={{background:'#CECECE' ,width:"100%",height:"50vh"}}>
   <div className='d-flex  align-items-center justify-content-center   ' style={{borderRadius:"50%", background:"#EEEEEE" ,width:'150px', height:"150px"}}>
     <img src={paymentgate} alt="" className='img-fluid ' />
   </div>
  <div className='w-50 text-center mt-3'>
    <p>بعد الضغط على "الدفع الآن"، سيتم إعادة توجيهك إلى الدفع عبر (بطاقات الخصم/الائتمان/المحافظ/التقسيط) لإكمال عملية الشراء بشكل آمن.</p>
  </div>
  </div>
            </div>  
            </div>
             
        
        </div>
        </div>

        <div className="d-flex align-items-center justify-content-center mt-4 mb-3">
                          <Button
                     data-bs-toggle="modal" data-bs-target="#exampleModal"
                      variant="outline-success btn"
                      style={{
                        padding: "14px 90px",
                        fontWeight: "500",
                        border: "none",
                        borderRadius: "40px",
                        background:
                          " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                        color: "#FFF",
                      }}
                    >
                     الدفع الأن
                    </Button>
                          </div>
                          <div class="modal fade" lass="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header justify-content-end " style={{border:"none"}}>
     
        <button type="button" class="btn-close" style={{border:'1px solid #CECECE',margin:"0" ,borderRadius:"50%"}} data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className='d-flex align-items-center justify-content-center flex-column '>
         <img src={animation} alt="" className='img-fluid' />
         <h5 className='fw-bold'>تم تنفيذ طلبك بنجاح </h5>
         <p>رقم الطلب :<span className='fw-bold'>123klm</span></p>
         <p>لأي استفسار يمكنك الاتصال علي  :<span className='fw-bold'>19425</span></p>
         <Link
                    to='/'
                    className='mt-4 mb-5 text-decoration-none '
                      variant="outline-success btn"
                      style={{
                        padding: "14px 90px",
                        fontWeight: "500",
                        border: "none",
                        borderRadius: "40px",
                        background:
                          " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                        color: "#FFF",
                      }}
                    >
                   العودة لرئيسية
                    </Link>
        </div>
      </div>
     
    </div>
  </div>
</div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div
                className="cart_side_sec mt-4 "
                style={{
                    background: "#FCFCFC",
                  borderRadius: "10px",
                  minHeight: "100vh",
                  maxHeight: "100vh",
                }}
              >
                

                {/* <div style={{background:'#CECECE' ,width:'100%' ,height:'70vh'}}>
               <div className='d-flex align-items-center justify-content-center '>
                <img src={emptycart} alt="" className='img-fluid w-50' style={{marginTop:'5rem'}} />
               </div>
              </div> */}
                <div style={{ overflowY: "auto", height: "40vh" }}>
                  <div
                    className="product   w-100 "
                    style={{
                      background: "#FCFCFC",
                     
                    }}
                  >
                    <div
                      className="content-header d-flex align-items-center mt-2 gap-2"
                      style={{ padding: "0px 20px" }}
                    >
                      <div>
                        <IoCloseCircle
                          style={{ fontSize: "20px", color: "#CECECE" }}
                        />
                      </div>
                      <div className="mt-2">
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                          دجاج مشوي بالمشروم
                        </p>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between  w-100 "
                      style={{ padding: "0px 20px" }}
                    >
                      <div
                        className="price mt-3 "
                        style={{ padding: "0px 20px" }}
                      >
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
                          EGP 165
                        </p>
                      </div>
                      <div className="quantity d-flex align-items-cetner gap-4">
                        <button
                          onClick={() => handelebuttonminus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCircleMinus
                            className="btn-cart-minus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product   w-100 "
                    style={{
                      background: "#FCFCFC",
                     
                    }}
                  >
                    <div
                      className="content-header d-flex align-items-center mt-2 gap-2"
                      style={{ padding: "0px 20px" }}
                    >
                      <div>
                        <IoCloseCircle
                          style={{ fontSize: "20px", color: "#CECECE" }}
                        />
                      </div>
                      <div className="mt-2">
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                          دجاج مشوي بالمشروم
                        </p>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between  w-100 "
                      style={{ padding: "0px 20px" }}
                    >
                      <div
                        className="price mt-3 "
                        style={{ padding: "0px 20px" }}
                      >
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
                          EGP 165
                        </p>
                      </div>
                      <div className="quantity d-flex align-items-cetner gap-4">
                        <button
                          onClick={() => handelebuttonminus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCircleMinus
                            className="btn-cart-minus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product   w-100 "
                    style={{
                      background: "#FCFCFC",
                     
                    }}
                  >
                    <div
                      className="content-header d-flex align-items-center mt-2 gap-2"
                      style={{ padding: "0px 20px" }}
                    >
                      <div>
                        <IoCloseCircle
                          style={{ fontSize: "20px", color: "#CECECE" }}
                        />
                      </div>
                      <div className="mt-2">
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                          دجاج مشوي بالمشروم
                        </p>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between  w-100 "
                      style={{ padding: "0px 20px" }}
                    >
                      <div
                        className="price mt-3 "
                        style={{ padding: "0px 20px" }}
                      >
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
                          EGP 165
                        </p>
                      </div>
                      <div className="quantity d-flex align-items-cetner gap-4">
                        <button
                          onClick={() => handelebuttonminus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCircleMinus
                            className="btn-cart-minus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product   w-100 "
                    style={{
                      background: "#FCFCFC",
                     
                    }}
                  >
                    <div
                      className="content-header d-flex align-items-center mt-2 gap-2"
                      style={{ padding: "0px 20px" }}
                    >
                      <div>
                        <IoCloseCircle
                          style={{ fontSize: "20px", color: "#CECECE" }}
                        />
                      </div>
                      <div className="mt-2">
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                          دجاج مشوي بالمشروم
                        </p>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between  w-100 "
                      style={{ padding: "0px 20px" }}
                    >
                      <div
                        className="price mt-3 "
                        style={{ padding: "0px 20px" }}
                      >
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
                          EGP 165
                        </p>
                      </div>
                      <div className="quantity d-flex align-items-cetner gap-4">
                        <button
                          onClick={() => handelebuttonminus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCircleMinus
                            className="btn-cart-minus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="total mt-4 " style={{ padding: "10px 30px" }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px" }}>المجموع</p>
                    <span style={{ fontWeight: "600", fontSize: "20px" }}>
                      EGP 495
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px" }}>التوصيل</p>
                    <span style={{ fontWeight: "600", fontSize: "15px" }}>
                    أدخل العنوان
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px" }}>الخدمة</p>
                    <span style={{ fontWeight: "600", fontSize: "20px" }}>
                      EGP 20
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px", color: "#418E4A" }}>
                      الحساب الكلي
                    </p>
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "20px",
                        color: "#418E4A",
                      }}
                    >
                      EGP 525
                    </span>
                  </div>
                 
                </div>

                <div></div>
              </div> 

              <div  >
              {/* <!-- Modal  check to solt-->  */}
<div class="modal fade" id="exampleModalcheck" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg d-lg-none">
    <div class="modal-content">
      <div class="modal-header  justify-content-end" style={{border:'none'}}>
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div
                className=" mt-4 "
                style={{
                    background: "#FCFCFC",
                  borderRadius: "10px",
                  minHeight: "100vh",
                  maxHeight: "100vh",
                }}
              >
                

                {/* <div style={{background:'#CECECE' ,width:'100%' ,height:'70vh'}}>
               <div className='d-flex align-items-center justify-content-center '>
                <img src={emptycart} alt="" className='img-fluid w-50' style={{marginTop:'5rem'}} />
               </div>
              </div> */}
                <div style={{ overflowY: "auto", height: "40vh" }}>
                  <div
                    className="product   w-100 "
                    style={{
                      background: "#FCFCFC",
                     
                    }}
                  >
                    <div
                      className="content-header d-flex align-items-center mt-2 gap-2"
                      style={{ padding: "0px 20px" }}
                    >
                      <div>
                        <IoCloseCircle
                          style={{ fontSize: "20px", color: "#CECECE" }}
                        />
                      </div>
                      <div className="mt-2">
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                          دجاج مشوي بالمشروم
                        </p>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between  w-100 "
                      style={{ padding: "0px 20px" }}
                    >
                      <div
                        className="price mt-3 "
                        style={{ padding: "0px 20px" }}
                      >
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
                          EGP 165
                        </p>
                      </div>
                      <div className="quantity d-flex align-items-cetner gap-4">
                        <button
                          onClick={() => handelebuttonminus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCircleMinus
                            className="btn-cart-minus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product   w-100 "
                    style={{
                      background: "#FCFCFC",
                     
                    }}
                  >
                    <div
                      className="content-header d-flex align-items-center mt-2 gap-2"
                      style={{ padding: "0px 20px" }}
                    >
                      <div>
                        <IoCloseCircle
                          style={{ fontSize: "20px", color: "#CECECE" }}
                        />
                      </div>
                      <div className="mt-2">
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                          دجاج مشوي بالمشروم
                        </p>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between  w-100 "
                      style={{ padding: "0px 20px" }}
                    >
                      <div
                        className="price mt-3 "
                        style={{ padding: "0px 20px" }}
                      >
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
                          EGP 165
                        </p>
                      </div>
                      <div className="quantity d-flex align-items-cetner gap-4">
                        <button
                          onClick={() => handelebuttonminus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCircleMinus
                            className="btn-cart-minus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product   w-100 "
                    style={{
                      background: "#FCFCFC",
                     
                    }}
                  >
                    <div
                      className="content-header d-flex align-items-center mt-2 gap-2"
                      style={{ padding: "0px 20px" }}
                    >
                      <div>
                        <IoCloseCircle
                          style={{ fontSize: "20px", color: "#CECECE" }}
                        />
                      </div>
                      <div className="mt-2">
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                          دجاج مشوي بالمشروم
                        </p>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between  w-100 "
                      style={{ padding: "0px 20px" }}
                    >
                      <div
                        className="price mt-3 "
                        style={{ padding: "0px 20px" }}
                      >
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
                          EGP 165
                        </p>
                      </div>
                      <div className="quantity d-flex align-items-cetner gap-4">
                        <button
                          onClick={() => handelebuttonminus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCircleMinus
                            className="btn-cart-minus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product   w-100 "
                    style={{
                      background: "#FCFCFC",
                     
                    }}
                  >
                    <div
                      className="content-header d-flex align-items-center mt-2 gap-2"
                      style={{ padding: "0px 20px" }}
                    >
                      <div>
                        <IoCloseCircle
                          style={{ fontSize: "20px", color: "#CECECE" }}
                        />
                      </div>
                      <div className="mt-2">
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
                          دجاج مشوي بالمشروم
                        </p>
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between  w-100 "
                      style={{ padding: "0px 20px" }}
                    >
                      <div
                        className="price mt-3 "
                        style={{ padding: "0px 20px" }}
                      >
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
                          EGP 165
                        </p>
                      </div>
                      <div className="quantity d-flex align-items-cetner gap-4">
                        <button
                          onClick={() => handelebuttonminus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCircleMinus
                            className="btn-cart-minus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="total mt-4 " style={{ padding: "10px 30px" }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px" }}>المجموع</p>
                    <span style={{ fontWeight: "600", fontSize: "20px" }}>
                      EGP 495
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px" }}>التوصيل</p>
                    <span style={{ fontWeight: "600", fontSize: "15px" }}>
                    أدخل العنوان
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px" }}>الخدمة</p>
                    <span style={{ fontWeight: "600", fontSize: "20px" }}>
                      EGP 20
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px", color: "#418E4A" }}>
                      الحساب الكلي
                    </p>
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "20px",
                        color: "#418E4A",
                      }}
                    >
                      EGP 525
                    </span>
                  </div>
                 
                </div>

                <div></div>
              </div> 
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

export default OrderComplete
