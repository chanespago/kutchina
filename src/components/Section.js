import React from 'react'
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import Menu from '../Pages/Menu.js';

import '../assets/css/section.css'

function Section(props) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/menu" exact>
          <Menu />
        </Route>
      </Switch>
      <section>
        <div className="sect__header">
          <div className="wrap">
            <div className={`title__wrap ${props.titleClass}`}>
              {props.titleContent}
            </div>
          </div>
        </div>
        <div className="sect__body">
          <div className="wrap">
            <div className="body__wrap">{props.bodyContent}</div>
          </div>
        </div>
      </section>
    </HashRouter>
  )
}

export default Section
