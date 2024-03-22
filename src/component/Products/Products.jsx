import React, { useEffect, useRef, useState } from 'react'
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
import { useDispatch } from 'react-redux';
import { GetMaindish } from '../../APi/slices/Cart/Foodslice';


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
 


 // handle api for main dishes
 const [dishes ,setdishes]=useState([])
 console.log(dishes)
 const dispacth=useDispatch()
 useEffect(()=>{
   dispacth(GetMaindish()).then((res)=>{
   if(res.payload?.status === true){
      setdishes(res.payload?.meals)
   
   
   
   }
   
   
   
   })


},[])
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
    
    
      {dishes.map((dishe,index)=>{
          return(
            <>
              <SwiperSlide className='SwiperSlide mb-5 mt-5' key={index} >
           <div className="container">
            
           <div class="card" style={{width: "22rem"}}>
  <img src={product} class="card-img-top" alt="..."/>
  <div class="card-body">
    <div>
       <h5 class="card-title" >{dishe?.name}</h5>
    <p class="card-text">{dishe?.description.slice(0, 50)}</p>
   <span>{dishe?.calories}</span> سعر حراري 
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

      <p className='fw-bold mt-3' style={{fontSize:'23px'}}> {dishe?.price} EGP</p>                
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
