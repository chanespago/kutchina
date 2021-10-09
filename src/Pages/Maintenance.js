import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Section from '../components/Section'
import Temporary from '../components/Temporary'

function Maintenance() {
    return (
        <HashRouter >
        <ScrollToTop />
        <Switch >
            <Route path="/" exact>
                <Temporary />
            </Route>
        </Switch>
        
        </HashRouter>
    )
}

export default Maintenance
