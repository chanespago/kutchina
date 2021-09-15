import React from 'react'
import Footer from '../components/Footer.js';
import Section from '../components/Section.js';
import Jumbotron from '../components/Jumbotron.js';
import TermsConditionsContainer from '../components/TermsConditionsContainer.js';

function TermsConditions() {
  return (
    <div className="wrapper">
      
      {/* Privacy Policy */}
      <Section
        titleClass="fdir__col"
        titleContent={
          <>
            <span className="section__title">Terms & Conditions</span>
          </>
        }
        bodyContent={
          <>
            <Jumbotron>
              {
                <TermsConditionsContainer />
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

export default TermsConditions
