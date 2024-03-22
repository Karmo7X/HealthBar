import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

import Offcanvas from 'react-bootstrap/Offcanvas';
import logo2 from '../assets/logo2.png'
import { Link, useNavigate } from 'react-router-dom';
import { IoBagOutline ,  IoSearchOutline,
  IoCloseCircleSharp,
  IoCloseCircle,
  IoBag,} from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Cookies from "js-cookie"
import user from '../assets/icons/userundefine.png'
import { useDispatch } from 'react-redux';
import { LogoutAPi } from '../APi/slices/Auth/Authslice';

const NavBar = () => {
  const [counter, setCounter] = useState(1);
  const handelebuttonplus = () => setCounter(counter + 1);
  const handelebuttonminus = () => setCounter(counter - 1);
  const token =Cookies.get('token')
  const dispatch=useDispatch()
  const navigate =useNavigate()
  const handlelogout=()=>{
  
  dispatch(LogoutAPi()).then((res)=>{
   if(res.payload?.status=== true)
   {  
    navigate('/login')
   

    }  
  
  
  })
  
  
  }
  return (
    <>
    {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="fixed-top mb-3" style={{background:"#6DC177"}}>
          <Container fluid>
            <Navbar.Brand >
              <Link to='/' className='text-decoration-none' ><img src={logo2} alt="" className='img-fluid w-75' /></Link>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
             
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo2} alt="" className='img-fluid' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3" style={{fontWeight:"800" ,color:'#fff'}}>
                  <Nav.Link > 
                  <Link to='Foodmenu' className='text-decoration-none  text-sm-dark text-md-dark links'style={{fontWeight:"800" ,color:'#fff'}} >قائمة الطعام</Link>
                  </Nav.Link>
                  <Nav.Link  style={{ fontWeight: "800" }}>
                      <Link to='your_dish' className='text-decoration-none  text-sm-dark text-md-dark links' style={{fontWeight:"800" ,color:'#fff'}}>طبقك الخاص </Link>

                        
                      </Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <div className='d-flex align-items-center left-nav-btn '>
                
                {token ? (<>
                <div className='nav-cart mx-4 ' style={{color:'#ffffff'}}>
                <div class="btn-group">
<button class=" dropdown-toggle hidden-arrow nav-cart " style={{background:"transparent",color:'#ffffff',boxShadow:'none',border:'none'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
<IoBagOutline className='fs-4' />
</button>
<div class="dropdown-menu">
<div className="header-cart text-center">
                        <h5 className="m-3">سلة المشتريات</h5>
                      </div>

                      {/* <div style={{background:'#CECECE' ,width:'100%' ,height:'70vh'}}>
             <div className='d-flex align-items-center justify-content-center '>
              <img src={emptycart} alt="" className='img-fluid w-50' style={{marginTop:'5rem'}} />
             </div>
            </div> */}
                      <div style={{ overflowY: "scroll", height: "33vh" }}>
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
                              <p
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "500",
                                }}
                              >
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
                              <p
                                style={{
                                  fontWeight: "600",
                                  fontSize: "20px",
                                }}
                              >
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
                                  style={{
                                    fontSize: "25px",
                                    color: "#6DC177",
                                  }}
                                />
                              </button>
                              <div className="fw-bold">
                                <span style={{ fontSize: "25px" }}>
                                  {counter}
                                </span>
                              </div>
                              <button
                                onClick={() => handelebuttonplus()}
                                style={{ border: "none", background: "none" }}
                              >
                                <CiCirclePlus
                                  className="btn-cart-plus"
                                  style={{
                                    fontSize: "25px",
                                    color: "#6DC177",
                                  }}
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
                              <p
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "500",
                                }}
                              >
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
                              <p
                                style={{
                                  fontWeight: "600",
                                  fontSize: "20px",
                                }}
                              >
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
                                  style={{
                                    fontSize: "25px",
                                    color: "#6DC177",
                                  }}
                                />
                              </button>
                              <div className="fw-bold">
                                <span style={{ fontSize: "25px" }}>
                                  {counter}
                                </span>
                              </div>
                              <button
                                onClick={() => handelebuttonplus()}
                                style={{ border: "none", background: "none" }}
                              >
                                <CiCirclePlus
                                  className="btn-cart-plus"
                                  style={{
                                    fontSize: "25px",
                                    color: "#6DC177",
                                  }}
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
                              <p
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "500",
                                }}
                              >
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
                              <p
                                style={{
                                  fontWeight: "600",
                                  fontSize: "20px",
                                }}
                              >
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
                                  style={{
                                    fontSize: "25px",
                                    color: "#6DC177",
                                  }}
                                />
                              </button>
                              <div className="fw-bold">
                                <span style={{ fontSize: "25px" }}>
                                  {counter}
                                </span>
                              </div>
                              <button
                                onClick={() => handelebuttonplus()}
                                style={{ border: "none", background: "none" }}
                              >
                                <CiCirclePlus
                                  className="btn-cart-plus"
                                  style={{
                                    fontSize: "25px",
                                    color: "#6DC177",
                                  }}
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
                              <p
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "500",
                                }}
                              >
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
                              <p
                                style={{
                                  fontWeight: "600",
                                  fontSize: "20px",
                                }}
                              >
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
                                  style={{
                                    fontSize: "25px",
                                    color: "#6DC177",
                                  }}
                                />
                              </button>
                              <div className="fw-bold">
                                <span style={{ fontSize: "25px" }}>
                                  {counter}
                                </span>
                              </div>
                              <button
                                onClick={() => handelebuttonplus()}
                                style={{ border: "none", background: "none" }}
                              >
                                <CiCirclePlus
                                  className="btn-cart-plus"
                                  style={{
                                    fontSize: "25px",
                                    color: "#6DC177",
                                  }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="total mt-4 "
                        style={{ padding: "10px 30px" }}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <p style={{ fontSize: "20px" }}>المجموع</p>
                          <span
                            style={{ fontWeight: "600", fontSize: "20px" }}
                          >
                            EGP 495
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p style={{ fontSize: "20px" }}>التوصيل</p>
                          <span
                            style={{ fontWeight: "600", fontSize: "20px" }}
                          >
                          --
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p style={{ fontSize: "20px" }}>الخدمة</p>
                          <span
                            style={{ fontWeight: "600", fontSize: "20px" }}
                          >
                            EGP 20
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <p style={{ fontSize: "20px", color: "#418E4A" }}>
                            الحساب الكلي
                          </p>
                          <span
                            style={{
                              fontWeight: "600",
                              fontSize: "20px",
                              color: "#418E4A",
                            }}
                          >
                            EGP 525
                          </span>
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
                <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" style={{background:"transparent",border:'none',outline:'none'}}>
        <img src={user} alt=""  className='img-fluid' style={{width:'50px'}}/>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:'auto'}}>
        <Link to='' className='text-decoration-none '>
        <Dropdown.Item  style={{textAlign:'right' ,padding:'10px 40px'}}>الملف الشخصي</Dropdown.Item>
        
        </Link>
        <Link to='' className='text-decoration-none '>
                <Dropdown.Item  style={{textAlign:'right' ,padding:'10px 40px'}}>المحفظة الشخصية</Dropdown.Item>

        </Link>
        <Link to='' className='text-decoration-none '>
                <Dropdown.Item  style={{textAlign:'right' ,padding:'10px 40px'}}>طلباتي</Dropdown.Item>

        </Link>
        <Link to='' className='text-decoration-none '>
                <Dropdown.Item  style={{textAlign:'right' ,padding:'10px 40px'}}>العنوانين المحفوظة</Dropdown.Item>
        </Link>
        <Link  className='text-decoration-none ' onClick={()=>handlelogout()}>
                <Dropdown.Item className='text-danger'   style={{textAlign:'right' ,padding:'10px 40px'}}>تسجيل الخروج</Dropdown.Item>

        </Link>
      </Dropdown.Menu>
    </Dropdown>
              
              </>):(<>
              
               <Form className="d-flex mx-4">
                
                <Link to='/login'  variant="outline-success login-btn" className='text-decoration-none' style={{padding:'10px 50px' ,borderRadius:"20px",fontWeight:"500" ,color:"#383838" ,background:'#ffffff'}}>تسجيل الدخول</Link>
              </Form>
              </>)}
              
                </div>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavBar
