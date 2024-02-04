import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";

import {
  IoSearchOutline,
  IoCloseCircleSharp,
  IoCloseCircle,
  IoBag,
} from "react-icons/io5";

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

import emptycart from "../../assets/icons/empty-cart.png";
import meat from '../../assets/icons/Meat.png'
import gluten from '../../assets/icons/gluten.png'
import brazil_Nut from '../../assets/icons/Brazil_Nut.png'
import product from "../../assets/product1.png";
import product2 from "../../assets/product2.jpg";


import { Link } from "react-router-dom";
import { render } from "react-dom";
const Dishes = () => {
    const prodcutdata = [
        {
          id: 1,
          title: "دجاج مشوي بالمشروم",
          desc: " مكرونة، ثوم و صوص طماطم حارة",
          price: "EGP 165",
          calries: "615 سعر حراري",
          cover: product,
        },
        {
          id: 2,
          title: "دجاج مشوي بالمشروم",
          desc: " مكرونة، ثوم و صوص طماطم حارة ",
          price: "EGP 165",
          calries: "615 سعر حراري",
          cover: product,
        },
        {
          id: 3,
          title: "دجاج مشوي بالمشروم",
          desc: "مكرونة، ثوم و صوص طماطم حارة ",
          price: "EGP 165",
          calries: "615 سعر حراري",
          cover: product,
        },
        {
          id: 4,
          title: "دجاج مشوي بالمشروم",
          desc: " مكرونة، ثوم و صوص طماطم حارة ",
          price: "EGP 165",
          calries: "615 سعر حراري",
          cover: product,
        },
        {
          id: 5,
          title: "دجاج مشوي بالمشروم",
          desc: " مكرونة، ثوم و صوص طماطم حارة ",
          price: "EGP 165",
          calries: "615 سعر حراري",
          cover: product,
        },
        {
          id: 6,
          title: "دجاج مشوي بالمشروم",
          desc: " مكرونة، ثوم و صوص طماطم حارة ",
          price: "EGP 165",
          calries: "615 سعر حراري",
          cover: product,
        },
        {
          id: 7,
          title: "دجاج مشوي بالمشروم",
          desc: " مكرونة، ثوم و صوص طماطم حارة ",
          price: "EGP 165",
          calries: "615 سعر حراري",
          cover: product,
        },
        {
          id: 8,
          title: "دجاج مشوي بالمشروم",
          desc: " مكرونة، ثوم و صوص طماطم حارة ",
          price: "EGP 165",
          calries: " 615 سعر حراري ",
          cover: product,
        },
      ];
      const rerenderfood = [
        {
          id: 1,
          title: "بروتين",
          
          cover: meat,
        },
        {
          id: 2,
          title: " كرب ",
        
          cover: gluten,
        },
        {
          id: 3,
          title: "دهون  ",
          
          cover: brazil_Nut,
        },
      ];
      const [expanded, setExpanded] = useState(0);
      // animation categories 
      const handleExpandClick = (index) => {
        
        if (expanded === index) {
            // Clicking on an already expanded item, collapse it
            setExpanded(null);
          } else {
            // Clicking on a different item, expand it
            setExpanded(index);
          }
      };
      console.log(expanded)
     
      const [counter, setCounter] = useState(1);

  
  const handelebuttonplus = () => setCounter(counter + 1);
  const handelebuttonminus = () => setCounter(counter - 1);
  
  return (
    <>
      <div style={{ marginTop: "7rem", minHeight: "100vh" }}>
        <div className="container-fluid">
          <div className="filter_sec ">
            <div className="row align-items-center ">
            <div className="col-lg-10 col-md-8 col-sm-8">
            <div className="mt-2 d-flex align-items-center gap-2">
                 
                   
                      <Button
                        variant="outline-success btn-filter"
                        style={{
                            padding: "10px 40px",
                          fontWeight: "500",
                          border: "1px solid #CECECE",
                          borderRadius: "40px",

                          color: "#383838",
                        }}
                      >
                        قائمة الفطار
                      </Button>
                   
                      <Button
                        variant="outline-success btn-filter"
                        style={{
                            padding: "10px 40px",
                          fontWeight: "500",
                          border: "1px solid #CECECE",
                          borderRadius: "40px",

                          color: "#383838",
                        }}
                      >
                        قائمة الغداء
                      </Button>
                    
                      <Button
                        variant="outline-success btn-filter"
                        style={{
                          padding: "10px 40px",
                          fontWeight: "500",
                          border: "1px solid #CECECE",
                          borderRadius: "40px",

                          color: "#383838",
                        }}
                      >
                        قائمة العشاء
                      </Button>
                   
                    
                
                   
                 
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 mt-2">
              <Button
                        variant="outline-success btn-filter"
                        style={{
                            padding: "10px 30px",
                          fontWeight: "500",
                          border: "1px solid #CECECE",
                          borderRadius: "40px",

                          color: "#383838",
                        }}
                      >
                        + سلطتك الخاصة
                      </Button>
              </div>
              
            </div>
          </div>
          <hr style={{ marginTop: "30px" }} />
          {/* filter sidebar */}
          <div className="row">
            <div
              className="fliter-mobile w-100 d-flex align-items-center justify-content-end  "
              style={{ display: "none" }}
            >
              <div className="d-flex align-items-center   gap-2" >
                
                <button
                  type="button"
                  style={{
                    padding: "7px 10px ",
                    fontWeight: "500",
                    border: "none",
                    borderRadius: "10px",
                    background:
                      " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                    color: "#FFF",
                    display: "none"
                  }}
                  class="filter-btn-mobile "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <IoBag style={{ fontSize: "25px" }} />
                </button>
              </div>
             
              <div className="cart_mobile">
                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header" style={{ border: "none" }}>
                        <button
                          type="button"
                          style={{
                            border: "2px solid #CECECE",
                            color: "#CECECE",
                            borderRadius: "50%",
                          }}
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                      <div
                  class="accordion accordion-flush cart_side_sec mt-4"
                  id="accordionFlushExample"
                >
             
                  <div class="accordion-item" style={{borderRadius:'10px' ,border:'1px solid #FCFCFC'}}>
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        style={{
                          fontSize: "20px",
                        //   background: "#FCFCFC",
                          boxShadow: "none",
                          fontWeight: "500",
                          padding: "13px 20px",
                          
                        }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapseOne${`index`}`}
                        aria-expanded="true"
                        aria-controls={`flush-collapseOne${`index`}`}
                      >
                       <div className="header-cart d-flex align-items-center justify-content-between ">
                  <h5 > وجبة الغداء </h5>
                  {/* <div>
                  <div className="quantity d-flex align-items-center gap-3 mx-4">
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
                  </div> */}
                </div>
                      </button>
                    </h2>
                    <div
                      id={`flush-collapseOne${`index`}`}
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        class="accordion-body p-0"
                        
                      >
                        <div style={{ overflowY: "auto", height: "33vh" ,width:'100%' }}>
                  <div
                    className="product   w-100 "
                    style={{
                      background: "#FCFCFC",
                      border: "0.5px solid #CECECE",
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
                      <div className="quantity d-flex align-items-center gap-4">
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
                      border: "0.5px solid #CECECE",
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
                      border: "0.5px solid #CECECE",
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
                      border: "0.5px solid #CECECE",
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

                <hr className=""/>
                <div className="total mt-4 " style={{ padding: "10px 30px" }}>
                 
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                    <p style={{ fontSize: "20px",marginTop:'15px' }}>
                    المجموع
                    </p> 
                    </div>
                   <div>
                   <span
                      style={{
                        fontWeight: "600",
                        fontSize: "20px",
                        
                      }}
                    >
                      EGP 525
                    </span>
                   </div>
                    
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-4 mb-3">
                    <Link
                      to='/ordercomplete'
                      className='text-decoration-none '
                      variant="outline-success btn"
                      style={{
                        padding: "10px 70px",
                        fontWeight: "500",
                        border: "none",
                        borderRadius: "20px",
                        background:
                          " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                        color: "#FFF",
                      }}
                    >
                      إكمال الطلب
                    </Link>
                  </div>
                </div>
                      </div>
                    </div>
                  </div>
                 
              
                </div>

                        {/* <div style={{background:'#CECECE' ,width:'100%' ,height:'70vh'}}>
               <div className='d-flex align-items-center justify-content-center '>
                <img src={emptycart} alt="" className='img-fluid w-50' style={{marginTop:'5rem'}} />
               </div>
              </div> */}
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="d-flex align-items-center mt-4 w-100">
       <div style={{width:'100%'}}>
        {rerenderfood.map(({id, title,cover} ,index)=>{
        
        return(<>
        
        <div className='kindfoods mt-2'key={index} onClick={()=>handleExpandClick(index)} style={{background:expanded === index ?"#6DC177":'#FFF' , width: expanded === index ? "100%" :'80%',transition:'0.4s ease-out', filter:'drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3))' ,borderRadius:"100px 0px 0px 100px" ,padding:'5px 10px'}} data-aos="">
          <div className="d-flex align-items-center justify-content-between gap-5   " style={{padding:' 5px 10px'}}>
            <div>
              <span className='text-center' style={{color:expanded === index ?'#fff':'#4E4D4D' ,fontSize:'20px' ,fontWeight:'bold'}}>  {title}  </span>   
            </div>
  
           <div className="d-flex align-items-center justify-content-center  "  style={{width:'60px',height:'60px', background:'#F5F5F5' ,borderRadius:"50%"}}>
          <img src={cover} alt="" className='img-fluid' style={{width:"70%"}}/>
         </div>
      
          </div>
         </div>
         {/* <div className="kindfoods_mobile">
         <div className="d-flex align-items-center justify-content-center  " onClick={()=>handleExpandClick(index)}  style={{position:'absolute' ,transform: `rotate(calc(var(${index}) * ${360 / rerenderfood.length}deg) translateY(120px))`, background:expanded === index ?"#6DC177":'#F5F5F5', width:'60px',height:'60px' ,borderRadius:"50%"}}>
          <img src={cover} alt="" className='img-fluid' style={{width:"70%"}}/>
         </div>


         </div> */}
        </>)
          
        })}
      
      
       <div></div>
       <div></div>
       </div>
      </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="mt-4"
                style={{
                  height: "100vh",
                  maxHeight: "100vh",
                  overflowY: "auto",
                }}
              >
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
             
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        style={{
                          fontSize: "20px",
                          background: "#FCFCFC",
                          boxShadow: "none",
                          fontWeight: "500",
                          padding: "25px 10px",
                        }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="true"
                        aria-controls="flush-collapseOne"
                      >
                       دجاج
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        class="accordion-body"
                        style={{ maxHeight: "70vh", overflowY: "auto" }}
                      >
                        {prodcutdata.map(
                          ({ id, title, cover, desc, price, calries } ,index) => {
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
                                      {/* <span>{calries}</span> */}
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                     <input type="number" className="form-control  " placeholder="40 جرام" style={{background:"#FCFCFC", width:'35%'}}/>
                                    <input type="number" className="form-control  "  placeholder={calries} style={{background:"#FCFCFC" ,width:'35%'}}/>
                                    </div>
                                    <div className="d-flex align-items-center gap-1 product_price  " >
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
                                      <div>
                                        <button
                                          style={{
                                            border: "none",
                                            background: "none",
                                          }}
                                        >
                                          <CiCirclePlus
                                            className="btn-cart-plus"
                                            data-bs-toggle="modal" data-bs-target={`#productModal${index}`}
                                            style={{
                                              fontSize: "35px",
                                              color: "#4E4D4D",
                                            }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- Modal product --> */}
<div class="modal fade" id={`productModal${index}`}  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{background:'#FCFCFC'}}>
        <h1 class="modal-title fs-5" id="exampleModalLabel">تفاصيل الوجبة</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="d-flex align-item-center gap-2 mt-3 mb-3 "  key={id}>
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
                                    
                                    <div className=" row d-flex align-items-center justify-content-between w-100">
                                       <div className="product_content col-lg-9 col-sm-12 col-md-12">
                                      <h5>{title}</h5>
                                      <p>{desc}</p>
                                      <span>{calries}</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center col-lg-3 col-sm-12 col-md-12 ">
                                    <div className="d-flex align-items-center flex-lg-column left-product-details gap-2 ">
                                     <div>
                                     <div className="quantity d-flex align-items-cetner gap-4">
                        <button
                          onClick={() => handelebuttonminus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCircleMinus
                            className="btn-cart-minus"
                            style={{ fontSize: "30px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "30px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "30px", color: "#6DC177" }}
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
                                   
                                  </div>
                                  
      </div>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" style={{background:'#FCFCFC'}}>
      <button class="accordion-button" style={{
                          fontSize: "20px",
                          background: "#FCFCFC",
                          boxShadow: "none",
                          fontWeight: "500",
                          padding: "25px 10px",
                        }}type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls="collapseOne">
      الإضافات
      </button>
    </h2>
    <div id={`collapseOne${index}`} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{maxHeight:"20vh",overflowY:'auto'}}>
      <div className="d-flex align-items-center justify-content-between row ">
      <div class="form-check col-sm-12 col-lg-8"> 
       
  <input class="form-check-input" style={{float:"none" ,marginLeft:"10px"}} type="checkbox" value="" id="flexCheckDefault"/>
<label class="form-check-label" for="flexCheckDefault">
  مشروم ، ( 9 سعر حراري )
  </label>
</div>
<div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-end">
  <span className="fw-bold">EGP 11</span>
</div>
       
      </div>
      <div className="d-flex align-items-center justify-content-between row ">
      <div class="form-check col-sm-12 col-lg-8">
  <input class="form-check-input" style={{float:"none" ,marginLeft:"10px"}} type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
  30 جرام دجاج مشوي ، (100 سعر حراري )
  </label>
</div>
<div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-end">
  <span className="fw-bold">EGP 60</span>
</div>

      </div>
       
      
      </div>
    </div>
  </div>
</div>
  
<div className="d-flex align-items-center justify-content-center mt-4 mb-3">
                    <Button
                      variant="outline-success btn"
                      style={{
                        padding: "10px 70px",
                        fontWeight: "500",
                        border: "none",
                        borderRadius: "20px",
                        background:
                          " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                        color: "#FFF",
                      }}
                    >
                     أضف إلي سلة المشتريات
                    </Button>
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
                    </div>
                  </div>
                 
              
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
            <div
                  class="accordion accordion-flush cart_side_sec mt-4"
                  id="accordionFlushExample"
                >
             
                  <div class="accordion-item" style={{borderRadius:'10px' ,border:'1px solid #FCFCFC'}}>
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        style={{
                          fontSize: "20px",
                        //   background: "#FCFCFC",
                          boxShadow: "none",
                          fontWeight: "500",
                          padding: "13px 20px",
                          
                        }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapseOne${`index`}`}
                        aria-expanded="true"
                        aria-controls={`flush-collapseOne${`index`}`}
                      >
                       <div className="header-cart d-flex align-items-center justify-content-between ">
                  <h5 > وجبة الغداء </h5>
                  {/* <div>
                  <div className="quantity d-flex align-items-center gap-3 mx-4">
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
                  </div> */}
                </div>
                      </button>
                    </h2>
                    <div
                      id={`flush-collapseOne${`index`}`}
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        class="accordion-body p-0"
                        
                      >
                        <div style={{ overflowY: "auto", height: "33vh" ,width:'100%' }}>
                  <div
                    className="product   w-100 "
                    style={{
                      background: "#FCFCFC",
                      border: "0.5px solid #CECECE",
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
                      <div className="quantity d-flex align-items-center gap-4">
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
                      border: "0.5px solid #CECECE",
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
                      border: "0.5px solid #CECECE",
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
                      border: "0.5px solid #CECECE",
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

                <hr className=""/>
                <div className="total mt-4 " style={{ padding: "10px 30px" }}>
                 
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                    <p style={{ fontSize: "20px",marginTop:'15px' }}>
                    المجموع
                    </p> 
                    </div>
                   <div>
                   <span
                      style={{
                        fontWeight: "600",
                        fontSize: "20px",
                        
                      }}
                    >
                      EGP 525
                    </span>
                   </div>
                    
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-4 mb-3">
                    <Link
                      to='/ordercomplete'
                      className='text-decoration-none '
                      variant="outline-success btn"
                      style={{
                        padding: "10px 70px",
                        fontWeight: "500",
                        border: "none",
                        borderRadius: "20px",
                        background:
                          " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                        color: "#FFF",
                      }}
                    >
                      إكمال الطلب
                    </Link>
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

export default Dishes
