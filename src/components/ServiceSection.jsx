import React, { useRef } from 'react'
import ServiceComponent from './ServiceComponent'

function ServiceSection() {
    const ref = useRef(null)
    const data = [
        {
            img: "src/images/seo.gif",
            text: "Deserunt sit , necessitatibus quasi dolore eius perferendi laborum.",
            title: "I Don't Know",
        },
        {
            img: "../src/assets/common/speaker.gif",
            text: "Deserunt sit , necessitatibus quasi dolore eius perferendi laborum.",
            title: "Speaker",
        },
        {
            img: "src/images/map.gif",
            text: "Deserunt sit , necessitatibus quasi dolore eius perferendi laborum.",
            title: "Location",
        },

    ];

  return (
    <>
        <div className='serviceSection mw-fit-content mb-5'>
            <div className="container text-center common-title fw-bold">
                <h2 className='common-heading'>What will you do for <br/>Your Mind</h2>
                <hr className='w-25 mx-auto'/>
            </div>

            <div className="container mt-5">
                <div className="row g-5 d-flex justify-content-evenly" ref={ref}>
                        {data.map((x,i)=>(
                            <ServiceComponent data = {x} refrence={ref} key={i}/>
                        ))}
                </div>
            </div>
        </div> 
    </>
  )
}

export default ServiceSection