import React from 'react'
import {toast} from 'react-toastify';
import emailjs from 'emailjs-com';

import Section from '../components/Section'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'

function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('kutchinarapp', 'kutchinarapp_email', e.target, 'user_FbBcBtb8QfkNuPCRjhs9f')
      .then((result) => {
          toast.success('Email Sent', {position: toast.POSITION.BOTTOM_LEFT})
          console.log(result.text);
      }, (error) => {
        toast.error('Email Sent', {position: toast.POSITION.BOTTOM_LEFT})
          console.log(error.text);
      });
      e.target.reset()
  }

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
                  <form className="contact__form" onSubmit={sendEmail}>
                    <label htmlFor="from_name">How can I address you?</label>
                    <input type="text" placeholder="Name" name="from_name"/>
                    <label htmlFor="subject">Concern Category</label>
                    <select name="subject">
                      <option>Order</option>
                      <option>Receipt</option>
                      <option>Payment</option>
                      <option>Other</option>
                    </select>
                    <label htmlFor="email">Your email address is</label>
                    <input type="email" placeholder="youremail@domain.com" name="email"/>
                    <label htmlFor="message">How can I help you?</label>
                    <textarea placeholder="Your message here"  name="message"></textarea>
                    <input type="submit" className="btn" id="btn_send" value="Send Message"/>
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
