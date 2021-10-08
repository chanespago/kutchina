import React from 'react'

function Card(props) {

  const {product, handleAddtoCart} = props

  return (
    <>
      <div className="product">
        <div className="product__image">
          <img src={product.prodImg} alt={product.prodAlt} />
        </div>
        <div className="product__content">
          <span className="product__name">{product.prodName}</span>
          <span className="product__info"></span>
        </div>
        <div className="product__footer">
          <span className="product__price">PHP {product.prodPrice}</span>
          {
            product.triggered ? (
              <div className="product__add">
                <span className="add__border bg__trigger"><i className='bx bx-check'></i></span>
                <span className="add__text">Added</span>
              </div> ) : (
              <div className="product__add" onClick={()=>handleAddtoCart(product.key)}>
                <span className="add__border bg__theme"><i className='bx bx-plus'></i></span>
                <span className="add__text">Add</span>
              </div> )
          }

        </div>
      </div>
    </>
  )
}

export default Card
