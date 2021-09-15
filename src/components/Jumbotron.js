import React from 'react'
import { Link } from 'react-router-dom'

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <div className="jumbotron__nav">
        <Link to="/">
          <span className="jumbotron__nav__icon"><i className='bx bx-left-arrow-alt' ></i></span>
        </Link>
        <Link to="/">
          <span className="jumbotron__nav__label">Back</span>
        </Link>
      </div>
      <div className="jumbotron__body">

        {props.children}

      </div>
    </div>
  )
}

export default Jumbotron
