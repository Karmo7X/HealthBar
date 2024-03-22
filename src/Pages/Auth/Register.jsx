import React, { useState } from 'react'
import {FaRegEye , FaRegEyeSlash } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterApi } from '../../APi/slices/Auth/Authslice';

const Register = () => {
    

   // register api 
  //   form state handle

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [errors,setErrors]=useState(null)
  console.log(errors)
  const dispatch =useDispatch()
  const navigate=useNavigate()
  
  

  // handle functionalty
  
 
  const handleregisterbutton = async(e)=>
  {
    e.preventDefault()

    let datauser={
    'name':name,
    'email':email,
    'phone':phone,
    'password':password,
    'confirm_password':confirm_password,
    
    
    
    }
   console.log(datauser)
   
   await dispatch(RegisterApi(datauser)).then((result)=>{
 
      if(result.payload?.status === true){
    
        navigate('/login')
       }else{
      
      
        setErrors(result.payload?.errors)
      }
     })
   

  //  setModalShow(true)


 }
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
        <div
            
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
                      onChange={(e)=>setName(e.target.value)}
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                      الاسم كامل{" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  {errors ? (<>
                   <span className='text-danger'>{errors?.name}</span>
                  </>):null}
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
                      onChange={(e)=>setEmail(e.target.value)}
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                         البريد الإلكتروني{" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  {errors ? (<>
                   <span className='text-danger'>{errors?.email}</span>
                  </>):null}
                  
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
                      
                      name='phone'
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
                      onChange={(e)=>setPhone(e.target.value)}
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                      رقم الهاتف{" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  
                  {errors ? (<>
                   <span className='text-danger'>{errors?.phone}</span>
                  </>):null}
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
                      onChange={(e)=>setPassword(e.target.value)}
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
                  {errors ? (<>
                   <span className='text-danger'>{errors?.password}</span>
                  </>):null}
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
                     
                      name="confirm_password"
                     
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
                      onChange={(e)=>setConfirm_password(e.target.value)}
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
                  {errors ? (<>
                   <span className='text-danger'>{errors?.confirm_password}</span>
                  </>):null}
                </div>
                <div className='d-flex align-items-center  mt-5 justify-content-center w-100'>
                <button 
                       
                        variant="outline-success btn"
                        className='text-decoration-none text-center'
                        onClick={handleregisterbutton}
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
                        

                      </button>
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
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
