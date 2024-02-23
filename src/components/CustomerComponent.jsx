import React from 'react'

function CustomerComponent({data, refrence}) {
  return (
    <div className='customerComponent'>
        <div className="col-12 col-lg-6 w-100">
            <div className="px-3 py-5 shadow h-90 d-flex align-items-center">
                <img className='d-md-block d-none img-fluid mx-3' src={data.img} width={"150px"} alt='GIF Image'/>
                <p>{data.text}</p>
            </div>
        </div>
    </div>
  )
}

export default CustomerComponent