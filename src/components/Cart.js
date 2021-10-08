import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {addtocart} from './addtocart';
import CartContainer from './CartContainer';

function Cart(props) {

    const { cartItems, handleCloseModal, handleAddItemQuantity, handleRemoveItemQuantity } = props
    const itemsPrice = cartItems.reduce((a,c) => a + c.transPrice * c.prodQTY, 0)
    const taxPrice = itemsPrice * 0.05;
    const shippingPrice = itemsPrice > 500 ? 0 : 50
    const totalPrice = itemsPrice + taxPrice + shippingPrice

    const[subTotal,setSubtotal] = useState(0);
    const[total,setTotal] = useState(0);

    useEffect(() => {

    }, [addtocart])
    
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
                    <span onClick={handleCloseModal}><i className='bx bx-x'></i></span>
                </div>

                <div className="cart__body">
                    {
                        cartItems.length !== 0 ? (
                            <div id="cart__items">
                                { cartItems.map((added) => (
                                    <CartContainer key={added.key} added={added} handleAddItemQuantity={handleAddItemQuantity} handleRemoveItemQuantity={handleRemoveItemQuantity} />
                                ))}
                            </div>
                        ) : (
                            <span id="cart__empty">You do not have an order yet.</span>
                        )
                    }
                </div>
                {
                    cartItems.length !== 0 ? (
                        <div className="cart__footer">
                            <div id="subTotal" className="info__div">
                                <span className="checkOut__info">Sub Total</span>
                                <span>PHP {Number(itemsPrice).toFixed(2)}</span>
                            </div>
                            <br/>
                            <div id="taxInclusion" className="info__div">
                                <span className="checkOut__info">Value Added Tax</span>
                                <span>PHP {Number(taxPrice).toFixed(2)}</span>
                            </div>
                            <div id="deliveryFee" className="info__div">
                                <span className="checkOut__info">Delivery Fee</span>
                                <span>PHP {Number(shippingPrice).toFixed(2)}</span>
                            </div>
                            <div id="totalAmount" className="info__div">
                                <span className="checkOut__total">Total Amount</span>
                                <span className="checkOut__total">PHP {Number(totalPrice).toFixed(2)}</span>
                            </div>
                            <br/>
                            <div className="btn__checkOut">
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
