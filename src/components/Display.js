import React from 'react'
import { Link } from "react-router-dom";

function Display(props) {

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
              <div id="displayBtn">
                  <Link to='/menu'>
                    <label>View </label>
                    <i className='bx bx-right-arrow-alt'></i>
                  </Link>
              </div>
            </div>
          </div>
        </>
      )
}

export default Display
