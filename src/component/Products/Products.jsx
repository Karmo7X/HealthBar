import React, { useRef, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y ,EffectFade } from 'swiper/modules';
import Button from 'react-bootstrap/Button';
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import product from "../../assets/product1.png"
import { FaArrowLeftLong ,FaArrowRightLong} from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import "swiper/css/grid";
import 'swiper/swiper-bundle.css';
const prodcutdata=[
    {
        id: 1,
        title: "دجاج مشوي بالمشروم",
        desc: " دجاج مشوي محشو بصلصة الجرافي والفطر..",
        price:"EGP 165",
        calries:'615 سعر حراري',
        cover:product,
      },
      {
        id: 2,
        title: "دجاج مشوي بالمشروم",
        desc: " دجاج مشوي محشو بصلصة الجرافي والفطر.. ",
        price:"EGP 165",
        calries:'615 سعر حراري',
        cover: product,
      },
      {
        id: 3,
        title: "دجاج مشوي بالمشروم",
        desc: "دجاج مشوي محشو بصلصة الجرافي والفطر.. ",
        price:"EGP 165",
        calries:'615 سعر حراري',
        cover: product,
      },
      {
        id: 4,
        title: "دجاج مشوي بالمشروم",
        desc: " دجاج مشوي محشو بصلصة الجرافي والفطر.. ",
        price:"EGP 165",
        calries:'615 سعر حراري',
        cover: product,
      },
      {
        id: 5,
        title: "دجاج مشوي بالمشروم",
        desc: " دجاج مشوي محشو بصلصة الجرافي والفطر.. ",
        price:"EGP 165",
        calries:'615 سعر حراري',
        cover: product,
      },
      {
        id: 6,
        title: "دجاج مشوي بالمشروم",
        desc: " دجاج مشوي محشو بصلصة الجرافي والفطر.. ",
        price:"EGP 165",
        calries:'615 سعر حراري',
        cover: product,
      },
      {
        id: 7,
        title: "دجاج مشوي بالمشروم",
        desc: " دجاج مشوي محشو بصلصة الجرافي والفطر.. ",
        price:"EGP 165",
        calries:'615 سعر حراري',
        cover: product,
      },
      {
        id: 8,
        title: "دجاج مشوي بالمشروم",
        desc: " دجاج مشوي محشو بصلصة الجرافي والفطر.. ",
        price:"EGP 165",
        calries:'615 سعر حراري',
        cover: product,
      },
]

const Products = () => {
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
 
  return (
    
    
   <>
   <div className='d-flex align-items-center  justify-content-end gap-4 '>
   <Button className={`swiper-button_next text-center d-flex align-items-center  justify-content-center ${isLast ? 'disabled' : ''}`} style={{border:'none',borderRadius:"50px" ,padding:'15px ' ,fontSize:"20px" ,background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)", color: "#FFF"}} onClick={()=>handleNext()}><FaArrowRightLong /></Button>
       
        
       <Button className={`swiper-button_prev text-center d-flex align-items-center  justify-content-center ${isFirst ? 'disabled' : ''}`} style={{border:'none',borderRadius:"50px" ,padding:'15px ' ,fontSize:"20px" ,background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)", color: "#FFF"}} onClick={() => handlePrev()}><FaArrowLeftLong /></Button>
    </div>
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination]}
    spaceBetween={10}
    slidesPerView={3}
    navigation={false}
    pagination={{ clickable: true }}
    ref={SlideRef}
    onSlideChange={onSlideChange}
    
    breakpoints={{
      0: {
         slidesPerView: 1,
      },
      390: {
         slidesPerView: 1,
      },
      502: {
         slidesPerView: 2,
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
    
    
      {prodcutdata.map(({title,desc,calries,price,cover},index)=>{
          return(
            <>
              <SwiperSlide className='SwiperSlide mb-5 mt-5' key={index} >
           <div className="container">
            
           <div class="card" style={{width: "22rem"}}>
  <img src={cover} class="card-img-top" alt="..."/>
  <div class="card-body">
    <div>
       <h5 class="card-title" >{title}</h5>
    <p class="card-text">{desc}</p>
    <span>{calries}</span>
    </div>
   <div className='d-flex align-items-center justify-content-between  mt-4'>
   <Button
                        variant="outline-success add-cart-btn"
                        style={{
                          padding: "10px 50px",
                          fontWeight: "500",
                          border: "1px solid #4E4D4D",
                          borderRadius: "20px",
                          background: "#ffffff",
                          color: "#383838",
                        }}
                      >
                         أضف إلى السلة
                      </Button>

      <p className='fw-bold mt-3' style={{fontSize:'23px'}}>{price}</p>                
   </div>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    
  </div>
</div>
                   
                  
                   
                 
               
                  </div>
              
           
         </SwiperSlide>
            </>
         
      )})}
    
   
  </Swiper>
   </>
    
  )
}

export default Products
