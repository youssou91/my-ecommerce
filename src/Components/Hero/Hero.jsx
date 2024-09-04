// import React from 'react'
import  './Hero.css'
import hero_img from '../../assets/hero.png'
import { FaShippingFast } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_top">
          <div className="hero_left">
            <h2>Evaluate Your Wardrobe</h2>
            <h1>Find out what style you&apos;re dressed in today</h1>
            <p>Shop the latest trends and classic essentials just for you !!!</p>
          </div>
          <div className="hero_right">
            <img src={hero_img} alt="hero_image" />
          </div>
        </div>
        <div className="hero_bottom">
            <div className="hero_content">
              <div className="info_icon">
                <FaShippingFast className='hero_cc_icon'/>
              </div>
              <div className="hero_detail">
                <h3>Free Shipping</h3>
                <p>Free Shipping order</p>
              </div>
            </div>
            <div className="hero_content">
              <div className="info_icon">
                <BiSupport className='hero_cc_icon'/>
              </div>
              <div className="hero_detail">
                <h3>24/7 Support</h3>
                <p>Full support on precess</p>
              </div>
            </div>
            <div className="hero_content">
              <div className="info_icon">
                <MdPayment className='hero_cc_icon'/>
              </div>
              <div className="hero_detail">
                <h3>Secure payment</h3>
                <p>Your payment is secure</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero