import React from 'react';
import { Link } from "react-router-dom";

import Section from '../components/Section.js';
import Bar from '../components/Bar.js';

import '../assets/css/askus.css'

function AskUs() {
  
  const freqAskQues = [
    {key: 1 , question: "Are you a restaurant?" , answer: "We are a delivery and carry-out only food service company. We don't have dine-in service but we accept call-in, online and walk-in orders."},
    {key: 2 , question: "Do you deliver?" , answer: "Yes! We strive to keep our promise of serving your hunger in less than an hour for a flat convenience fee of only P75.00, we only deliver in Manila are for now."},
    {key: 3 , question: "How can I pick up my order?" , answer: "After payment and confirmation of your order, we can deliver it you by our own delivery service, or book a pick-up service from your choice third-party courier service (Grab, Lalamove, etc). Just remind the pick-up service personnel to bring appropriate bags for food transport."},
    {key: 4 , question: "How to Pay?" , answer: "COD and Gcash (Account # 0999 999 9999) are available options. Credit card and Paymaya payments will be available soon."},
    {key: 5 , question: "Do you offer group bundles and individually-packed meals?" , answer: "Yes! For large orders and events, shoot us a quick email with your Name and Contact number at hello@kutchinarapp.com and we will be happy to answer all your inquiries."}
  ];


  return (
    <div className="wrapper">
      {/* FAQs */}
      <Section
        titleClass="justicont__space__between"
        titleContent={
          <>
            <span className="section__title">FAQs</span>
            <span className="section__subTitle">Here are some of the frequently asked questions!</span>
          </>
        }
        bodyContent={
          <>
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

                { freqAskQues.map(ques => (
                  <Bar 
                    key={ques.key}
                    num={ques.key}
                    question={ques.question}
                    answer={ques.answer}
                  />
                )) }

              </div>
            </div>
          </>
        }
      />
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

export default AskUs
