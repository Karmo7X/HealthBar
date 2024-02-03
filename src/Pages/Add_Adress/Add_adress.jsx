import React from 'react'
import { Link } from 'react-router-dom'

const Add_adress = () => {
  return (
    <>
      <div className="Add_Adress" style={{ marginTop: "7rem", minHeight: "100vh"}}>
        <div className="container-fluid">
            <div className="add_address_sec " style={{padding:'10px 25px'}}>
                <h5 className='fw-bold'>عنوان التوصيل</h5>
                <hr className='mt-4 mb-4'/>
                <div className='  d-flex align-items-center  flex-column  justify-content-center w-100' style={{background:'#ffffff' ,border:'1px solid #CECECE' ,borderRadius:'10px' ,padding:'10px 30px'}}>
                <form
              action=""
              className=" add_address_sec_form  "
              style={{width:'75%'}}
              
            >
            
              <div className="row mt-5 w-100  align-items-center ">
                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <label htmlFor="" className='mb-3'>نوع العنوان</label>
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
                    
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                      مثال : المنزل أو العمل {" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <label htmlFor="" className='mb-3'> العنوان بالتفصيل </label>
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
                    
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                      مثال : رقم الشارع - الحي - المدينة {" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                    <label htmlFor="" className='mb-3'> رقم مبني/فيلا </label>
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
                    
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                      مثال : رقم 7{" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                    <label htmlFor="" className='mb-3'> رقم الطابق  </label>
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
                    
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                      مثال : الدور 2{" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <label htmlFor="" className='mb-3'> رقم الشقة  </label>
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
                    
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                      مثال : شقة رقم 4 {" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <label htmlFor="" className='mb-3'> علامة مميزة  </label>
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
                    
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                      مثال : بجوار مسجد أو مستشفي{" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <label htmlFor="" className='mb-3'> رقم الاتصال </label>
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
                    
                      }}
                      placeholder="name@example.com"
                      id="floatingInputEmail1"
                    />

                    <label for="floatingInputEmail1">
                      {" "}
                      مثال :01********* {" "}
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                </div>
                <div className='d-flex align-items-center  mt-5 justify-content-center w-100 mb-5'>
                <Link 
                       to=''
                        variant="outline-success btn"
                        className='text-decoration-none text-center'
                        style={{
                          padding: "17px 50px",
                          fontWeight: "500",
                          border: "none",
                          borderRadius: "40px",
                          background:" linear-gradient(180deg, #6DC177 0%, #13793D 100%)",
                          color: "#FFF",
                          width:'60%'
                        }}
                      >
                    حفظ العنوان
                        

                      </Link>
                </div>
              
              </div>
            </form>
                </div>
              
            </div>
        </div>
      </div>
    </>
  )
}

export default Add_adress
