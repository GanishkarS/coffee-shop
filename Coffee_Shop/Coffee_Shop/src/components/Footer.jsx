import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BsEnvelopeFill } from 'react-icons/bs';

import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare} from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='aka'>
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>our branches</h3>
                    <a href="#"><FiArrowRight className='lod' />Bengaluru </a>
                    <a href="#"><FiArrowRight className='lod' />Chennai </a>
                    <a href="#"><FiArrowRight className='lod' />Kolkata </a>
                    <a href="#"><FiArrowRight className='lod' />Hyderabad </a>
                    <a href="#"><FiArrowRight className='lod' />Mumbai </a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#"><FiArrowRight className='lod'/>home </a>
                    <a href="#"><FiArrowRight className='lod'/>about </a>
                    <a href="#"><FiArrowRight className='lod'/>menu </a>
                    <a href="#"><FiArrowRight className='lod'/>review </a>
                    <a href="#"><FiArrowRight className='lod'/>book </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#"><BsFillTelephoneOutboundFill className='lod'/>+91 9445167899 </a>
                    <a href="#"><BsFillTelephoneOutboundFill className='lod'/>+91 1234567890 </a>
                    <a href="#"><BsEnvelopeFill className='lod'/>coffeecafe18@gmail.com </a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="#"><AiFillFacebook className='lod'/>facebook </a>
                    <a href="#"><FaInstagramSquare className='lod'/>instagram </a>
                    <a href="#"><FaTwitterSquare className='lod'/>twitter </a>
                    <a href="#"><AiFillLinkedin className='lod'/>linkedin </a>
                </div>

            </div>
            <div className="credit">created by <span>Ganishkar</span> || All rights reserved</div>
        </section>
    </div>
  )
}

export default Footer