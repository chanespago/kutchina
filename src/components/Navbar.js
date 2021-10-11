import React from 'react'
import ReactModal from 'react-modal';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../Pages/Home.js';
import Menu from '../Pages/Menu.js';
import CheckOut from '../Pages/CheckOut.js';
import OrderTrack from '../Pages/OrderTrack.js';
import AskUs from '../Pages/AskUs.js';
import ContactUs from '../Pages/ContactUs.js';
import PrivacyPolicy from '../Pages/PrivacyPolicy.js';
import TermsConditions from '../Pages/TermsConditions.js';
import Maintenance from '../Pages/Maintenance.js';
import Transaction from '../Pages/Transaction.js';
import ScrollToTop from './ScrollToTop.js';
import Cart from './Cart.js';

ReactModal.setAppElement('#root');
function Navbar(props) {

  const {
    products,
    cartItems,
    showModal,
    handleAddtoCart,
    handleRemovetoCart,
    handleAddItemQuantity,
    handleRemoveItemQuantity,
    handleOpenModal,
    handleCloseModal
  } = props;
  
  return (
    <Router >
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/track-order" exact>
            <OrderTrack />
          </Route>
          <Route path="/menu" exact>
            <Menu 
              products={products}
              handleAddtoCart={handleAddtoCart}
              handleRemovetoCart={handleRemovetoCart}
              />
          </Route>
          <Route path="/checkout" exact>
            <CheckOut 
              cartItems={cartItems}
              products={products}
              handleAddItemQuantity={handleAddItemQuantity}
              handleRemoveItemQuantity={handleRemoveItemQuantity}
              />
          </Route>
          <Route path="/ask-us" exact>
            <AskUs />
          </Route>
          <Route path="/contact-us" exact>
            <ContactUs />
          </Route>
          <Route path="/privacy-policy" exact>
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-conditions" exact>
            <TermsConditions />
          </Route>
          <Route path="/order-successful" exact>
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
          cartItems={cartItems}
          handleCloseModal={handleCloseModal}
          handleAddItemQuantity={handleAddItemQuantity}
          handleRemoveItemQuantity={handleRemoveItemQuantity}
        />
      </ReactModal>
      <nav>
        <div className="logo">
          <Link to="/"  onClick={handleCloseModal}>kutchinarapp</Link>
        </div>
        <ul className="nav__links">
          <li className="nav__item"  onClick={handleCloseModal}>
            <Link to="/track-order">Track Order</Link>
          </li>
          <li className="nav__item"  onClick={handleCloseModal}>
            <Link to="/menu">Menu</Link>
          </li>
          <li className="nav__item" onClick={handleOpenModal}>
            <span>
              <i className='bx bxs-shopping-bag'></i>
            </span>
          </li>
        </ul>
      </nav>
      </Router>
  );
}

export default Navbar
