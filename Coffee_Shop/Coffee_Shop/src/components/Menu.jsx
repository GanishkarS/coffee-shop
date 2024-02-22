import React from 'react'
import { useState } from 'react'
import menus from "./menus.js"


const Menu = () => {
  const [data, setData] = useState(menus);

  return (
    <section id='menu'>
    <div className='aka' >
        <section className="menu" id="menu">
            <h1 className="heading">our menu <span>popular menu</span></h1>

            <div className="box-container">


            {data.map((value) =>{
                const {id, titles, descs, prices, images} = value;

                return (
                  <>
                    <a href="#" className='box' key={id}>
                      <img src={images} alt="" />
                      <div className="content">
                        <h3>{titles} </h3>
                        <p>{descs} </p>
                        <span>₹{prices} </span>
                      </div>
                    </a>
                  </>
                )
            })}
            </div>
        </section>
    </div>
    </section>
  )
}

export default Menu