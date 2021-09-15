import React from 'react'

import Section from '../components/Section'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'

import '../assets/css/contactus.css'


function ContactUs() {
  return (
    <div className="wrapper">

      {/* Contact Us */}
      <Section
        titleClass="fdir__col"
        titleContent={
          <>
            <span className="section__title">Let's get connected!</span>
          </>
        }
        bodyContent={
          <>
            <Jumbotron>
              {
                <div className="form__container">
                  <form className="contact__form">
                    <label htmlFor="name">How can I address you?</label>
                    <input type="text" placeholder="Name" />
                    <label htmlFor="emailAddd">Your email address is</label>
                    <input type="email" placeholder="youremail@domain.com" />
                    <label htmlFor="message">How can I help you?</label>
                    <textarea placeholder="Your message here"></textarea>
                    <button className="btn" id="btn_send">Send Message</button>
                  </form>
                </div>
              }
            </Jumbotron>
          </>
        }
      />


      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default ContactUs
