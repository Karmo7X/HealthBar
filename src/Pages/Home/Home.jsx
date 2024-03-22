import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/LogoHealthBar.png'
import homeimg from '../../assets/homeimg.png'
import homeimg2 from '../../assets/homeimg-2.png'
import homeimg3 from '../../assets/homeimg-3.png'
import Aos from 'aos';
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "aos/dist/aos.css"
import Products from '../../component/Products/Products';
import meat from '../../assets/icons/Meat.png'
import gluten from '../../assets/icons/gluten.png'
import brazil_Nut from '../../assets/icons/Brazil_Nut.png'
import Footer from '../../component/Footer';
import Reviews from '../../component/Reviews/Reviews';
import { Link, useNavigate } from 'react-router-dom';
import { IoBagOutline ,  IoSearchOutline,
  IoCloseCircleSharp,
  IoCloseCircle,
  IoBag,} from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Cookies from "js-cookie"
import user from '../../assets/icons/userundefine.png'
import { useDispatch } from 'react-redux';
import { LogoutAPi } from '../../APi/slices/Auth/Authslice';

const Home = () => {
  useEffect(()=>
  {
    Aos.init({duration:2000})
    
  },[])
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
    <div style={{  minHeight: "100vh",}}>
      <div
        style={{
          minHeight: "100vh",
         
          background:
            "linear-gradient(90deg, rgba(109,193,119,1) 31%, rgba(251, 255, 251, 1) 31%)",
        }}
      >
        <div>
          {["lg"].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Brand href="#">
                  <img src={logo} alt="" className="img-fluid w-75 " />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <img src={logo} alt="" className="img-fluid" />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                      <Nav.Link  style={{ fontWeight: "800" }}>
                      <Link to='Foodmenu' className='text-decoration-none text-dark'>قائمة الطعام</Link>
                      </Nav.Link>
                      <Nav.Link  style={{ fontWeight: "800" }}>
                      <Link to='your_dish' className='text-decoration-none text-dark'>طبقك الخاص </Link>

                        
                      </Nav.Link>
                   
                    </Nav>
                    <div className='d-flex align-items-center left-nav-btn'>
                  
                
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
        </div>
        <div className="container-fluid">
        <div
          className="row align-items-center "
          style={{ marginTop: "4rem" }}
        >
          <div className="col-lg-6 col-md-6-col-sm-12 " data-aos="fade-up">
          <div className="content mt-3 p-3">
          <h3 className="fw-500 w-100" style={{ fontSize: "40px" }}>
            {" "}
            نضمن لك تجربة{" "}
            <span style={{ color: "#FF6915" }}> لذيذة وصحية </span>
          </h3>
          <p className='mt-5 mb-5'  style={{color:"#4E4D4D" ,fontSize:"24px" ,width:'100%'}} >
            مع قائمتنا المتنوعة من الأطعمة الطازجة والمغذية نقدم أشهى الأطعمة
            والمشروبات الصحية المحضرة بمكونات عالية الجودة.
          </p>

          <div className='d-flex align-items-center gap-4'>
          <Button
                        variant="outline-success btn"
                        style={{
                          padding: "10px 50px",
                          fontWeight: "500",
                          border: "none",
                          borderRadius: "20px",
                          background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                          color: "#FFF",
                        }}
                      >
                        قائمة الطعام    <FaArrowLeftLong />

                      </Button>
                      <Button
                        variant="outline-success btn"
                        style={{
                          padding: "10px 50px",
                          fontWeight: "500",
                          border: "1px solid #383838",
                          borderRadius: "20px",
                          
                          color: "#383838",
                        }}
                      >
                        بحث   <CiSearch />


                      </Button>
          </div>
        </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12"data-aos="fade-down" >
          <div className='home_img ' style={{position:'relative'}} >
          <img src={homeimg} alt=""  className='img-fluid' />
          
        </div>
            </div>
          
        
        </div>
        </div>
        
        
      </div>
      <div className="container-fluid">
      <div className='mt-5 mb-5 p-4' data-aos="fade-up">
        <h2 className='text-end mb-5'>أطباقنا الرئيسية</h2>

        <Products />
        <div className="d-flex align-items-center justify-content-center mt-5">
        <Link to='/Foodmenu' className='text-decoration-none'
                        variant="outline-success btn "
                        style={{
                          padding: "10px 50px",
                          fontWeight: "500",
                          border: "none",
                          borderRadius: "20px",
                          background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                          color: "#FFF",
                        }}
                      >
                       عرض المزيد   <FaArrowLeftLong />

                      </Link>
        </div>
        
      </div>
      <div className="mt-5 mb-5 " style={{background:'#FBFFFB' ,position:'relative'}} data-aos="fade-up">
     <div className="row align-items-center ">
      <div className="col-lg-3 col-md-6 col-sm-12 mb-3" >
      <div className="d-flex align-items-center">
       <div>
       <div className='kindfoods' style={{background:"#6DC177" ,position:'absolute' , top:'0' ,width:"25%" ,borderRadius:"100px 0px 0px 100px" ,padding:'10px 30px'}} data-aos="">
        <div className="d-flex align-items-center justify-content-between gap-5  p-2 ">
          <div>
            <span className='text-center' style={{color:'#fff' ,fontSize:'20px' ,fontWeight:'bold'}}>  بروتين  </span>   
          </div>

         <div className="d-flex align-items-center justify-content-center  "  style={{width:'60px',height:'60px', background:'#F5F5F5' ,borderRadius:"50%"}}>
        <img src={meat} alt="" className='img-fluid' style={{width:"70%"}}/>
       </div>
    
        </div>
       </div>
       <div className='kindfoods2' style={{background:"#FFF" ,position:'absolute' , top:'30%' ,width:"20%" ,borderRadius:"100px 0px 0px 100px" ,padding:'10px 30px'}} data-aos="">
        <div className="d-flex align-items-center justify-content-between gap-5  p-2 ">
          <div>
            <span className='text-center' style={{color:'#4E4D4D' ,fontSize:'20px' }}>  كارب  </span>   
          </div>

         <div className="d-flex align-items-center justify-content-center  "  style={{width:'60px',height:'60px', border :'1px solid #FF6915', background:'#F5F5F5' ,borderRadius:"50%"}}>
        <img src={gluten} alt="" className='img-fluid' style={{width:"70%"}}/>
       </div>
    
        </div>
       </div>
       <div className='kindfoods3' style={{background:"#FFF" ,position:'absolute' , top:'60%' ,width:"20%" ,borderRadius:"100px 0px 0px 100px" ,padding:'10px 30px'}} data-aos="">
        <div className="d-flex align-items-center justify-content-between gap-5  p-2 ">
          <div>
            <span className='text-center' style={{color:'#4E4D4D' ,fontSize:'20px' }}>  دهون </span>   
          </div>

         <div className="d-flex align-items-center justify-content-center  "  style={{width:'60px',height:'60px', border :'1px solid #FF6915', background:'#F5F5F5' ,borderRadius:"50%"}}>
        <img src={brazil_Nut} alt="" className='img-fluid' style={{width:"70%"}}/>
       </div>
    
        </div>
       </div>
       <div></div>
       <div></div>
       </div>
      </div>
      </div>
      <div className="col-lg-4 col-md-3 col-sm-12 mb-3" data-aos="fade-bottom">
      <div >
        <img src={homeimg3} alt="" className='img-fluid' style={{width:"100%"}}/>
       </div>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12 mb-5" data-aos="fade-up">
        <div className='orderhome-content p-2 mt-5'>
        <h3 className="fw-500 w-100" style={{ fontSize: "40px" }}>
            {" "}
            أطلب {" "}
            <span style={{ color: "#FF6915" }}>     طبقك الخاص  </span>
          </h3>
          <p className='mt-5 mb-5'  style={{color:"#4E4D4D" ,fontSize:"24px" ,width:'100%'}} >
          
          يمكنك طلب طبقك المفضل بالمكونات
والكمية التي تُحب، دون الحاجة للقلق حول
حساب السعرات الحرارية

          </p>
          <Button
                        variant="outline-success btn"
                        style={{
                          padding: "10px 50px",
                          fontWeight: "500",
                          border: "none",
                          borderRadius: "20px",
                          background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                          color: "#FFF",
                        }}
                      >
                        أطلب الأن   <FaArrowLeftLong />

                      </Button>
        </div>
     
      </div>
     </div>
     </div>
     {/* <div className="mt-5 mb-5 p-2" data-aos="fade-up">
     <h2 className='text-end mb-5'> أراء عملائنا </h2>
      <Reviews/>
     </div> */}
      </div>
    </div>
      
      

      <div>
        <Footer/>
      </div>
     
    </>
  );
}

export default Home
