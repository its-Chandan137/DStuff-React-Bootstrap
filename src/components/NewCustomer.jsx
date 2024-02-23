import React from 'react'

function NewCustomer() {
  return (
    <section className='newCustomer'>
        <div className='serviceSection'>
            <div className="container text-center common-title fw-bold">
                <h2 className='common-heading'>Generating New Customers Via <br />Online Mode</h2>
                <hr className='w-25 mx-auto'/>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="px-3 py-5 shadow h-90">
                        <img className='d-md-block d-none img-fluid mx-3' src="src/images/phone.gif" width={"150px"} alt='GIF Image'/>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="px-3 py-5 shadow h-90">
                        <img className='d-md-block d-none img-fluid mx-3' src="src/images/phone.gif" width={"150px"} alt='GIF Image'/>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="px-3 py-5 shadow h-90">
                        <img className='d-md-block d-none img-fluid mx-3' src="src/images/phone.gif" width={"150px"} alt='GIF Image'/>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="px-3 py-5 shadow">
                        <img className='d-md-block d-none img-fluid mx-3' src="src/images/phone.gif" width={"150px"} alt='GIF Image'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewCustomer