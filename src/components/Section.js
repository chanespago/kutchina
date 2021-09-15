import React from 'react'

import '../assets/css/section.css'


function Section(props) {
  return (
      <section>
        <div className="sect__header">
          <div className="wrap">
            <div className={`title__wrap ${props.titleClass}`}>
              {props.titleContent}
            </div>
          </div>
        </div>
        <div className="sect__body">
          <div className="wrap">
            <div className="body__wrap">{props.bodyContent}</div>
          </div>
        </div>
      </section>
  )
}

export default Section
