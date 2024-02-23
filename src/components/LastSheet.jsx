import React, { useRef, useState } from 'react'

function LastSheet() {
    const [col,setCol] = useState("var(--bs-dark-color)")
    const ref = useRef()
    const myCol = ()=>{
        return document.querySelectorAll('.card-text').style= {color:"black"}
    }
  return (
    <div className='clients bg-color pt-5 mb-5'>

        <div className="container text-center common-title fw-bold mb-5">
            <h2 className='common-heading text-white'>What Clients Say <br /> About Us</h2>
            <hr className='w-25 mx-auto'/>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide ">
            <div className="carousel-inner d-flex justify-content-start">

                <div className="carousel-item active">
                    
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-lg-4 d-flex justify-content-center">
                            <div className="card pb-5" style={{width: "18rem"}} onClick={()=>myCol()}>
                                <img src="src/images/Purple background.avif" className="card-img-top p-2" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Lever Auto</h5>
                                    <p className="card-text" ref={ref}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-item active">
                    
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-lg-4 d-flex justify-content-center">
                            <div className="card pb-5" style={{width: "18rem"}}  onClick={myCol}>
                                <img src="src/images/Purple background.avif" className="card-img-top p-2" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Project 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-item active">
                    
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-lg-4 d-flex justify-content-center">
                            <div className="card pb-5" style={{width: "18rem"}}>
                                <img src="src/images/Purple background.avif" className="card-img-top p-2" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Image</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        </div>
    </div>
  )
}

export default LastSheet