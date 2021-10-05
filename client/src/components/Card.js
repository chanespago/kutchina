import React from 'react'
import {addtocart} from './addtocart.js';
import {products} from './items.js';

function Card(props) {

  const AddtoCart = e => () => {

    for (let i = 0; i < products.length; i++) {
      if (products[i].key === e) {
        addtocart.push(products[i]);
      }
    }
    // addtocart.push(e);

    console.log(addtocart)
  }

  return (
    <>
      <div className="product">
        <div className="product__image">
          <img src={props.cardImg} alt={props.cardAltImg} />
        </div>
        <div className="product__content">
          <span className="product__name">{props.cardInfo}</span>
          <span className="product__info"></span>
        </div>
        <div className="product__footer">
          <span className="product__price">PHP {props.cardPrice}</span>
          <div className="product__add" id={props.id} onClick={AddtoCart(props.id)}>
            <span className="add__border"><i className='bx bx-plus'></i></span>
            <span className="add__text">Add</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
