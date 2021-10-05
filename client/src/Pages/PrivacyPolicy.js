import React from 'react'
import Footer from '../components/Footer.js';
import Section from '../components/Section.js';
import Jumbotron from '../components/Jumbotron.js';
import PolicyContainer from '../components/PolicyContainer.js';

function PrivacyPolicy() {
  return (
    <div className="wrapper">
      
      {/* Privacy Policy */}
      <Section
        titleClass="fdir__col"
        titleContent={
          <>
            <span className="section__title">Privacy Policy</span>
          </>
        }
        bodyContent={
          <>
            <Jumbotron>
              {
                <PolicyContainer />
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

export default PrivacyPolicy
