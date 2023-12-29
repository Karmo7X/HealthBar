import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/LogoHealthBar.png'
import homeimg from '../assets/homeimg.png'
import homeimg2 from '../assets/homeimg-2.png'
import homeimg3 from '../assets/homeimg-3.png'
import Aos from 'aos';
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "aos/dist/aos.css"
import Products from '../component/Products/Products';
import meat from '../assets/icons/Meat.png'
import gluten from '../assets/icons/gluten.png'
import brazil_Nut from '../assets/icons/Brazil_Nut.png'
import Footer from '../component/Footer';
import Reviews from '../component/Reviews/Reviews';
const Home = () => {
  useEffect(()=>
  {
    Aos.init({duration:2000})
    
  },[])
  return (
    <>
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
                  <img src={logo} alt="" className="img-fluid" />
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
                      <Nav.Link href="#action1" style={{ fontWeight: "800" }}>
                        قائمة الطعام
                      </Nav.Link>
                      <Nav.Link href="#action2" style={{ fontWeight: "800" }}>
                        طبقك الخاص
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
                    <Form className="d-flex mx-5">
                      <Button
                        variant="outline-success"
                        style={{
                          padding: "10px 50px",
                          fontWeight: "500",
                          border: "none",
                          borderRadius: "20px",
                          background: "#ffffff",
                          color: "#383838",
                        }}
                      >
                        تسجيل الدخول
                      </Button>
                    </Form>
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
          <img src={homeimg2} alt=""  className='img-fluid' style={{position:'absolute',width:'40%' ,right:"60%" ,top:'67%',bottom:"0"}}/>
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
                       عرض المزيد   <FaArrowLeftLong />

                      </Button>
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
     <div className="mt-5 mb-5 p-2" data-aos="fade-up">
     <h2 className='text-end mb-5'> أراء عملائنا </h2>
      <Reviews/>
     </div>
      </div>
      

      <div>
        <Footer/>
      </div>
     
    </>
  );
}

export default Home
