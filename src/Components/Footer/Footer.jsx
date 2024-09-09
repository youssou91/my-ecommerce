/* eslint-disable no-unused-vars */
import React from 'react'
import  './Footer.css'
import { FaFacebook } from 'react-icons/fa6'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_name">
            <h2>Shpp-G</h2>
          </div>
        </div>
        <div className="footer_socials">
          <FaFacebook/>
          <BsInstagram/>
        </div>
        <div className="footer_copyright"></div>
      </div>
    </div>
  )
}

export default Footer