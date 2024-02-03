import React, { useEffect, useState ,useRef } from 'react'
import {FaRegEye , FaRegEyeSlash } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Login = () => {

    //  password Visible 
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
     setPasswordVisible(!passwordVisible);
   };

   //  password confirm Visible 
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const toggleShowConfirmPassword = () => {
setShowConfirmPassword(!showConfirmPassword);
}

   // otp functionalty 
   const [otp, setOtp] = useState(['', '', '', '']); // otp state

   const otpInputRefs = [
     useRef(null),
     useRef(null),
     useRef(null),
     useRef(null),
     
   ];
   
   // handle otp change function
   const handleOtpChange = (e, index) => {
     const updatedOtp = [...otp];
     updatedOtp[index] = e.target.value;
     setOtp(updatedOtp);
   
     if (e.target.value && index < otp.length - 1) {
       otpInputRefs[index + 1].current.focus();
     } else if (index > 0) {
       otpInputRefs[index - 1].current.focus();
     }
   };
   
   useEffect(() => {
     for (let i = 0; i < otp.length ; i++) {
       if (otp[i] === '' && otpInputRefs[i].current) {
         otpInputRefs[i].current.focus();
         break;
       }
     }
   }, [otp]);
  return (
    <>
      <div className="Login" style={{ marginTop: "7rem", minHeight: "100vh" }}>
        <div className="container-fluid">
          <div className="login_sec  ">
            <form
              action=""
              className=" form d-flex align-items-center  flex-column  justify-content-center   top-50  "
            >
              <h2 className="fw-bold mt-4"> تسجيل دخول</h2>
              <div className="row mt-5 w-50  align-items-center ">
                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                  <div
                    class="form-floating  mb-3"
                    style={{
                      border: "1px solid #CECECE",
                      borderRadius: "40px",
                      color: "#CECECE",
                      padding: "0px 20px",
                    }}
                  >
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      style={{
                        boxShadow: "none",
                        outline: "none",
                        border: "none",
                        borderRadius: "40px",
                        color: "#CECECE",
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                      اسم المستخدم أو البريد الإلكتروني{" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                  <div
                    class="form-floating d-flex align-items-center justify-content-between  mb-3"
                    style={{
                      border: "1px solid #CECECE",
                      borderRadius: "40px",
                      padding: "0px 20px",
                    }}
                  >
                    <input
                     
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      class="form-control form-control-lg "
                      style={{
                        boxShadow: "none",
                        outline: "none",
                        border: "none",
                        borderRadius: "40px",
                        color: "#CECECE",
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />
                    <span
                      className="password-toggle"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <FaRegEye style={{ fontSize: "26px" }} />
                      ) : (
                        <FaRegEyeSlash style={{ fontSize: "26px" }} />
                      )}
                    </span>
                    <label for="floatingInputEmail1 mb-2"> كلمة المرور</label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                <div className="d-flex align-items-center  justify-content-between mt-4 ">
                  <div>
                  <div class="form-check">
  <input class="form-check-input" type="checkbox"  style={{float:"none" ,marginLeft:"10px" }}  value="" id="flexCheckDefault"/>
  <label class="form-check-label" style={{color:'#383838'}} for="flexCheckDefault">
  تذكرنى
  </label>
</div>
                  </div>
                  <div>
                    <Link className='text-decoration-none fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color:"#6DC177"}}>نسيت كلمة المرور ؟ </Link>
                  </div>
                </div>
                <div className='d-flex align-items-center  mt-5 justify-content-center w-100'>
                <Button
                        variant="outline-success btn"
                    
                        style={{
                          padding: "17px 50px",
                          fontWeight: "500",
                          border: "none",
                          borderRadius: "40px",
                          background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                          color: "#FFF",
                          width:'75%'
                        }}
                      >
                        تسجيل الدخول    
                        

                      </Button>
                </div>
                <div className="d-flex align-items-center  justify-content-center mt-4 ">
                  
                  <div className='d-flex align-items-center '>
                    <span>
                    ليس لدي حساب ؟
                    </span>
                    <Link to='/Register' className='text-decoration-none fw-bold' style={{color:"#6DC177"}}>  إنشاء حساب جديد  </Link>
                  </div>
                </div>
              </div>
            </form>
            {/* Forget password Modal */}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header" style={{border:'none'}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className='w-100 d-flex align-items-center justify-content-center '>
        <div className='forget_pass  d-flex align-items-center text-center justify-content-center  flex-column ' style={{width:'75%'}}>
        <h2 className="fw-bold mt-3"> إعادة تعيين كلمة المرور </h2>
        <p className='mt-3' style={{fontSize:"20px"}}>الرجاء إدخال اسم المستخدم أو عنوان البريد الإلكتروني
ستتلقى رمز التحقق عبر البريد الإلكتروني</p>
<div
                    class="form-floating w-100 mt-3 mb-3"
                    style={{
                      border: "1px solid #CECECE",
                      borderRadius: "40px",
                      color: "#CECECE",
                      padding: "0px 20px",
                    }}
                  >
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      style={{
                        boxShadow: "none",
                        outline: "none",
                        border: "none",
                        borderRadius: "40px",
                        color: "#CECECE",
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                         البريد الإلكتروني{" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  <div className='d-flex align-items-center  mt-5 justify-content-center w-100'>
                <Button
                        variant="outline-success btn"
                        data-bs-toggle="modal" data-bs-target="#exampleModal2"
                        style={{
                          padding: "17px 50px",
                          fontWeight: "500",
                          border: "none",
                          borderRadius: "40px",
                          background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                          color: "#FFF",
                          width:'75%'
                        }}
                      >
                        إعادة التعيين
                        

                      </Button>
                </div>
                  <div className="d-flex align-items-center  justify-content-center mt-4 ">
                  
                  <div className='d-flex align-items-center '>
                    <span>
                    ليس لدي حساب ؟
                    </span>
                    <Link to='/Register' className='text-decoration-none fw-bold' style={{color:"#6DC177"}}>  إنشاء حساب جديد  </Link>
                  </div>
                </div>
        </div>
        </div>
        
      </div>
     
    </div>
  </div>
</div>
            
            {/* OTP Modal */}
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header" style={{border:'none'}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className='w-100 d-flex align-items-center justify-content-center '>
        <div className='forget_pass  d-flex align-items-center text-center justify-content-center  flex-column ' style={{width:'75%'}}>
        <h2 className="fw-bold mt-3">  إدخال رمز التحقق </h2>
        <p className='mt-3' style={{fontSize:"20px"}}>
        الرجاء إدخال رمز التحقق المرسل علي البريد اللكتروني 
        </p>
        <div className="otp_fields d-flex align-items-center justify-content-center" style={{gap:'20px' ,direction:'ltr'}}>
              {otp.map((digit, index) => (
    <input
      key={index}
      type="text"
      className="form-control otpinputs "
      name="otp"
      
      maxLength="1"
      value={digit}
      onChange={(e) => handleOtpChange(e, index)}
      style={{ border: '1px solid #CECECE',color:'#CECECE', borderRadius: '0px', width: '55px', height: '55px', fontSize: '30px', textAlign: 'center', direction: 'ltr' }}
      ref={otpInputRefs[index]}
    />
  ))}
  </div>
                  <div className='d-flex align-items-center  mt-5 justify-content-center w-100'>
                <Button
                        variant="outline-success btn"
                        data-bs-toggle="modal" data-bs-target="#exampleModal3"
                        style={{
                          padding: "17px 50px",
                          fontWeight: "500",
                          border: "none",
                          borderRadius: "40px",
                          background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                          color: "#FFF",
                          width:'75%'
                        }}
                      >
                        تأكيد
                        

                      </Button>
                </div>
                  <div className="d-flex align-items-center  justify-content-center mt-4 ">
                  
                  <div className='d-flex align-items-center '>
                    <span>
                    ليس لدي حساب ؟
                    </span>
                    <Link to='/Register' className='text-decoration-none fw-bold' style={{color:"#6DC177"}}>  إنشاء حساب جديد  </Link>
                  </div>
                </div>
        </div>
        </div>
        
      </div>
     
    </div>
  </div>
</div>

             {/* change password Modal */}
             <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header" style={{border:'none'}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className='w-100 d-flex align-items-center justify-content-center '>
        <div className='forget_pass  d-flex align-items-center text-center justify-content-center  flex-column ' style={{width:'75%'}}>
        <h2 className="fw-bold mt-3"> إعادة تعيين كلمة المرور </h2>
        
        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                  <div
                    class="form-floating d-flex align-items-center justify-content-between  mb-3"
                    style={{
                      border: "1px solid #CECECE",
                      borderRadius: "40px",
                      padding: "0px 20px",
                    }}
                  >
                    <input
                     
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      class="form-control form-control-lg "
                      style={{
                        boxShadow: "none",
                        outline: "none",
                        border: "none",
                        borderRadius: "40px",
                        color: "#CECECE",
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />
                    <span
                      className="password-toggle"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <FaRegEye style={{ fontSize: "26px" }} />
                      ) : (
                        <FaRegEyeSlash style={{ fontSize: "26px" }} />
                      )}
                    </span>
                    <label for="floatingInputEmail1 mb-2"> كلمة المرور</label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                  <div
                    class="form-floating d-flex align-items-center justify-content-between  mb-3"
                    style={{
                      border: "1px solid #CECECE",
                      borderRadius: "40px",
                      padding: "0px 20px",
                    }}
                  >
                    <input
                     
                      name="password_confirm"
                      type={showConfirmPassword ? "text" : "password"}
                      class="form-control form-control-lg "
                      style={{
                        boxShadow: "none",
                        outline: "none",
                        border: "none",
                        borderRadius: "40px",
                        color: "#CECECE",
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />
                    <span
                      className="password-toggle"
                      onClick={toggleShowConfirmPassword}
                    >
                      {showConfirmPassword ? (
                        <FaRegEye style={{ fontSize: "26px" }} />
                      ) : (
                        <FaRegEyeSlash style={{ fontSize: "26px" }} />
                      )}
                    </span>
                    <label for="floatingInputEmail1 mb-2"> تأكيد كلمة المرور </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                  <div className='d-flex align-items-center  mt-5 justify-content-center w-100'>
                <Button
                        variant="outline-success btn"
                        data-bs-toggle="modal" data-bs-target="#exampleModal2"
                        style={{
                          padding: "17px 50px",
                          fontWeight: "500",
                          border: "none",
                          borderRadius: "40px",
                          background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                          color: "#FFF",
                          width:'75%'
                        }}
                      >
                        إعادة التعيين
                        

                      </Button>
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
  );
}

export default Login
