import React from 'react'

import Section from '../components/Section'
import Footer from '../components/Footer'
import Track from '../components/Track'

function OrderTrack() {
  return (
    <div className="wrapper">
      {/* Contact Us */}
      <Section
        titleClass="fdir__col"
        titleContent={
          <>
            <span className="section__title">Where's my Order?</span>
          </>
        }
        bodyContent={
          <>
            <Track />
          </>
        }
      />

      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default OrderTrack
