import React, { useEffect, useState, useRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ForgetPassApi, LoginApi, OTP, Reset_password } from "../../APi/slices/Auth/Authslice";

const Login = () => {
  // Login api
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [restpassword, setrestpassword] = useState("");
  const [restconfirmpassword, setrestconfirmpassword] = useState("");
  const [forgetmodal, setforgetmodal] = useState(false);
  const [otpmodal, setotpmodal] = useState(false);
  const [reseptpassmodal, setreseptpassmodal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.status);
  const [errors, setErrors] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  // Regex patterns for email and password validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  console.log(errors);
  // otp functionalty
  const [otp, setOtp] = useState(["", "", "", ""]); // otp state

  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

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
    for (let i = 0; i < otp.length; i++) {
      if (otp[i] === "" && otpInputRefs[i].current) {
        otpInputRefs[i].current.focus();
        break;
      }
    }
  }, [otp]);

  const handleloginbtn = async (e) => {
    e.preventDefault();
    // Validate email and password
    //  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    //   setErrors('Invalid email or password format.');
    //   return;
    // }

    let datalogin = {
      email: email,
      password: password,
    };

    console.log(datalogin);
    await dispatch(LoginApi(datalogin)).then((result) => {
      console.log(result)
      if (result.payload?.status === true ) {
         navigate('/')
      }else{
      
        setErrors(result.payload?.errors);
      }

      // if (result.payload?.status === true) {
      //   navigate('/'); // Navigate to the desired route
      // }
    });

    if (rememberMe) {
      // If "Remember Me" is checked, store the email and password in localStorage
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    }
  };
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true); // You can set the "Remember Me" checkbox as checked.
    }
  }, []);

  const handleforgetbtn = async () => {
    let forgetdata = {
      email: email,
    };

    await dispatch(ForgetPassApi(forgetdata)).then((result) => {
      console.log(result);
       if (result.payload?.status === true){

           setotpmodal(true)
          setforgetmodal(false)
      }
    });
  };
  const handleOtpbtn = async (e) => {
    e.preventDefault();

    let dataOTP = {
      email: email,
      otp: otp.join(""),
    };

    console.log(dataOTP);
    await dispatch(OTP(dataOTP)).then((result) => {
      if (result.payload.status === true) {
      
        setreseptpassmodal(true);
        setotpmodal(false)
      }else{
      
        setErrors(result.payload?.errors);
      }

      
    });
  };
  const handlerestbtn=async(e)=>{
    e.preventDefault();
   let values={
     'email':email,
     'otp':otp.join(""),
     'password':restpassword,
     'confirmation_password': restconfirmpassword,
  
  
    }
    await dispatch(Reset_password(values)).then((res)=>{
    console.log(res)
     if(res.payload?.status === true){
      setreseptpassmodal(false)
    
    
    }else{
      
      setErrors(result.payload?.errors);
    }
    
    
    
    
    })
  
  
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
  };

  return (
    <>
      <div className="Login" style={{ marginTop: "7rem", minHeight: "100vh" }}>
        <div className="container-fluid">
          <div className="login_sec  ">
            <div
              a
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
                      type="email"
                      value={email}
                      name="email"
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
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors(null);
                      }}
                    />

                    <label for="floatingInputEmail1"> البريد الإلكتروني </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  {errors ? (
                    <>
                      <span className="text-danger text-center d-flex align-items-center    justify-content-center">
                        {errors?.email}
                      </span>
                    </>
                  ) : null}
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
                      value={password}
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
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors(null);
                      }}
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
                  {errors ? (
                    <>
                      <span className="text-danger text-center d-flex align-items-center    justify-content-center">
                        {errors?.password}
                      </span>
                    </>
                  ) : null}
                </div>
                <div className="d-flex align-items-center  justify-content-between mt-4 ">
                  <div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        style={{ float: "none", marginLeft: "10px" }}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        style={{ color: "#383838" }}
                        for="flexCheckDefault"
                      >
                        تذكرنى
                      </label>
                    </div>
                  </div>
                  <div>
                    <Link
                      className="text-decoration-none fw-bold"
                       onClick={()=>setforgetmodal(true)}
                      style={{ color: "#6DC177" }}
                    >
                      نسيت كلمة المرور ؟{" "}
                    </Link>
                  </div>
                </div>
                <div className="d-flex align-items-center  mt-5 justify-content-center w-100">
                  <Button
                    variant="outline-success btn"
                    onClick={handleloginbtn}
                    style={{
                      padding: "17px 50px",
                      fontWeight: "500",
                      border: "none",
                      borderRadius: "40px",
                      background:
                        " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                      color: "#FFF",
                      width: "75%",
                    }}
                  >
                    تسجيل الدخول
                  </Button>
                </div>
                <div className="d-flex align-items-center  justify-content-center mt-4 ">
                  <div className="d-flex align-items-center ">
                    <span>ليس لدي حساب ؟</span>
                    <Link
                      to="/Register"
                      className="text-decoration-none fw-bold"
                      style={{ color: "#6DC177" }}
                    >
                      {" "}
                      إنشاء حساب جديد{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Forget password Modal */}
            
            <Modal size="lg" show={forgetmodal} onHide={()=>setforgetmodal(false)}>
        <Modal.Header style={{ border: "none" }} closeButton>
         
        </Modal.Header>
        <Modal.Body>
        <div className="w-100 d-flex align-items-center justify-content-center ">
                      <div
                        className="forget_pass  d-flex align-items-center text-center justify-content-center  flex-column "
                        style={{ width: "75%" }}
                      >
                        <h2 className="fw-bold mt-3">
                          {" "}
                          إعادة تعيين كلمة المرور{" "}
                        </h2>
                        <p className="mt-3" style={{ fontSize: "20px" }}>
                          الرجاء إدخال اسم المستخدم أو عنوان البريد الإلكتروني
                          ستتلقى رمز التحقق عبر البريد الإلكتروني
                        </p>
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
                            onChange={(e) => setEmail(e.target.value)}
                          />

                          <label for="floatingInputEmail1">
                            {" "}
                            البريد الإلكتروني{" "}
                          </label>
                          {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="d-flex align-items-center  mt-5 justify-content-center w-100">
                          <Button
                            variant="outline-success btn"
                            onClick={handleforgetbtn}
                          
                            style={{
                              padding: "17px 50px",
                              fontWeight: "500",
                              border: "none",
                              borderRadius: "40px",
                              background:
                                " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                              color: "#FFF",
                              width: "75%",
                            }}
                          >
                            إعادة التعيين
                          </Button>
                        </div>
                        <div className="d-flex align-items-center  justify-content-center mt-4 ">
                          <div className="d-flex align-items-center ">
                            <span>ليس لدي حساب ؟</span>
                            <Link
                              to="/Register"
                              className="text-decoration-none fw-bold"
                              style={{ color: "#6DC177" }}
                            >
                              {" "}
                              إنشاء حساب جديد{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

        </Modal.Body>
       
      </Modal>

            {/* OTP Modal */}
           
<Modal  size="lg" show={otpmodal} onHide={()=>setModal(false)}>
        <Modal.Header style={{ border: "none" }} closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <div className="w-100 d-flex align-items-center justify-content-center ">
                      <div
                        className="forget_pass  d-flex align-items-center text-center justify-content-center  flex-column "
                        style={{ width: "75%" }}
                      >
                        <h2 className="fw-bold mt-3"> إدخال رمز التحقق </h2>
                        <p className="mt-3" style={{ fontSize: "20px" }}>
                          الرجاء إدخال رمز التحقق المرسل علي البريد اللكتروني
                        </p>
                        <div
                          className="otp_fields d-flex align-items-center justify-content-center"
                          style={{ gap: "20px", direction: "ltr" }}
                        >
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              type="text"
                              className="form-control otpinputs "
                              name="otp"
                              maxLength="1"
                              value={digit}
                              onChange={(e) => handleOtpChange(e, index)}
                              style={{
                                border: "1px solid #CECECE",
                                color: "#CECECE",
                                borderRadius: "0px",
                                width: "55px",
                                height: "55px",
                                fontSize: "30px",
                                textAlign: "center",
                                direction: "ltr",
                              }}
                              ref={otpInputRefs[index]}
                            />
                          ))}
                        </div>
                        <div className="d-flex align-items-center  mt-5 justify-content-center w-100">
                          <Button
                            variant="outline-success btn"
                            onClick={handleOtpbtn}
                         
                            style={{
                              padding: "17px 50px",
                              fontWeight: "500",
                              border: "none",
                              borderRadius: "40px",
                              background:
                                " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                              color: "#FFF",
                              width: "75%",
                            }}
                          >
                            تأكيد
                          </Button>
                        </div>
                        <div className="d-flex align-items-center  justify-content-center mt-4 ">
                          <div className="d-flex align-items-center ">
                            <span>ليس لدي حساب ؟</span>
                            <Link
                              to="/Register"
                              className="text-decoration-none fw-bold"
                              style={{ color: "#6DC177" }}
                            >
                              {" "}
                              إنشاء حساب جديد{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
        </Modal.Body>
      
      </Modal>
            {/* change password Modal */}
        

            <Modal size="lg" show={reseptpassmodal} onHide={()=>setreseptpassmodal(false)}>
        <Modal.Header style={{ border: "none" }} closeButton>
          
        </Modal.Header>
        <Modal.Body>

        <div className="w-100 d-flex align-items-center justify-content-center ">
                      <div
                        className="forget_pass  d-flex align-items-center text-center justify-content-center  flex-column "
                        style={{ width: "75%" }}
                      >
                        <h2 className="fw-bold mt-3">
                          {" "}
                          إعادة تعيين كلمة المرور{" "}
                        </h2>

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
                              onChange={(e)=>setrestpassword(e.target.value)}
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
                            <label for="floatingInputEmail1 mb-2">
                              {" "}
                              كلمة المرور
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
                              onChange={(e)=>setrestconfirmpassword(e.target.value)}
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
                            <label for="floatingInputEmail1 mb-2">
                              {" "}
                              تأكيد كلمة المرور{" "}
                            </label>
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                          </div>
                        </div>
                        <div className="d-flex align-items-center  mt-5 justify-content-center w-100">
                          <Button
                            variant="outline-success btn"
                         
                            onClick={handlerestbtn}
                            style={{
                              padding: "17px 50px",
                              fontWeight: "500",
                              border: "none",
                              borderRadius: "40px",
                              background:
                                " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                              color: "#FFF",
                              width: "75%",
                            }}
                          >
                            إعادة التعيين
                          </Button>
                        </div>
                      </div>
                    </div>


        </Modal.Body>
       
      </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
