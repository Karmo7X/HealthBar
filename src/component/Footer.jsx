import React from 'react'
import logo2 from '../assets/logo2.png'
import { Link } from 'react-router-dom'
import { IoIosPhonePortrait } from "react-icons/io";
import { TfiYoutube } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='mt-5'>
      
        <div style={{background:'#248748' ,padding:'10px 30px'}}>
          <div className="container-fluid">
     <div className="row align-items-center justify-content-between mt-4 mb-5 ">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div>
          <img src={logo2} alt="" />
          <p className='mt-5' style={{color:'#fff' }}>مطعمنا الصحي يعتبر وجهة مثالية لعشاق اللياقة البدنية
والأشخاص الذين يهتمون بتناول وجبات صحية. نقدم تجربة فريدة
تمكنك من صنع وجبتك الخاصة باختيار المكونات التي تحبها. يتم
اختيار الوجبات بعناية وفقًا لمعايير التغذية الصحية، مما يجعلها
مثالية للأفراد النشيطين والرياضيين.</p>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className=' d-flex flex-column align-items-center social_sec'>
           <Link className='text-decoration-none mt-3' style={{color:"#fff"}}>طبقك الخاص</Link>
        <Link className='text-decoration-none mt-3' style={{color:"#fff"}}> قائمة الطعام </Link>
        <Link className='text-decoration-none mt-3 mb-3' style={{color:"#fff"}}><IoIosPhonePortrait />  0100100100101   </Link>
           <div className="d-flex align-items-center gap-4 mt-3">
       <TfiYoutube style={{fontSize:"20px" ,color:'#fff'}}/>
       <FaXTwitter style={{fontSize:"20px" ,color:'#fff'}}/>
       <FaFacebookF style={{fontSize:"20px" ,color:'#fff'}}/>
       </div>
       </div>
    
      </div>
     </div>
     </div></div>
     <div className='mt-3 mb-3'>
      <p className='text-center'>  جميع الحقوق محفوظه  2023&copy;</p>
     </div>
      
     
    </div>
  )
}

export default Footer