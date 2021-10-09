import React from 'react'

function Temporary() {
    return (
        <div id="maintenance_container">
          <div id="maintenance_image">
            <img className="maintenance__img" src="https://res.cloudinary.com/chanespago/image/upload/v1633800243/kutchinarapp/maintenance_pmglba.jpg" alt="maintenance" />
          </div>
          <div id="maintenance_details">
            <span className="p__header">We'll be serving you soon!</span>
            <p><span>kutchinarapp </span> is currently under going sheduled maintenance. <br/>Sorry for the inconvinience. </p>
          </div>
        </div>
        )
}

export default Temporary
