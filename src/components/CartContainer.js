import React, { useState,useEffect } from 'react'
import {addtocart} from './addtocart.js';

function CartContainer(props) {

    const[itemPrice, setItemPrice] = useState(Number(addtocart[props.KeyValue].transPrice).toFixed(2));
    const[prodQty, setProdQTY] = useState(addtocart[props.KeyValue].prodQTY);

    let subTotal_Var=0;
    let total_Var=0;

    useEffect(() => {

        for(let i=0;i<addtocart.length;i++)
        {
            subTotal_Var = Number(addtocart[i].transPrice) + Number(subTotal_Var);
        }
        total_Var = subTotal_Var + 75;

        props.setSubtotal(Number(subTotal_Var).toFixed(2));
        props.setTotal(Number(total_Var).toFixed(2));
    }, [])

    const addQTY = () => {
               
        addtocart[props.KeyValue].prodQTY++;
        addtocart[props.KeyValue].transPrice = addtocart[props.KeyValue].prodQTY * addtocart[props.KeyValue].prodPrice;

        setItemPrice(Number(addtocart[props.KeyValue].transPrice).toFixed(2));
        setProdQTY(addtocart[props.KeyValue].prodQTY);

        for(let i=0;i<addtocart.length;i++)
        {
            subTotal_Var=Number(addtocart[i].transPrice) + Number(subTotal_Var);
        }
        total_Var = subTotal_Var + 75;
        
        props.setSubtotal(Number(subTotal_Var).toFixed(2));
        props.setTotal(Number(total_Var).toFixed(2));
    }

    const subQTY = () => {

        if (addtocart[props.KeyValue].prodQTY > 0) {
            addtocart[props.KeyValue].prodQTY--;
            addtocart[props.KeyValue].transPrice = addtocart[props.KeyValue].transPrice - addtocart[props.KeyValue].prodPrice;

            setItemPrice(Number(addtocart[props.KeyValue].transPrice).toFixed(2));
            setProdQTY(addtocart[props.KeyValue].prodQTY);
            
            for(let i=0;i<addtocart.length;i++)
            {
                subTotal_Var=Number(addtocart[i].transPrice) + Number(subTotal_Var);
            }
            total_Var = subTotal_Var + 75;
            
            props.setSubtotal(Number(subTotal_Var).toFixed(2));
            props.setTotal(Number(total_Var).toFixed(2));
        } 
    }

    return (
        <div className="cart__container" key={props.KeyValue}>
            <div className="cart__img">
                <img src={props.ImgSrc} alt={props.ImgSrc} className="cart__image"/>
            </div>
            <div className="cart__content">
                <span>{props.ProdName}</span>
                <div className="cart__dets">
                    <span>PHP {itemPrice}</span>
                    <div className="cart__qty">
                        <span onClick={subQTY}>-</span>
                        <label>{prodQty}</label>
                        <span className="btn" onClick={addQTY}>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContainer
