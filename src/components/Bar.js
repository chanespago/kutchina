import React from 'react'

function Bar(props) {
  return (
    <div className="bar">
      <div className="bar__number">
        <span>{props.num}</span>
      </div>
      <div className="bar__details">
        <div className="bar__question">
          {props.question}
        </div>
        <div className="bar__answer">
          {props.answer}
        </div>
      </div>
    </div>
  )
}

export default Bar
