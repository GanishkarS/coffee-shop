import React from 'react'
import { useState } from 'react';

const Home = () => {

    const imgs=[
        {id:0,value:"../../src/assets/image/home-img-1 (1).png"},
        {id:1,value:"../../src/assets/image/home-img-1 (4).png"},
        {id:2,value:"../../src/assets/image/home-img-1 (2).png"},
        {id:3,value:"../../src/assets/image/home-img-1 (3).png"}
    ];
    const [sliderData,setSliderData] = useState(imgs[0])
    const handleClick=(index)=>{
        // console.log(index);
        const slider=imgs[index];
        setSliderData(slider);
    }

  return (
    <section id='home'>
    <div className='aka'>
        <section className='home' id='home'>
            <div className="row">
                <div className="content">
                    <h3>A Cup of Inspiration</h3>
                    <a href="#" className='btn'> Buy one now</a>
                </div>
                <div className="image">
                    <img src={sliderData.value} alt="" className='main-home-image' />
                </div>
            </div>

            <div className="image-slider">
                {
                    imgs.map((data,i)=>
                    <img key={data.id} src={data.value} onClick={()=>handleClick(i)} /> )
                }
            </div>

        </section>
    </div>
    </section>
  )
}

export default Home