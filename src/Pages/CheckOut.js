import React, {useState} from 'react'
import fireDB from '../util/firebase'

import Section from '../components/Section.js';
import Footer from '../components/Footer.js';
import CartContainer from '../components/CartContainer.js';

import {addtocart} from '../components/addtocart.js';
import { Link } from 'react-router-dom';

function CheckOut() {

  let tempCart = addtocart.filter(element => element.prodQTY !== 0);

  var myCurrentDate = new Date();
  var firstCut = myCurrentDate.getFullYear()
  var secondCut = Number((myCurrentDate.getMonth()+1)).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                  }) + '' + Number(myCurrentDate.getDate()).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                  })
  var thirdCut = Number(myCurrentDate.getHours()).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                  }) + '' + Number(myCurrentDate.getMinutes()).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                  }) + '' + Number(myCurrentDate.getSeconds()).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                  })

  const transactionID = "ktchnrpp-"+ firstCut + '-' + secondCut + '-'+ thirdCut;

  const[subTotal,setSubtotal] = useState(0);
  const[total,setTotal] = useState(0);

  const [option,setOption] = useState('cod');
  const[checked,setChecked] = useState("checked");

  const[fullName,setFullName] = useState();
  const[emailAdd,setEmailAdd] = useState();
  const[contactNum,setContactNum] = useState();
  const[address1,setAddress1] = useState();
  const[address2,setAddress2] = useState();
  const[paymentDetails,setPaymentDetails] = useState("N/A");

  const handleChange = (event) => {
    setOption(event.target.value)
  }
  const handleContactNum = (event) => {
    let getText = "+639" + event.target.value;
    setContactNum(getText)
  }

  const handleTick = () => setChecked(!checked)
  const handleName = (event) => setFullName(event.target.value)
  const handleEmailAdd = (event) => setEmailAdd(event.target.value)
  const handleAddress1 = (event) => setAddress1(event.target.value)
  const handleAddress2 = (event) => setAddress2(event.target.value)
  const handlePaymentDetails = (event) => setPaymentDetails(event.target.value)

  const getData = () => {
    
    const data = {
      dataTransactionID : transactionID,
      dataFullName : fullName,
      dataEmailAdd : emailAdd,
      dataContactNum : contactNum,
      dataAddress1 : address1,
      dataAddress2 : address2,
      dataPaymentMethod : option,
      dataPaymentDetails : paymentDetails,
      dataOrderItems : tempCart,
      dataSubtotal : subTotal,
      dataTotal : total,
      dataStatus : 0
    }
    fireDB.push(data)

    addtocart.length = 0;
  }

  return (
    <div className="wrapper">
      <Section
        titleClass="fdir__col"
        titleContent={
          <>
            <span className="section__title">Get your order ready!</span>
          </>
        }
        bodyContent={
          <>
            <div id="checkout_form">
              <div id="checkout_container">
                <div id="personal_information" className="checkout__information">
                  <span>Personal Details</span>
                  <label>Full Name</label>
                  <input type="text" placeholder="Last Name, Given Name M.I" className="checkout__input" onChange={handleName}/>
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" className="checkout__input" onChange={handleEmailAdd}/>
                  <label>Contact Number</label>
                  <span className="checkout__input" >
                    <label>+63 9</label>
                    <input type="text" placeholder="X-XXXX-XXXX" onChange={handleContactNum}/>  
                  </span>
                </div>
                <div id="delivery_information" className="checkout__information">
                  <span>Delivery Details</span>
                  <label>Address 1</label>
                  <input type="text" placeholder="House No., Street, Village/Subdivision, Barangay " className="checkout__input" onChange={handleAddress1}/>
                  <label>Address 2</label>

                  <input type="text" placeholder="City" className="checkout__input" onChange={handleAddress2}/> 
                </div>
                <div id="payment_information" className="checkout__information">
                  <span>Payment Details</span>
                  <label>Payment Method</label>
                  <select id='payment_option' onChange={handleChange}>
                    <option value="cod">Cash On Delivery (COD)</option>
                    <option value="gcash">GCash Payment</option>
                  </select>
                  {
                    option === 'gcash' ? (
                        <>
                          <div id="gcash_info">
                            <ol>
                              <li>Send payment to GCash number 0999-999-9999 </li>
                              <li>Enter GCash payment reference number below. </li>
                            </ol>
                          </div>
                          <input type="text" placeholder="GCash Payment Reference Number" onChange={handlePaymentDetails}/> 
                        </>
                      ) : null
                  }
                </div>
              </div>
              <div id="checkout_cart">
              {
                addtocart.length !== 0 ? (
                <div className="cart__body">
                    <div id="cart__items">
                      {
                        addtocart.map((added,index) => (
                          <>
                            <CartContainer 
                              key={index}
                              KeyValue={index}
                              ImgSrc={added.prodImg}
                              ProdName={added.prodName}
                              ProdPrice={added.prodPrice}
                              ProdQty={added.prodQTY}
                              setSubtotal={setSubtotal}
                              setTotal={setTotal}
                            />
                          </>
                        ))
                      }
                    </div>
                  </div>
                   ) : null
                }
                <div id="checkout_summary">
                  <div id="subTotal" className="info__div">
                    <span className="checkOut__info">Sub Total</span>
                    <span>PHP {subTotal}</span>
                  </div>
                  <br/>
                  <div id="taxInclusion" className="info__div">
                    <span className="checkOut__info">Value Added Tax</span>
                    <span>PHP 0.00</span>
                  </div>
                  <div id="deliveryFee" className="info__div">
                    <span className="checkOut__info">Delivery Fee</span>
                    <span>PHP 75.00</span>
                  </div>
                  <div id="totalAmount" className="info__div">
                    <span className="checkOut__total">Total Amount</span>
                    <span className="checkOut__total">PHP {total}</span>
                  </div>
                  <br/>
                  <div id="agreement">
                    <label htmlFor="agree" className="container">
                      <input type="checkbox" id="agree" onChange={handleTick} checked={checked} />
                      <span>I agree to KUTCHINARAPP's 
                        <Link to="/privacy-policy" className="mb-4"> Privacy Policy</Link> and
                        <Link to="/terms-conditions" className="mb-4">Terms & Conditions</Link>
                      </span>
                    </label>
                  </div>
                  <br/>
                  {
                    checked ? (
                      <div className="btn__checkOut">
                        <Link   to={{
                                  pathname:"/order-successful",
                                  state: {
                                    id: transactionID
                                  }
                                }}
                                id="place_order" 
                                className="btn" 
                                onClick={getData}
                        >Place Order</Link>
                      </div>
                    ): null
                  }
                  
                </div>
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

export default CheckOut
