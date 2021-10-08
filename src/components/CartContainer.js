import React from 'react'

function CartContainer(props) {

    const { added, handleAddItemQuantity, handleRemoveItemQuantity } = props

    return (
        <div className="cart__container" key={added.key}>
            <div className="cart__img">
                <img src={added.prodImg} alt={added.prodAlt} className="cart__image"/>
            </div>
            <div className="cart__content">
                <span>{added.prodName}</span>
                <div className="cart__dets">
                    <span>PHP {added.prodPrice}</span>
                    <div className="cart__qty">
                        <span onClick={() => handleRemoveItemQuantity(added.key)}>-</span>
                        <label>{added.prodQTY}</label>
                        <span className="btn" onClick={() => handleAddItemQuantity(added.key)}>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContainer
