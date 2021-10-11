import React from 'react'
import { Link } from "react-router-dom";
import data from '../components/data.js';

import Section from '../components/Section.js';
import Footer from '../components/Footer';
import Display from '../components/Display';


function Home() {

  const {products} = data;
  const topPicks = [...products.filter((x) => x.pick !== 'no')];

  return (
        <div className="wrapper">
          {/* Header */}
          <Section 
            titleClass="fdir__col"
            titleContent={
              <>
              <span className='section__title'>Explore more Filipino Cuisine</span>
              <span className='btn btn__Order'><Link to='/menu'>Order Now</Link></span>
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
                    <Display 
                      key={pick.key}
                      id={pick.key}
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
          <Footer />

        </div>
  )
}

export default Home
