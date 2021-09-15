import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'

function ContactUs() {
  return (
    <div className="wrapper">
      <section>
        <div className="sect__header">
          <div className="wrap">
            <div className="title__wrap">
              <span className="section__title">Let's get connected!</span>
            </div>
          </div>
        </div>
        <div className="sect__body">
          <div className="wrap">
            <div className="body__wrap">
            <div className="jumbotron">
              <div className="jumbotron__nav">
                <Link to="/">
                  <span className="jumbotron__nav__icon"><i className='bx bx-left-arrow-alt' ></i></span>
                </Link>
                <Link to="/">
                  <span className="jumbotron__nav__label">Back</span>
                </Link>
              </div>
              <div className="jumbotron__body">
                
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Section
        titleClass="fdir__col mb-4"
        titleContent={
          <>
            <Link to="/ask-us">Ask Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
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
    </div>
  )
}

export default ContactUs
