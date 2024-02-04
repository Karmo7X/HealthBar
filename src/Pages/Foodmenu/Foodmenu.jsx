import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import {
  IoSearchOutline,
  IoCloseCircleSharp,
  IoCloseCircle,
  IoBag,
} from "react-icons/io5";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdFilterList } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import emptycart from "../../assets/icons/empty-cart.png";
import product from "../../assets/product1.png";
import product2 from "../../assets/product2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const prodcutdata = [
  {
    id: 1,
    title: "دجاج مشوي بالمشروم",
    desc: " مكرونة، ثوم و صوص طماطم حارة",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product,
  },
  {
    id: 2,
    title: "دجاج مشوي بالمشروم",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product,
  },
  {
    id: 3,
    title: "دجاج مشوي بالمشروم",
    desc: "مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product,
  },
  {
    id: 4,
    title: "دجاج مشوي بالمشروم",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product,
  },
  {
    id: 5,
    title: "دجاج مشوي بالمشروم",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product,
  },
  {
    id: 6,
    title: "دجاج مشوي بالمشروم",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product,
  },
  {
    id: 7,
    title: "دجاج مشوي بالمشروم",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product,
  },
  {
    id: 8,
    title: "دجاج مشوي بالمشروم",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: " 615 سعر حراري ",
    cover: product,
  },
];
const prodcutdata2 = [
  {
    id: 1,
    title:  "معكرونه ثوم مع طماطم حارة",
    desc: " مكرونة، ثوم و صوص طماطم حارة",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: 2,
    cover: product2,
  },
  {
    id: 2,
    title: "معكرونه ثوم مع طماطم حارة",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product2,
  },
  {
    id: 3,
    title: "معكرونه ثوم مع طماطم حارة",
    desc: "مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product2,
  },
  {
    id: 4,
    title: "معكرونه ثوم مع طماطم حارة",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product2,
  },
  {
    id: 5,
    title: "معكرونه ثوم مع طماطم حارة",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product2,
  },
  {
    id: 6,
    title: "معكرونه ثوم مع طماطم حارة",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product2,
  },
  {
    id: 7,
    title: "معكرونه ثوم مع طماطم حارة",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: "615 سعر حراري",
    cover: product2,
  },
  {
    id: 8,
    title: "معكرونه ثوم مع طماطم حارة",
    desc: " مكرونة، ثوم و صوص طماطم حارة ",
    price: "EGP 165",
    calries: " 615 سعر حراري ",
    cover: product2,
  },
];
const Foodmenu = () => {
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

  const [seacrh, setSearch] = useState("");
  const [counter, setCounter] = useState(1);
  const [activeCategory, setActiveCategory] = useState(null);

  console.log(seacrh);
  const handeldeletebutton = () => setSearch("");
  const handelebuttonplus = () => setCounter(counter + 1);
  const handelebuttonminus = () => setCounter(counter - 1);
  
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Add any other logic you need on category click
  };

  const categories = [
    'الأكثر مبيعاً',
    'أطباق المعكرونة',
    'أطباق الدجاج',
    'أطباق اللحم',
    'المأكولات البحرية',
    'أطباق النباتيين',
    'السندويشات',
     
  ];
  return (
    <>
      <div style={{ marginTop: "7rem", minHeight: "100vh" }}>
        <div className="container-fluid">
          <div className="filter_sec ">
            <div className="row align-items-center ">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="search mt-5 ">
                  <Form className="d-flex">
                    <div
                      className="d-flex search_input w-100"
                      style={{
                        borderRadius: "40px ",
                        padding: "5px 10px",
                      }}
                    >
                      <div
                        className="w-100 d-flex search_input  align-items-center"
                        style={{
                          border: "1px solid #CECECE",
                          borderLeft: "none",
                          borderTopRightRadius: "40px",
                          borderBottomRightRadius: "40px",
                          padding: "5px 10px",
                        }}
                      >
                        <Form.Control
                          type="text"
                          placeholder="بحث"
                          className="me-2 "
                          aria-label="Search"
                          value={seacrh}
                          style={{
                            boxShadow: "none",
                            outline: "none",
                            border: "none",
                          }}
                          onChange={(e) => setSearch(e.target.value)}
                        />

                        <div
                          className={`${
                            seacrh ? "d-flex" : "d-none"
                          } align-items-center justify-content-center`}
                          onClick={() => handeldeletebutton()}
                        >
                          <IoCloseCircleSharp
                            style={{ fontSize: "20px", color: "#CECECE" }}
                          />
                        </div>
                      </div>

                      <Button
                        className="fs-5  search_btn"
                        style={{
                          background: "transparent",
                          color: "#CECECE",
                          border: "none",
                          fontSize: "20px",
                          border: "1px solid #CECECE",
                          borderRadius: "none",
                          borderTopLeftRadius: "40px",
                          borderBottomLeftRadius: "40px",
                          width: "80px",

                          padding: " 10px",
                        }}
                      >
                        <IoSearchOutline />
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12">
                <div className="mt-5 d-flex align-items-center gap-1">
                  <Button
                    className={`swiper-button_next text-center d-flex align-items-center  justify-content-center ${
                      isLast ? "disabled" : ""
                    }`}
                    style={{
                      border: "none",
                      borderRadius: "50px",
                      padding: "15px ",
                      fontSize: "20px",
                      background:
                        " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                      color: "#FFF",
                    }}
                    onClick={() => handleNext()}
                  >
                    <FaArrowRightLong />
                  </Button>
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation={false}
                    ref={SlideRef}
                    onSlideChange={onSlideChange}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                      },
                      390: {
                        slidesPerView: 2,
                      },
                      502: {
                        slidesPerView: 3,
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
                    <SwiperSlide>
                      {" "}
                      <Button
                        variant="outline-success btn-filter"
                        style={{
                          padding: "12px 50px",
                          fontWeight: "500",
                          border: "1px solid #CECECE",
                          borderRadius: "40px",

                          color: "#383838",
                        }}
                      >
                        قائمة الفطار
                      </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <Button
                        variant="outline-success btn-filter"
                        style={{
                          padding: "12px 50px",
                          fontWeight: "500",
                          border: "1px solid #CECECE",
                          borderRadius: "40px",

                          color: "#383838",
                        }}
                      >
                        قائمة الغداء
                      </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <Button
                        variant="outline-success btn-filter"
                        style={{
                          padding: "12px 50px",
                          fontWeight: "500",
                          border: "1px solid #CECECE",
                          borderRadius: "40px",

                          color: "#383838",
                        }}
                      >
                        قائمة العشاء
                      </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <Button
                        variant="outline-success btn-filter"
                        style={{
                          padding: "12px 50px",
                          fontWeight: "500",
                          border: "1px solid #CECECE",
                          borderRadius: "40px",

                          color: "#383838",
                        }}
                      >
                        قائمة العشاء
                      </Button>
                    </SwiperSlide>
                  </Swiper>
                  <Button
                    className={`swiper-button_prev text-center d-flex align-items-center  justify-content-center ${
                      isFirst ? "disabled" : ""
                    }`}
                    style={{
                      border: "none",
                      borderRadius: "50px",
                      padding: "15px ",
                      fontSize: "20px",
                      background:
                        " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                      color: "#FFF",
                    }}
                    onClick={() => handlePrev()}
                  >
                    <FaArrowLeftLong />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "40px" }} />
          {/* filter sidebar */}
          <div className="row align-items-center">
            <div
              className="fliter-mobile w-100 d-flex align-items-center justify-content-end  "
              style={{ display: "none" }}
            >
              <div className="d-flex align-items-center   gap-2" >
                <button
                  class=" filter-btn-mobile"
                  style={{
                    padding: "7px 10px ",
                    fontWeight: "500",
                    border: "none",
                    borderRadius: "10px",
                    background:
                      " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                    color: "#FFF",
                    display: "none"
                  }}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                >
                  <MdFilterList style={{ fontSize: "25px" }} />
                </button>
                <button
                  type="button"
                  style={{
                    padding: "7px 10px ",
                    fontWeight: "500",
                    border: "none",
                    borderRadius: "10px",
                    background:
                      " linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                    color: "#FFF",
                    display: "none"
                  }}
                  class="filter-btn-mobile "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <IoBag style={{ fontSize: "25px" }} />
                </button>
              </div>
              <div className="filter-mobile-sec">
                <div
                  class="offcanvas offcanvas-start"
                  data-bs-scroll="true"
                  data-bs-backdrop="false"
                  tabindex="-1"
                  id="offcanvasScrolling"
                  aria-labelledby="offcanvasScrollingLabel"
                >
                  <div class="offcanvas-header">
                    <div className="header-filter">
                      <h5 className="m-3">الأقسام</h5>
                    </div>
                    <hr />
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body">
                    <div>
                    <div className="mx-4">
          {categories.map((category, index) => (
            <div className="mb-2" key={index}>
              <span
                className="filter-category"
                style={{
                  color: activeCategory === category ? '#6dc177' : '',
                  cursor: 'pointer',
                }}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </span>
            </div>
          ))}
        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_mobile">
                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header" style={{ border: "none" }}>
                        <button
                          type="button"
                          style={{
                            border: "2px solid #CECECE",
                            color: "#CECECE",
                            borderRadius: "50%",
                          }}
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
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
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div
                className="filer_side_sec mt-4 "
                style={{
                  border: "1px solid #CECECE",
                  borderRadius: "10px",
                  minHeight: "100vh",
                  maxHeight: "100vh",
                }}
              >
                <div className="header-filter">
                  <h5 className="m-3">الأقسام</h5>
                </div>
                <hr />
                <div style={{ overflowY: "auto", maxHeight: "80vh" }}>
                <div className="mx-4">
          {categories.map((category, index) => (
            <div className="mb-2" key={index}>
              <span
                className="filter-category"
                style={{
                  color: activeCategory === category ? '#6dc177' : '',
                  cursor: 'pointer',
                }}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </span>
            </div>
          ))}
        </div>
                </div>

                <div></div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div
                className="mt-4"
                style={{
                  height: "100vh",
                  maxHeight: "100vh",
                  overflowY: "auto",
                }}
              >
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {/* {prodcutdata.map(({id, title, cover, desc, price, calries}, index) => (
    <div class="accordion-item" key={id}>
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          style={{
            fontSize: "20px",
            background: "#FCFCFC",
            boxShadow: "none",
            fontWeight: "500",
            padding: "25px 10px"
          }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse-${index + 1}`}  
          aria-expanded="true"
          aria-controls={`flush-collapse-${index + 1}`}  
        >
          {title}
        </button>
      </h2>
      <div
        id={`flush-collapse-${index + 1}`}  
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body" style={{ maxHeight: "70vh", overflowY: "scroll" }}>
        <div className="prodcut_card mt-2 mb-2" key={id} >
          <div className="d-flex align-item-center gap-2 mt-3 mb-3 ">
            <div className="product_image">
              <img src={cover} alt=""  className='img-fluid' style={{maxWidth:"110px",maxHeight:'110px' ,borderRadius:'12px'}}/>
            </div>
            <div className="product_content">
             <h5>{title}</h5>
             <p>{desc}</p>
             <span>{calries}</span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center gap-2 ">
            
              <div><p className='mt-3' style={{fontWeight:'600' ,fontSize:"20px"}}>{price}</p></div>
              <div>
               <button  style={{border:'none',background:'none'}}>
                    <CiCirclePlus className='btn-cart-plus' style={{fontSize:"35px" ,color:"#4E4D4D"}}/>
                    </button> 
              </div>
              
            </div>
          </div>
        </div>
        <hr style={{background: '#CECECE'}}/>
        
        </div>
      </div>
    </div>
  ))} */}
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        style={{
                          fontSize: "20px",
                          background: "#FCFCFC",
                          boxShadow: "none",
                          fontWeight: "500",
                          padding: "25px 10px",
                        }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="true"
                        aria-controls="flush-collapseOne"
                      >
                        الأكثر مبيعاً
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        class="accordion-body"
                        style={{ maxHeight: "70vh", overflowY: "auto" }}
                      >
                        {prodcutdata.map(
                          ({ id, title, cover, desc, price, calries } ,index) => {
                            return (
                              <>
                                <div
                                  className="prodcut_card mt-2 mb-2"
                                  key={id}
                                  data-bs-toggle="modal" data-bs-target={`#productModal${index}`}
                                >
                                  <div className="d-flex align-item-center gap-2 mt-3 mb-3 ">
                                    <div className="product_image">
                                      <img
                                        src={cover}
                                        alt=""
                                        className="img-fluid"
                                        style={{
                                          maxWidth: "110px",
                                          maxHeight: "110px",
                                          borderRadius: "12px",
                                        }}
                                      />
                                    </div>
                                    <div className="product_content">
                                      <h5>{title}</h5>
                                      <p>{desc}</p>
                                      <span>{calries}</span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-end">
                                    <div className="d-flex align-items-center gap-2 ">
                                      <div>
                                        <p
                                          className="mt-3"
                                          style={{
                                            fontWeight: "600",
                                            fontSize: "20px",
                                          }}
                                        >
                                          {price}
                                        </p>
                                      </div>
                                      <div>
                                        <button
                                          style={{
                                            border: "none",
                                            background: "none",
                                          }}
                                        >
                                          <CiCirclePlus
                                            className="btn-cart-plus"
                                            style={{
                                              fontSize: "35px",
                                              color: "#4E4D4D",
                                            }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- Modal product --> */}
<div class="modal fade" id={`productModal${index}`}  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{background:'#FCFCFC'}}>
        <h1 class="modal-title fs-5" id="exampleModalLabel">تفاصيل الوجبة</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="d-flex align-item-center gap-2 mt-3 mb-3 "  key={id}>
                                    <div className="product_image">
                                      <img
                                        src={cover}
                                        alt=""
                                        className="img-fluid"
                                        style={{
                                          maxWidth: "110px",
                                          maxHeight: "110px",
                                          borderRadius: "12px",
                                        }}
                                      />
                                    </div>
                                    
                                    <div className=" row d-flex align-items-center justify-content-between w-100">
                                       <div className="product_content col-lg-9 col-sm-12 col-md-12">
                                      <h5>{title}</h5>
                                      <p>{desc}</p>
                                      <span>{calries}</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center col-lg-3 col-sm-12 col-md-12 ">
                                    <div className="d-flex align-items-center flex-lg-column left-product-details gap-2 ">
                                     <div>
                                     <div className="quantity d-flex align-items-cetner gap-4">
                        <button
                          onClick={() => handelebuttonminus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCircleMinus
                            className="btn-cart-minus"
                            style={{ fontSize: "30px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "30px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "30px", color: "#6DC177" }}
                          />
                        </button>
                                      </div>
                                      </div> 
                                       <div>
                                        <p
                                          className="mt-3"
                                          style={{
                                            fontWeight: "600",
                                            fontSize: "20px",
                                          }}
                                        >
                                          {price}
                                        </p>
                                      </div>
                                     
                                    </div>
                                  </div>
                                    </div>
                                   
                                  </div>
                                  
      </div>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" style={{background:'#FCFCFC'}}>
      <button class="accordion-button" style={{
                          fontSize: "20px",
                          background: "#FCFCFC",
                          boxShadow: "none",
                          fontWeight: "500",
                          padding: "25px 10px",
                        }}type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls="collapseOne">
      الإضافات
      </button>
    </h2>
    <div id={`collapseOne${index}`} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{maxHeight:"20vh",overflowY:'auto'}}>
      <div className="d-flex align-items-center justify-content-between row ">
      <div class="form-check col-sm-12 col-lg-8"> 
       
  <input class="form-check-input" style={{float:"none" ,marginLeft:"10px"}} type="checkbox" value="" id="flexCheckDefault"/>
<label class="form-check-label" for="flexCheckDefault">
  مشروم ، ( 9 سعر حراري )
  </label>
</div>
<div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-end">
  <span className="fw-bold">EGP 11</span>
</div>
       
      </div>
      <div className="d-flex align-items-center justify-content-between row ">
      <div class="form-check col-sm-12 col-lg-8">
  <input class="form-check-input" style={{float:"none" ,marginLeft:"10px"}} type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
  30 جرام دجاج مشوي ، (100 سعر حراري )
  </label>
</div>
<div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-end">
  <span className="fw-bold">EGP 60</span>
</div>

      </div>
       
      
      </div>
    </div>
  </div>
</div>
  
<div className="d-flex align-items-center justify-content-center mt-4 mb-3">
                    <Button
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
                     أضف إلي سلة المشتريات
                    </Button>
                  </div>
    </div>
  </div>
</div>
                                <hr style={{ background: "#CECECE" }} />
                              </>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        style={{
                          fontSize: "20px",
                          background: "#FCFCFC",
                          boxShadow: "none",
                          fontWeight: "500",
                          padding: "25px 10px",
                        }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        أطباق المكرونة
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        class="accordion-body"
                        style={{ maxHeight: "70vh", overflowY: "auto" }}
                      >
                        {prodcutdata2.map(
                          ({ id, title, cover, desc, price, calries }) => {
                            return (
                              <>
                                <div
                                  className="prodcut_card mt-2 mb-2"
                                  key={id}
                                >
                                  <div className="d-flex align-item-center gap-2 mt-3 mb-3 ">
                                    <div className="product_image">
                                      <img
                                        src={cover}
                                        alt=""
                                        className="img-fluid"
                                        style={{
                                          maxWidth: "110px",
                                          maxHeight: "110px",
                                          borderRadius: "12px",
                                        }}
                                      />
                                    </div>
                                    <div className="product_content">
                                      <h5>{title}</h5>
                                      <p>{desc}</p>
                                      <span>{calries}</span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-end">
                                    <div className="d-flex align-items-center gap-2 ">
                                      <div>
                                        <p
                                          className="mt-3"
                                          style={{
                                            fontWeight: "600",
                                            fontSize: "20px",
                                          }}
                                        >
                                          {price}
                                        </p>
                                      </div>
                                      <div>
                                        <button
                                          style={{
                                            border: "none",
                                            background: "none",
                                          }}
                                        >
                                          <CiCirclePlus
                                            className="btn-cart-plus"
                                            style={{
                                              fontSize: "35px",
                                              color: "#4E4D4D",
                                            }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr style={{ background: "#CECECE" }} />
                              </>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    
    </div>
  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-12">
              <div
                className="cart_side_sec mt-4 "
                style={{
                  border: "1px solid #CECECE",
                  borderRadius: "10px",
                  minHeight: "100vh",
                  maxHeight: "100vh",
                }}
              >
                <div className="header-cart">
                  <h5 className="m-3">سلة المشتريات</h5>
                </div>

                {/* <div style={{background:'#CECECE' ,width:'100%' ,height:'70vh'}}>
               <div className='d-flex align-items-center justify-content-center '>
                <img src={emptycart} alt="" className='img-fluid w-50' style={{marginTop:'5rem'}} />
               </div>
              </div> */}
                <div style={{ overflowY: "auto", height: "33vh" }}>
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
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
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
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
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
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
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
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
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
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
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
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
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
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
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
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
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
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
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
                        <p style={{ fontSize: "20px", fontWeight: "500" }}>
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
                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
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
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                        <div className="fw-bold">
                          <span style={{ fontSize: "25px" }}>{counter}</span>
                        </div>
                        <button
                          onClick={() => handelebuttonplus()}
                          style={{ border: "none", background: "none" }}
                        >
                          <CiCirclePlus
                            className="btn-cart-plus"
                            style={{ fontSize: "25px", color: "#6DC177" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="total mt-4 " style={{ padding: "10px 30px" }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px" }}>المجموع</p>
                    <span style={{ fontWeight: "600", fontSize: "20px" }}>
                      EGP 495
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px" }}>التوصيل</p>
                    <span style={{ fontWeight: "600", fontSize: "20px" }}>
                    --
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: "20px" }}>الخدمة</p>
                    <span style={{ fontWeight: "600", fontSize: "20px" }}>
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

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foodmenu;
