import React from 'react'

import '../assets/css/menu.css'

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import Footer from '../components/Footer.js';

function Menu(props) {

  const {handleAddtoCart, products, handleRemovetoCart} = props

  return (
    <div className="wrapper">
      <Section
        titleClass="fdir__col"
        titleContent={
          <>
            <span className="section__title">Our Menu</span>
          </>
        }
        bodyContent={
          <>
            {/* Menu Container */}
            <div className="menu__container">
              <div className="menu__body">
                { products.map(product => (
                    <Card key={product.key} product={product} handleAddtoCart={handleAddtoCart} handleRemovetoCart={handleRemovetoCart}/>
                  ) ) }
              </div>
            </div>
          </>
        }
      />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Menu
