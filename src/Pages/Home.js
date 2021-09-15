import React, {useEffect} from 'react'
import { Link } from "react-router-dom";


import '../assets/css/main.css'
import '../assets/css/home.css'

import Adobo from '../assets/images/adobo.jpg';
import Kaldereta from '../assets/images/kaldereta.jpg';
import Sinigang from '../assets/images/sinigang.jpg';
import KareKare from '../assets/images/karekare.jpg';

import Section from '../components/Section.js';
import Card from '../components/Card.js';


function Home() {
  
  const topPicks = [
    {key:'adobo', prodImg:Adobo, prodAlt:Adobo, prodName: 'Chicken Adobo', prodPrice: '130.00'},
    {key:'kaldereta', prodImg:Kaldereta, prodAlt:Kaldereta, prodName: 'Kaldereta', prodPrice: '180.00'},
    {key:'sinigang', prodImg:Sinigang, prodAlt:Sinigang, prodName: 'Sinigang', prodPrice: '210.00'},
    {key:'karekare', prodImg:KareKare, prodAlt:KareKare, prodName: 'Kare-kare', prodPrice: '180.00'}
  ];


  return (

      <div className="wrapper">
        {/* Header */}
        <Section 
          titleClass="fdir__col"
          titleContent={
            <>
            <span className='section__title'>Explore more Filipino Cuisine</span>
            <span className='btn__Order'><Link to='/menu'>Order Now</Link></span>
            </>
          }
          bodyContent=""
        />
        {/* Top Picks */}
        <Section
          titleClass="justicont__space__between"
          titleContent={
            <>
              <span className="section__subTitle">Top Picks</span>
              <Link to="/menu">View Menu</Link>
            </>
          }
          bodyContent={
            <>
              { topPicks.map(pick => (
                  <Card 
                    key={pick.key}
                    cardImg={pick.prodImg}
                    cardAltImg={pick.prodAlt}
                    cardInfo={pick.prodName}
                    cardPrice={pick.prodPrice}
                  />
                )) }
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

export default Home
