import React from 'react'
import { Link } from "react-router-dom";

import Section from './Section'

function Footer() {
  return (
    <Section
      titleClass="fdir__col"
      titleContent={
        <>
          <Link to="/ask-us" className="mb-4">Ask Us</Link>
          <Link to="/contact-us" className="mb-4">Contact Us</Link>
          <Link to="/privacy-policy" className="mb-4">Privacy Policy</Link>
          <Link to="/terms-conditions" className="mb-4">Terms & Conditions</Link>
        </>
      }
      bodyContent={
        <>  
          <div className="footer">
            <span id="footer_logo">kutchinarapp</span>
            <span id="footer_description">All Rights Reserved © 2021</span>
          </div>
        </>
      }
    />
  )
}

export default Footer
