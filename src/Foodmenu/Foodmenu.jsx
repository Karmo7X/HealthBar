import React, { useState,useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoSearchOutline ,IoCloseCircleSharp ,IoCloseCircle } from "react-icons/io5";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaArrowLeftLong ,FaArrowRightLong} from "react-icons/fa6";
import { CiCirclePlus ,CiCircleMinus } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import emptycart from './../assets/icons/empty-cart.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Foodmenu = () => {
    const [slideBegOrNot, handleSlideByState] = useState({
        isFirst: true,
        isLast: false,
     });
     const SlideRef = useRef();
    
     const handleNext = () => {
        SlideRef.current.swiper.slideNext();
     };
    
     const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
     };
     const { isLast, isFirst } = slideBegOrNot;
     const onSlideChange = (swiper) => {
        handleSlideByState({
           isFirst: swiper.isBeginning,
           isLast: swiper.isEnd,
        });
     };

    const [seacrh,setSearch]=useState('')
    const [counter,setCounter]=useState(1)
    console.log(seacrh)
    const handeldeletebutton=()=>setSearch('');
    const handelebuttonplus=()=>setCounter(counter + 1);
    const handelebuttonminus=()=>setCounter(counter - 1)
  return (
    <div style={{ marginTop: "7rem", minHeight: "100vh" }}>
      <div className="container-fluid">
        <div className="filter_sec ">
          <div className="row align-items-center ">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="search mt-5 ">
                <Form className="d-flex">
                  <div
                    className="d-flex w-100"
                    style={{
                      border: "1px solid #CECECE",
                      borderRadius: "40px ",
                      padding: "5px 10px",
                    }}
                  >
                    <Form.Control
                      type="text"
                      placeholder="بحث"
                      className="me-2"
                      aria-label="Search"
                      value={seacrh}
                      style={{
                        boxShadow: "none",
                        outline: "none",
                        border: "none",
                      }}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    {/* <div className="d-flex align-items-center justify-content-center  ">
            <IoCloseCircleSharp  style={{fontSize:'20px',color:"#CECECE"}}/>
            </div> */}
                    <div
                      className={`${
                        seacrh ? "d-flex" : "d-none"
                      } align-items-center justify-content-center`}
                      onClick={() => handeldeletebutton()}
                    >
                      <IoCloseCircleSharp
                        style={{ fontSize: "20px", color: "#CECECE" }}
                      />
                    </div>

                    <div
                      className="mx-2"
                      style={{ borderRight: "1px solid #CECECE" }}
                    ></div>
                    <div className="d-flex align-items-center justify-content-center mx-1 btn-search">
                      <Button
                        className="fs-5 "
                        style={{
                          background: "transparent",
                          color: "#CECECE",
                          border: "none",
                          fontSize: "20px",
                        }}
                      >
                        <IoSearchOutline />
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="mt-5 d-flex align-items-center gap-1">
                <Button
                  className={`swiper-button_next text-center d-flex align-items-center  justify-content-center ${
                    isLast ? "disabled" : ""
                  }`}
                  style={{
                    border: "none",
                    borderRadius: "50px",
                    padding: "15px ",
                    fontSize: "20px",
                    background:
                      " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                    color: "#FFF",
                  }}
                  onClick={() => handleNext()}
                >
                  <FaArrowRightLong />
                </Button>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={3}
                  navigation={false}
                  ref={SlideRef}
                  onSlideChange={onSlideChange}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    390: {
                      slidesPerView: 2,
                    },
                    502: {
                      slidesPerView: 3,
                    },
                    802: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    {" "}
                    <Button
                      variant="outline-success btn-filter"
                      style={{
                        padding: "12px 50px",
                        fontWeight: "500",
                        border: "1px solid #CECECE",
                        borderRadius: "40px",

                        color: "#383838",
                      }}
                    >
                      قائمة الفطار
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Button
                      variant="outline-success btn-filter"
                      style={{
                        padding: "12px 50px",
                        fontWeight: "500",
                        border: "1px solid #CECECE",
                        borderRadius: "40px",

                        color: "#383838",
                      }}
                    >
                      قائمة الغداء
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Button
                      variant="outline-success btn-filter"
                      style={{
                        padding: "12px 50px",
                        fontWeight: "500",
                        border: "1px solid #CECECE",
                        borderRadius: "40px",

                        color: "#383838",
                      }}
                    >
                      قائمة العشاء
                    </Button>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <Button
                      variant="outline-success btn-filter"
                      style={{
                        padding: "12px 50px",
                        fontWeight: "500",
                        border: "1px solid #CECECE",
                        borderRadius: "40px",

                        color: "#383838",
                      }}
                    >
                      قائمة العشاء
                    </Button>
                  </SwiperSlide>
                </Swiper>
                <Button
                  className={`swiper-button_prev text-center d-flex align-items-center  justify-content-center ${
                    isFirst ? "disabled" : ""
                  }`}
                  style={{
                    border: "none",
                    borderRadius: "50px",
                    padding: "15px ",
                    fontSize: "20px",
                    background:
                      " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                    color: "#FFF",
                  }}
                  onClick={() => handlePrev()}
                >
                  <FaArrowLeftLong />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: "40px" }} />
        {/* filter sidebar */}
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div
              className="filer_side_sec mt-4 "
              style={{ border: "1px solid #CECECE", borderRadius: "10px",minHeight:'80vh'}}
            >
              <div className="header-filter">
                <h5 className="m-4">الأقسام</h5>
              </div>
              <hr />
              <div style={{overflowY:"scroll" ,height:'70vh'}}>
                <div className="mx-4  " >
                <div className="mb-2">
                   <span className='filter-category'  style={{color:"#4E4D4D"}}>الأكثر مبيعاً</span>
                </div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>أطباق المعكرونة</span></div>
                <div className="mb-2"> <span className='filter-category'  style={{color:"#4E4D4D"}}>أطباق الدجاج</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>أطباق اللحم</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>المأكولات البحرية</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>أطباق النباتيين</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>السندويشات</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>أطباق المعكرونة</span></div>
                <div className="mb-2"> <span className='filter-category'  style={{color:"#4E4D4D"}}>أطباق الدجاج</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>أطباق اللحم</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>المأكولات البحرية</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>أطباق النباتيين</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>السندويشات</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>أطباق المعكرونة</span></div>
                <div className="mb-2"> <span className='filter-category'  style={{color:"#4E4D4D"}}>أطباق الدجاج</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>أطباق اللحم</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>المأكولات البحرية</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>أطباق النباتيين</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>السندويشات</span></div>
                <div className="mb-2"><span  className='filter-category' style={{color:"#4E4D4D"}}>أطباق المعكرونة</span></div>
                <div className="mb-2"> <span className='filter-category'  style={{color:"#4E4D4D"}}>أطباق الدجاج</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>أطباق اللحم</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>المأكولات البحرية</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>أطباق النباتيين</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>السندويشات</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>أطباق المعكرونة</span></div>
                <div className="mb-2  "> <span style={{color:"#4E4D4D"}}>أطباق الدجاج</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>أطباق اللحم</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>المأكولات البحرية</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>أطباق النباتيين</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>السندويشات</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>أطباق المعكرونة</span></div>
                <div className="mb-2  "> <span style={{color:"#4E4D4D"}}>أطباق الدجاج</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>أطباق اللحم</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>المأكولات البحرية</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>أطباق النباتيين</span></div>
                <div className="mb-2  "><span style={{color:"#4E4D4D"}}>السندويشات</span></div>
                
                
                
                
              </div>
              </div>
              
              <div></div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12"></div>
          <div className="col-lg-4 col-md-3 col-sm-12">
          <div
              className="cart_side_sec mt-4 "
              style={{ border: "1px solid #CECECE", borderRadius: "10px",  minHeight:'80vh'}}
            >
              <div className="header-cart">
                <h5 className="m-4">سلة المشتريات</h5>
              </div>
              
              {/* <div style={{background:'#CECECE' ,width:'100%' ,height:'70vh'}}>
               <div className='d-flex align-items-center justify-content-center '>
                <img src={emptycart} alt="" className='img-fluid w-50' style={{marginTop:'5rem'}} />
               </div>
              </div> */}
              <div style={{overflowY:"scroll" ,height:'33vh'}}>
                <div className="product   w-100 "  style={{background:'#FCFCFC' ,border:"0.5px solid #CECECE"}}>
                 <div className="content-header d-flex align-items-center mt-2 gap-2" style={{padding:"0px 20px"}}>

                  <div>
                      <IoCloseCircle style={{fontSize:"20px" ,color:"#CECECE"}}/>
                  </div>
               <div className='mt-2'>
                 <p style={{fontSize:"20px",fontWeight:"500"}}>دجاج مشوي بالمشروم</p>
               </div>
                
                 </div>
                 <div className="d-flex align-items-center justify-content-between  w-100 " style={{padding:"0px 20px"}}>
                  <div className="price mt-3 " style={{padding:"0px 20px"}}>
                    <p style={{fontWeight:'600' ,fontSize:"20px"}}>EGP 165</p>
                  </div>
                  <div className="quantity d-flex align-items-cetner gap-4">
                    
                    <button onClick={()=>handelebuttonminus()} style={{border:'none',background:'none'}}>
                    <CiCircleMinus className='btn-cart-minus' style={{fontSize:"25px" ,color:"#6DC177"}}/>
                    </button>
                    <div className="fw-bold">
                      <span style={{fontSize:"25px"}}>{counter}</span>
                    </div>
                    <button onClick={()=>handelebuttonplus()} style={{border:'none',background:'none'}}>
                    <CiCirclePlus className='btn-cart-plus' style={{fontSize:"25px" ,color:"#6DC177"}}/>
                    </button>
                  </div>
                
                 </div>
                
                
                
                
              </div>
              <div className="product   w-100 "  style={{background:'#FCFCFC' ,border:"0.5px solid #CECECE"}}>
                 <div className="content-header d-flex align-items-center mt-2 gap-2" style={{padding:"0px 20px"}}>

                  <div>
                      <IoCloseCircle style={{fontSize:"20px" ,color:"#CECECE"}}/>
                  </div>
               <div className='mt-2'>
                 <p style={{fontSize:"20px" ,fontWeight:"500"}}>دجاج مشوي بالمشروم</p>
               </div>
                
                 </div>
                 <div className="d-flex align-items-center justify-content-between  w-100 " style={{padding:"0px 20px"}}>
                  <div className="price mt-3 " style={{padding:"0px 20px"}}>
                    <p style={{fontWeight:'600' ,fontSize:"20px"}}>EGP 165</p>
                  </div>
                  <div className="quantity d-flex align-items-cetner gap-4">
                    
                    <button onClick={()=>handelebuttonminus()} style={{border:'none',background:'none'}}>
                    <CiCircleMinus className='btn-cart-minus' style={{fontSize:"25px" ,color:"#6DC177"}}/>
                    </button>
                    <div className="fw-bold">
                      <span style={{fontSize:"25px"}}>{counter}</span>
                    </div>
                    <button onClick={()=>handelebuttonplus()} style={{border:'none',background:'none'}}>
                    <CiCirclePlus className='btn-cart-plus' style={{fontSize:"25px" ,color:"#6DC177"}}/>
                    </button>
                  </div>
                
                 </div>
                
                
                
                
              </div>
              <div className="product   w-100 "  style={{background:'#FCFCFC' ,border:"0.5px solid #CECECE"}}>
                 <div className="content-header d-flex align-items-center mt-2 gap-2" style={{padding:"0px 20px"}}>

                  <div>
                      <IoCloseCircle style={{fontSize:"20px" ,color:"#CECECE"}}/>
                  </div>
               <div className='mt-2'>
                 <p style={{fontSize:"20px",fontWeight:"500"}}>دجاج مشوي بالمشروم</p>
               </div>
                
                 </div>
                 <div className="d-flex align-items-center justify-content-between  w-100 " style={{padding:"0px 20px"}}>
                  <div className="price mt-3 " style={{padding:"0px 20px"}}>
                    <p style={{fontWeight:'600' ,fontSize:"20px"}}>EGP 165</p>
                  </div>
                  <div className="quantity d-flex align-items-cetner gap-4">
                    
                    <button onClick={()=>handelebuttonminus()} style={{border:'none',background:'none'}}>
                    <CiCircleMinus className='btn-cart-minus' style={{fontSize:"25px" ,color:"#6DC177"}}/>
                    </button>
                    <div className="fw-bold">
                      <span style={{fontSize:"25px"}}>{counter}</span>
                    </div>
                    <button onClick={()=>handelebuttonplus()} style={{border:'none',background:'none'}}>
                    <CiCirclePlus className='btn-cart-plus' style={{fontSize:"25px" ,color:"#6DC177"}}/>
                    </button>
                  </div>
                
                 </div>
                
                
                
                
              </div>
              <div className="product   w-100 "  style={{background:'#FCFCFC' ,border:"0.5px solid #CECECE"}}>
                 <div className="content-header d-flex align-items-center mt-2 gap-2" style={{padding:"0px 20px"}}>

                  <div>
                      <IoCloseCircle style={{fontSize:"20px" ,color:"#CECECE"}}/>
                  </div>
               <div className='mt-2'>
                 <p style={{fontSize:"20px",fontWeight:"500"}}>دجاج مشوي بالمشروم</p>
               </div>
                
                 </div>
                 <div className="d-flex align-items-center justify-content-between  w-100 " style={{padding:"0px 20px"}}>
                  <div className="price mt-3 " style={{padding:"0px 20px"}}>
                    <p style={{fontWeight:'600' ,fontSize:"20px"}}>EGP 165</p>
                  </div>
                  <div className="quantity d-flex align-items-cetner gap-4">
                    
                    <button onClick={()=>handelebuttonminus()} style={{border:'none',background:'none'}}>
                    <CiCircleMinus className='btn-cart-minus' style={{fontSize:"25px" ,color:"#6DC177"}}/>
                    </button>
                    <div className="fw-bold">
                      <span style={{fontSize:"25px"}}>{counter}</span>
                    </div>
                    <button onClick={()=>handelebuttonplus()} style={{border:'none',background:'none'}}>
                    <CiCirclePlus className='btn-cart-plus' style={{fontSize:"25px" ,color:"#6DC177"}}/>
                    </button>
                  </div>
                
                 </div>
                
                
                
                
              </div>
             
              </div>
              <div className="total mt-4 " style={{ padding: "10px 30px"}}>
  <div className='d-flex align-items-center justify-content-between'>
    <p style={{ fontSize: "20px" }}>المجموع</p>
    <span style={{ fontWeight: '600', fontSize: "20px" }}>EGP 495</span>
  </div>
  <div className='d-flex align-items-center justify-content-between'>
    <p style={{ fontSize: "20px" }}>التوصيل</p>
    <span style={{ fontWeight: '600', fontSize: "20px" }}>EGP 10</span>
  </div>
  <div className='d-flex align-items-center justify-content-between'>
    <p style={{ fontSize: "20px" }}>الخدمة</p>
    <span style={{ fontWeight: '600', fontSize: "20px" }}>EGP 20</span>
  </div>
  <div className='d-flex align-items-center justify-content-between'>
    <p style={{ fontSize: "20px", color: '#418E4A' }}>الحساب الكلي</p>
    <span style={{ fontWeight: '600', fontSize: "20px", color: '#418E4A' }}>EGP 525</span>
  </div>
  <div className='d-flex align-items-center justify-content-center mt-4 mb-3'>
  <Button
                        variant="outline-success btn"
                        style={{
                          padding: "10px 70px",
                          fontWeight: "500",
                          border: "none",
                          borderRadius: "20px",
                          background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                          color: "#FFF",
                        }}
                      >
                        إكمال الطلب

                      </Button>
  </div>
</div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foodmenu
