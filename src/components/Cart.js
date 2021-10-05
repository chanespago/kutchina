import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {addtocart} from './addtocart';
import CartContainer from './CartContainer';

function Cart(props) {

    const[subTotal,setSubtotal] = useState(0);
    const[total,setTotal] = useState(0);
    
    const cleanCheckout = () => {
        let tempCart = addtocart.filter(element => element.prodQTY !== 0)
        addtocart.length = 0;

        for (let i = 0; i < tempCart.length; i++) {
            addtocart.push(tempCart[i]);
          }
        console.log(addtocart)
    }

    return (
        <>
            <div id="cart">
                <div className="cart__header">
                    <span id="cart__title">My Cart</span>
                    <span onClick={props.handleCloseModal}><i className='bx bx-x'></i></span>
                </div>

                <div className="cart__body">
                    {
                        addtocart.length !== 0 ? (
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
                        ) : (
                            <span id="cart__empty">You do not have an order yet.</span>
                        )
                    }
                </div>

                {
                    addtocart.length !== 0 ? (
                        <div className="cart__footer">
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
                            <div className="btn__checkOut">
                                {/* <button id="btn-checkOut" onClick={cleanCheckout}>CheckOut</button> */}
                                <Link to="/checkout" id="btn-checkOut" onClick={cleanCheckout} >Checkout</Link>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }
                
            </div>
        </>
    )
}

export default Cart
