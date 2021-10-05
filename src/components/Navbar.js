import React, {useState} from 'react'
import { HashRouter , Switch, Route, Link } from "react-router-dom";
import ReactModal from 'react-modal';

import Home from '../Pages/Home.js';
import Menu from '../Pages/Menu.js';
import CheckOut from '../Pages/CheckOut.js';
import OrderTrack from '../Pages/OrderTrack.js';
import AskUs from '../Pages/AskUs.js';
import ContactUs from '../Pages/ContactUs.js';
import PrivacyPolicy from '../Pages/PrivacyPolicy.js';
import TermsConditions from '../Pages/TermsConditions.js';
import ScrollToTop from './ScrollToTop.js';
import Cart from './Cart.js';
import {addtocart} from '../components/addtocart.js';
import Transaction from '../Pages/Transaction.js';


ReactModal.setAppElement('#root');
function Navbar() {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }
  
  return (
    <HashRouter >
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/track-order" exact>
          <OrderTrack />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/checkout">
          <CheckOut />
        </Route>
        <Route path="/ask-us">
          <AskUs />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-conditions">
          <TermsConditions />
        </Route>
        <Route path="/order-successful">
          <Transaction />
        </Route>
      </Switch>

      <ReactModal 
          isOpen={showModal}
          contentLabel="Kutchina Cart"
          className="Modal"
          overlayClassName="Overlay"
          onRequestClose={handleCloseModal}
      >
        <Cart 
          handleCloseModal = {handleCloseModal}
          cartItems = {addtocart}
        />
      </ReactModal>

      <nav>
        <div className="logo">
          <Link to="/">kutchinarapp</Link>
        </div>
        <ul className="nav__links">
          <li className="nav__item">
            <Link to="/track-order">Track Order</Link>
          </li>
          <li className="nav__item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="nav__item" onClick={handleOpenModal}>
            <span>
              <i className='bx bxs-shopping-bag'></i>
            </span>
          </li>
        </ul>
      </nav>
    </HashRouter >
  )
}

export default Navbar
