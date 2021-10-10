import React from "react";

import Navbar from "./components/Navbar";
import Maintenance from "./Pages/Maintenance";

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
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
import { toast } from "react-toastify";

toast.configure()
function App() {
  return (
    <>
      <Maintenance />
      {/* <Navbar /> */}
    </>

  );
}

export default App;
