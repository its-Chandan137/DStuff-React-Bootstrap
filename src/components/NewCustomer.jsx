import React, { useRef } from 'react'
import CustomerComponent from './CustomerComponent'

function NewCustomer() {
    const ref = useRef(null)
    const data = [
        {
            img: "src/images/phone.gif",
            text: "Lorem ipsum dolor sit amet elit. Excepturi odio random words init like git init told u random words! eos suscipi ipsa",
        },
        {
            img: "src/images/map.gif",
            text: "Lorem ipsum dolor sit amet elit. Excepturi odio random words init like git init told u random words! eos suscipi ipsa",
        },
        {
            img: "src/images/link.gif",
            text: "Lorem ipsum dolor sit amet elit. Excepturi odio random words init like git init told u random words! eos suscipi ipsa",
        },
        {
            img: "src/images/speaker.gif",
            text: "Lorem ipsum dolor sit amet elit. Excepturi odio random words init like git init told u random words! eos suscipi ipsa",
        },
    ]
  return (
    <section className='newCustomer'>
        <div className='serviceSection'>
            <div className="container text-center common-title fw-bold">
                <h2 className='common-heading'>Generating New Customers Via <br />Online Mode</h2>
                <hr className='w-25 mx-auto'/>
            </div>
        </div>

        <div className="container">
            <div className="row d-flex g-5" ref={ref}>
                {data.map((x,i)=>(
                    <CustomerComponent data = {x} refrence = {ref} key={i}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default NewCustomer