import React, { useState } from 'react'
import { toast } from "react-toastify";

import Home from './Pages/Home.js';
import Menu from './Pages/Menu.js';
import CheckOut from './Pages/CheckOut.js';
import OrderTrack from './Pages/OrderTrack.js';
import AskUs from './Pages/AskUs.js';
import ContactUs from './Pages/ContactUs.js';
import PrivacyPolicy from './Pages/PrivacyPolicy.js';
import TermsConditions from './Pages/TermsConditions.js';
import Maintenance from './Pages/Maintenance.js';
import Transaction from './Pages/Transaction.js';
import ScrollToTop from './components/ScrollToTop.js';
import Navbar from './components/Navbar.js';
import Cart from './components/Cart.js';

import data from './components/data.js';
import ReactModal from 'react-modal';

import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import './assets/css/askus.css'
import './assets/css/card.css'
import './assets/css/contactus.css'
import './assets/css/context.css'
import './assets/css/footer.css'
import './assets/css/home.css'
import './assets/css/main.css'
import './assets/css/navbar.css'
import './assets/css/section.css'
import './assets/css/cart.css'
import './assets/css/track.css'
import './assets/css/checkout.css' 
import './assets/css/success.css'
import './assets/css/maintenance.css'
import './assets/css/login.css'


toast.configure()

function App() {
  const {products} = data;

    const[cartItems, setCartItems] = useState([]);
    const[showModal, setShowModal] = useState(false);
    const websiteStatus = 1; //0:maintenance;1:working
    
    const handleOpenModal = () => {
        setShowModal(true);
      }
    
      const handleCloseModal = () => {
        setShowModal(false);
      }
      
    const handleAddtoCart = (item) => {
      const itemIndex = products.find((x) => x.key === item)
      setCartItems([...cartItems, {...itemIndex, triggered: itemIndex.triggered = true}]);
    }
    
    const handleRemovetoCart = (item) => {
      setCartItems(cartItems.filter((x) => x.key !== item))
      let prodIndex = products.find((x) => x.key === item)
      prodIndex.triggered = false;
    }
    
    
    const handleAddItemQuantity = (item) => {
      const itemIndex = cartItems.find((x) => x.key === item)
      if (itemIndex) {
        setCartItems(
          cartItems.map((x) =>
          x.key === item ? {...itemIndex, prodQTY: itemIndex.prodQTY + 1} : x
          )
      )}
    }
    
    const handleRemoveItemQuantity = (item) => {
      const itemIndex = cartItems.find((x) => x.key === item)
      if(itemIndex.prodQTY === 1){
        setCartItems(cartItems.filter((x) => x.key !== item))
        let prodIndex = products.find((x) => x.key === item)
        prodIndex.triggered = false;
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
      <>
      {
        websiteStatus ? 
        <Navbar 
          products={products}
          showModal={showModal}
          cartItems={cartItems}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          handleAddtoCart={handleAddtoCart}
          handleRemovetoCart={handleRemovetoCart}
          handleAddItemQuantity={handleAddItemQuantity}
          handleRemoveItemQuantity={handleRemoveItemQuantity}
        /> : <Maintenance />
      }
      </>
    );
  }

export default App;
