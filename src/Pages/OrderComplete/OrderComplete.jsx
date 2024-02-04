import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import {
    
    IoLocationOutline ,
    IoCloseCircle,
  
  } from "react-icons/io5";
  import payment1 from '../../assets/icons/visa.png'
  import payment2 from '../../assets/icons/master-card.png'
  import payment3 from '../../assets/icons/Button.png'
  import paymentgate from '../../assets/icons/payment-gate.png'
  import animation from '../../assets/animation.gif'
  import { FaCheckToSlot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import product2 from "../../assets/product2.jpg";
const OrderComplete = () => {
  const prodcutdata2 = [
    {
      id: 1,
      title:  "معكرونه ثوم مع طماطم حارة",
      desc: " مكرونة، ثوم و صوص طماطم حارة",
      price: "EGP 165",
      calries: "615 سعر حراري",
      cover: 2,
      cover: product2,
    },
    {
      id: 2,
      title: "معكرونه ثوم مع طماطم حارة",
      desc: " مكرونة، ثوم و صوص طماطم حارة ",
      price: "EGP 165",
      calries: "615 سعر حراري",
      cover: product2,
    },
    {
      id: 3,
      title: "معكرونه ثوم مع طماطم حارة",
      desc: "مكرونة، ثوم و صوص طماطم حارة ",
      price: "EGP 165",
      calries: "615 سعر حراري",
      cover: product2,
    },
    {
      id: 4,
      title: "معكرونه ثوم مع طماطم حارة",
      desc: " مكرونة، ثوم و صوص طماطم حارة ",
      price: "EGP 165",
      calries: "615 سعر حراري",
      cover: product2,
    },
    {
      id: 5,
      title: "معكرونه ثوم مع طماطم حارة",
      desc: " مكرونة، ثوم و صوص طماطم حارة ",
      price: "EGP 165",
      calries: "615 سعر حراري",
      cover: product2,
    },
    {
      id: 6,
      title: "معكرونه ثوم مع طماطم حارة",
      desc: " مكرونة، ثوم و صوص طماطم حارة ",
      price: "EGP 165",
      calries: "615 سعر حراري",
      cover: product2,
    },
    {
      id: 7,
      title: "معكرونه ثوم مع طماطم حارة",
      desc: " مكرونة، ثوم و صوص طماطم حارة ",
      price: "EGP 165",
      calries: "615 سعر حراري",
      cover: product2,
    },
    {
      id: 8,
      title: "معكرونه ثوم مع طماطم حارة",
      desc: " مكرونة، ثوم و صوص طماطم حارة ",
      price: "EGP 165",
      calries: " 615 سعر حراري ",
      cover: product2,
    },
  ];
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
        
       
        <div className="delivery_sec mt-5 mb-5">
        <h5>الدفع بواسطة</h5>
        <p className='mt-2'>جميع المعاملات آمنة ومشفرة</p>
        <div className='row align-items-center mt-3 mb-5'>
        <div className="col-lg-12 col-md-12 col-sm-12 mb-3 ">
            <div style={{border:"1px solid #CECECE",borderRadius:"10px"}}>
                 <div class=" d-flex  align-items-center justify-content-between w-100 " style={{padding:' 15px 40px'}}>
                <div class="form-check d-flex  ">
  <input class="form-check-input" style={{float:"none" ,marginLeft:"10px" }} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label  fw-bold"   style={{color:'#CECECE'}} for="flexCheckChecked">
  إستخدام المحفظة
    </label>
    
  </div>
  
  </div>  
  
            </div>  
            </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div style={{border:"1px solid #CECECE",borderRadius:"10px"}}>
                 <div class="mb-3 d-flex  align-items-center justify-content-between w-100 " style={{padding:' 40px'}}>
                <div class="form-check d-flex  ">
  <input class="form-check-input" style={{float:"none" ,marginLeft:"10px" }} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label w-75 fw-bold "   style={{color:'#CECECE'}} for="flexCheckChecked">
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

        <div className="col-lg-12 col-md-12 col-sm-12">
        <label htmlFor="" className='mb-3'> ملاحظة التوصيل</label>
                <div class="form-floating  mb-3"> 
               
                   <input type="email" class="form-control form-control-lg p-lg-3"style={{boxShadow:'none',outline:"none",border:"1px solid #CECECE",borderRadius:"40px",color:'#CECECE'}} placeholder="name@example.com"   id="floatingInputEmail1" />
             
    <label for="floatingInputEmail1" > أضف أي ملاحظة ( اختياري )</label>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>  
            </div>
            
              <div className='mt-4 mb-4'>
               <h3 className=' mb-4'>سلة المشتريات</h3>
              <div
                className="order_side_sec  "
                style={{
                    // background: "#FCFCFC",
                  borderRadius: "10px",
                  minHeight: "100vh",
                  maxHeight: "100vh",
                  border:'1px solid #CECECE',
                  padding:'10px 20px'
                }}
              >
                

                {/* <div style={{background:'#CECECE' ,width:'100%' ,height:'70vh'}}>
               <div className='d-flex align-items-center justify-content-center '>
                <img src={emptycart} alt="" className='img-fluid w-50' style={{marginTop:'5rem'}} />
               </div>
              </div> */}
              <div className='w-100' style={{background:"#FCFCFC"}}>
           <div class="alert alert-danger" role="alert" style={{background:"#FCFCFC" ,color:'#B80E0E' ,border:'none'}}>
           التوصيل في خلال 1-2 ساعة
            </div>
           </div>
                <div style={{ overflowY: "auto", height: "40vh"  }}>
                {prodcutdata2.map(
                          ({ id, title, cover, desc, price, calries }) => {
                            return (
                              <>
                                <div
                                  className="prodcut_card mt-2 mb-2"
                                  key={id}
                                >
                                  <div className="d-flex align-item-center gap-2 mt-3 mb-3 ">
                                    <div className="product_image">
                                      <img
                                        src={cover}
                                        alt=""
                                        className="img-fluid"
                                        style={{
                                          maxWidth: "110px",
                                          maxHeight: "110px",
                                          borderRadius: "12px",
                                        }}
                                      />
                                    </div>
                                    <div className="product_content">
                                      <h5>{title}</h5>
                                      <p>{desc}</p>
                                      <span>{calries}</span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-end mx-4">
                                    <div className="d-flex align-items-center gap-1 ">
                                    <div
                      className="d-flex align-items-center justify-content-between  "
                      style={{ padding: "0px 20px" }}
                    >
                    
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
                                      <div>
                                        <p
                                          className="mt-3"
                                          style={{
                                            fontWeight: "600",
                                            fontSize: "20px",
                                          }}
                                        >
                                          {price}
                                        </p>
                                      </div>
                                   
                                    </div>
                                  </div>
                                </div>
                                <hr style={{ background: "#CECECE" }} />
                              </>
                            );
                          }
                        )}
                 
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
                    <p style={{ fontSize: "20px", color: "#FF6915" }}>
                    المبلع الإجمالي
                    </p>
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "20px",
                        color: "#FF6915",
                      }}
                    >
                      EGP 525
                    </span>
                  </div>
                 
                </div>

                <div></div>
              </div> 
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
              
                <div className="total mt-4 " style={{ padding: "10px 30px" }}>
                  <div className="d-flex align-items-center  justify-content-between">
                    <p style={{ fontSize: "20px" }}>يتم التوصيل الي</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                   
                    <span style={{ fontWeight: "500", fontSize: "20px" }}>
                    <IoLocationOutline style={{color:'#6DC177'}}/> عماره    
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3 mb-4 ">
                   
                   <span style={{ fontWeight: "500", fontSize: "15px" }}>
                   شارع 59 - مصر الجديدة - القاهرة 
                   </span>
                 </div>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px", color: "#418E4A" }}>
                    المبلع الإجمالي
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
              
              <div className="total mt-4 " style={{ padding: "10px 30px" }}>
                  <div className="d-flex align-items-center  justify-content-between">
                    <p style={{ fontSize: "20px" }}>يتم التوصيل الي</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                   
                    <span style={{ fontWeight: "500", fontSize: "20px" }}>
                    <IoLocationOutline style={{color:'#6DC177'}}/> عماره    
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3 mb-4 ">
                   
                   <span style={{ fontWeight: "500", fontSize: "15px" }}>
                   شارع 59 - مصر الجديدة - القاهرة 
                   </span>
                 </div>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px", color: "#418E4A" }}>
                    المبلع الإجمالي
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
