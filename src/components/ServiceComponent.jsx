import React from 'react'


function ServiceComponent({data,refrence}) {
  return (
        <div className='serviceComponent'>
            <div className="col-12 col-lg-4 col-md-12 w-100">
                <div className="text-center card-box rounded-2 p-5 shadow">
                                
                    <img src={data.img} alt="link" className='img-fluid' width={"200px"}/>

                    <h5 className='my-3 fw-normal'>{data.title}</h5>

                    <p className='mb-5'>{data.text}</p>

                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#service" className='iconSpan rounded-circle d-flex justify-content-center align-items-center'>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default ServiceComponent