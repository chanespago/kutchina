import React, {useState} from 'react'
import { HashRouter , Switch, Route, Link } from "react-router-dom";
import ReactModal from 'react-modal';

import Home from '../Pages/Home.js';
import Menu from '../Pages/Menu.js';
import CheckOut from '../Pages/CheckOut.js';

import '../assets/css/navbar.css';
import OrderTrack from '../Pages/OrderTrack.js';

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
      </Switch>

      <ReactModal 
          isOpen={showModal}
          contentLabel="Kutchina Cart"
          className="Modal"
          overlayClassName="Overlay"
          onRequestClose={handleCloseModal}
      >
        <div id="cart">
          <div className="cart__header">
            <span id="cart__title">My Cart</span>
            <span onClick={handleCloseModal}><i className='bx bx-x'></i></span>
          </div>
          <div className="cart__body">
            <span id="cart__empty">You do not have an order yet.</span>
            <div id="cart__items">

            </div>
          </div>
          <div className="cart__footer">
            <div id="subTotal" className="info__div">
              <span className="checkOut__info">Sub Total</span>
              <span>PHP 9999.99</span>
            </div>
            <br/>
            <div id="taxInclusion" className="info__div">
              <span className="checkOut__info">Value Added Tax</span>
              <span>PHP 0</span>
            </div>
            <div id="deliveryFee" className="info__div">
              <span className="checkOut__info">Delivery Fee</span>
              <span>PHP 0</span>
            </div>
            <div id="totalAmount" className="info__div">
              <span className="checkOut__total">Total Amount</span>
              <span className="checkOut__total">PHP 9999.99</span>
            </div>
            <br/>
            <div className="btn__checkOut">
              <Link to="/checkout" id="btn-checkOut">Checkout</Link>
            </div>
          </div>
        </div>
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
