import React from 'react'
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import Menu from '../Pages/Menu.js';

import '../assets/css/main.css'
import '../assets/css/home.css'

function Home() {
  

  return (
    <HashRouter  >

      <Switch>
        <Route path="/menu" exact>
          <Menu />
        </Route>
      </Switch>
      
      <div className="wrapper">

        <section className="sect__transp">
          <div id="title__wrap" className="wrap">
            <span className="section__title">Explore Filipino Cuisine more</span>
            <span className="btn__Order">Order Now</span>
          </div>
          <div className="div__opaq"></div>
        </section>

        <section className="sect__transp">
          <div id="topDeal__wrap" className="wrap">
            <span>Top Picks</span>
            <div id="deal__nav">
              <Link to="/menu">View Menu</Link>
              <span><i className='bx bx-chevron-left' ></i></span>
              <span><i className='bx bx-chevron-right' ></i></span>
            </div>
          </div>
        </section>

      </div>
    </HashRouter >
  )
}

export default Home
