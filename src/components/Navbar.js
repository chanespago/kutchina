import React, {useState, useEffect} from 'react'
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
import Transaction from '../Pages/Transaction.js';
import {addtocart} from '../components/addtocart.js';
import data from './data.js';


ReactModal.setAppElement('#root');
function Navbar() {

  const {products} = data;

  const[showModal, setShowModal] = useState(false);
  const[clicked, setClicked] = useState();
  const[cartItems, setCartItems] = useState([]);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleAddtoCart = (item) => {
    const itemIndex = products.find((x) => x.key === item)
    setCartItems([...cartItems, {...itemIndex, triggered: itemIndex.triggered = true}]);
    console.log(products)
  }

  const handleAddItemQuantity = (item) => {
    const itemIndex = cartItems.find((x) => x.key === item)
    if (itemIndex) {
      setCartItems(
        cartItems.map((x) =>
        x.key === item ? {...itemIndex, prodQTY: itemIndex.prodQTY + 1} : x
        )
    )}
    console.log(cartItems)
  }

  const handleRemoveItemQuantity = (item) => {
    const itemIndex = cartItems.find((x) => x.key === item)
    if(itemIndex.prodQTY === 1){
      setCartItems(cartItems.filter((x) => x.key !== item))
      let prodIndex = products.find((x) => x.key === item)
      prodIndex.triggered = false;
      console.log(products)
    } else {
      if (itemIndex) {
        setCartItems(
          cartItems.map((x) =>
          x.key === item ? {...itemIndex, prodQTY: itemIndex.prodQTY - 1} : x
          )
      )}
    }
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
        <Route path="/menu" exact>
          <Menu 
            products={products}
            handleAddtoCart={handleAddtoCart}
            />
        </Route>
        <Route path="/checkout" exact>
          <CheckOut 
            cartItems={cartItems}
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
          <Link to="/">kutchinarapp</Link>
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
    </HashRouter >
  )
}

export default Navbar
