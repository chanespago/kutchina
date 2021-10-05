import React from 'react';

import Section from '../components/Section.js';
import Bar from '../components/Bar.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron.js';

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
        titleClass="fdir__col"
        titleContent={
          <>
            <span className="section__title">FAQs</span>
            <span className="section__subTitle">Here are some of the frequently asked questions!</span>
          </>
        }
        bodyContent={
          <>
            <Jumbotron>

                { freqAskQues.map(ques => (
                  <Bar 
                    key={ques.key}
                    num={ques.key}
                    question={ques.question}
                    answer={ques.answer}
                  />
                )) }

            </Jumbotron>
          </>
        }
      />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AskUs
