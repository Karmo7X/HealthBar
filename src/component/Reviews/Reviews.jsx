import React, { useRef, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y ,EffectFade } from 'swiper/modules';
import Button from 'react-bootstrap/Button';
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import userundefine from "../../assets/icons/userundefine.png"
import { FaArrowLeftLong ,FaArrowRightLong} from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import "swiper/css/grid";
import 'swiper/swiper-bundle.css';
const reviewsdata=[
    {
        id: 1,
         user: "ياسمين أحمد",
        desc: "تجربة رائعة في هذا المطعم الصحي! الأطباق لذيذة ومُحضّرة بعناية وأقدر جهودهم في تقديم وجبات صحية دون التنازل عن النكهة. أفضل خيار للذين يهتمون بصحتهم ويبحثون عن تجربة تناول طعام مميزة",
        date:'16 ديسمبر 2023',
        cover:userundefine,
      },
      {
        id: 2,
         user: "ياسمين أحمد",
        desc: "تجربة رائعة في هذا المطعم الصحي! الأطباق لذيذة ومُحضّرة بعناية وأقدر جهودهم في تقديم وجبات صحية دون التنازل عن النكهة. أفضل خيار للذين يهتمون بصحتهم ويبحثون عن تجربة تناول طعام مميزة ",
        date:'16 ديسمبر 2023',
        
        cover: userundefine,
      },
      {
        id: 3,
         user: "ياسمين أحمد",
         desc: "تجربة رائعة في هذا المطعم الصحي! الأطباق لذيذة ومُحضّرة بعناية وأقدر جهودهم في تقديم وجبات صحية دون التنازل عن النكهة. أفضل خيار للذين يهتمون بصحتهم ويبحثون عن تجربة تناول طعام مميزة ",
        date:'16 ديسمبر 2023',
        
        cover: userundefine,
      },
      {
        id: 4,
         user: "ياسمين أحمد",
        desc: "تجربة رائعة في هذا المطعم الصحي! الأطباق لذيذة ومُحضّرة بعناية وأقدر جهودهم في تقديم وجبات صحية دون التنازل عن النكهة. أفضل خيار للذين يهتمون بصحتهم ويبحثون عن تجربة تناول طعام مميزة ",
        date:'16 ديسمبر 2023',
        
        cover: userundefine,
      },
      {
        id: 5,
         user: "ياسمين أحمد",
        desc: "تجربة رائعة في هذا المطعم الصحي! الأطباق لذيذة ومُحضّرة بعناية وأقدر جهودهم في تقديم وجبات صحية دون التنازل عن النكهة. أفضل خيار للذين يهتمون بصحتهم ويبحثون عن تجربة تناول طعام مميزة ",
        date:'16 ديسمبر 2023',
        
        cover: userundefine,
      },
      {
        id: 6,
         user: "ياسمين أحمد",
        desc: "تجربة رائعة في هذا المطعم الصحي! الأطباق لذيذة ومُحضّرة بعناية وأقدر جهودهم في تقديم وجبات صحية دون التنازل عن النكهة. أفضل خيار للذين يهتمون بصحتهم ويبحثون عن تجربة تناول طعام مميزة ",
        date:'16 ديسمبر 2023',
        
        cover: userundefine,
      },
      {
        id: 7,
         user: "ياسمين أحمد",
        desc: "تجربة رائعة في هذا المطعم الصحي! الأطباق لذيذة ومُحضّرة بعناية وأقدر جهودهم في تقديم وجبات صحية دون التنازل عن النكهة. أفضل خيار للذين يهتمون بصحتهم ويبحثون عن تجربة تناول طعام مميزة ",
        date:'16 ديسمبر 2023',
        
        cover: userundefine,
      },
      {
        id: 8,
         user: "ياسمين أحمد",
        desc: "تجربة رائعة في هذا المطعم الصحي! الأطباق لذيذة ومُحضّرة بعناية وأقدر جهودهم في تقديم وجبات صحية دون التنازل عن النكهة. أفضل خيار للذين يهتمون بصحتهم ويبحثون عن تجربة تناول طعام مميزة ",
        date:'16 ديسمبر 2023',
        
        cover: userundefine,
      },
]
const Reviews = () => {
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
     const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      return (
        
        
       <>
       <div className='d-flex align-items-center  justify-content-end gap-4'>
        
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
        
        
          {reviewsdata.map(({ user,desc,date,cover},index)=>{
              return(
                <>
                  <SwiperSlide className='SwiperSlide mb-5 mt-5' key={index} >
               <div className="container">
                
               <div class="card reveiws p-2 " style={{width: "30rem"}}>
      <div class="card-body">
        <div className='d-flex align-items-center  gap-2  '>
            <div>
                <img src={cover} alt="" className='img-fluid card-img ' style={{width:"80%"}}  />
            </div>
            <div>
                          <h5 class="card-title reveiws-title" style={{fontSize:"17px"}}>{ user}</h5>
           <span  style={{fontSize:"12px"}}>{date}</span>
           <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
            </div>

       
       
        </div>
    
        <p class="card-text m-3">{desc}</p>
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

export default Reviews
