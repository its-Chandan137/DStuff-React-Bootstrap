import React from 'react'

function DigitalProductShow() {
  return (
    <>
        <section className='bg-color more-info-section'>
            <div className="container">
                <div className="row">

                <div className="col-12 col-md-12 col-lg-6 img-section">
                    <figure>
                        <img src="../images/phone.gif" alt="Digital Product" className='img-fluid'/>
                    </figure>
                </div>

                    <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-item-start">
                        <h2 className='text-capitalize fw-bolder text-white'>Steps To Buy Quality Stuffs Successfully</h2>
                        <p className='mt-3 mb-5 para-width text-light-grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur officiis provident laboriosam sint fugiat eaque nostrum! Temporibus,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae dolor aut quidem accusamus obcaecati, pariatur, consequatur, tempora corporis consequuntur dolorem assumenda temporibus cumque ex ducimus consectetur totam dolores fugit. quod quidem. Iure amet dolore est. Amet optio cupiditate quas corrupti labore.</p>
                        <div className="text-center w-100 text-md-start">
                            <button className='text-capitalize btn btn-primary px-5 py-2' data-bs-toggle="tooltip" data-bs-title="Hurry Up!  ">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DigitalProductShow