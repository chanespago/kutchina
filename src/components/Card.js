import React from 'react'

import '../assets/css/card.css'

function Card(props) {
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
          <div className="product__add">
            <span className="add__border"><i className='bx bx-plus'></i></span>
            <span className="add__text">Add</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
