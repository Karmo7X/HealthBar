import React, { useState } from 'react'
import {FaRegEye , FaRegEyeSlash } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Register = () => {
    

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

  return (
    <div className='Register' style={{ marginTop: "7rem", minHeight: "100vh" }}>
      <div className="container-fluid">
        <div className="register_sec">
        <form
              action=""
              className=" form d-flex align-items-center  flex-column  justify-content-center   top-50  "
            >
              <h2 className="fw-bold mt-4"> إنشاء حساب </h2>
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
                      الاسم كامل{" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
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
                  
                  
                </div>
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
                      type="tel"
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
                      رقم الهاتف{" "}
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
                <Link 
                       to='/login'
                        variant="outline-success btn"
                        className='text-decoration-none text-center'
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
                        إنشاء حساب جديد 
                        

                      </Link>
                </div>
                <div className="d-flex align-items-center  justify-content-center mt-4 ">
                  
                  <div className='d-flex align-items-center '>
                    <span>
                    لدي حساب بالفعل ؟
                    </span>
                    <Link to='/login' className='text-decoration-none fw-bold' style={{color:"#6DC177"}}>  تسجيل الدخول  </Link>
                  </div>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register