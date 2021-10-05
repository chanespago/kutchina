import React from 'react'

function StatusBall(props) {

    const renderElements = () => {
        if(Number(props.ballStatus) >= Number(props.ballIndex)) {
            return (<div className='track__info enabled'>{props.children}</div>)
        }else{
            return (<div className='track__info disabled'>{props.children}</div>)
        }
    }

    return (
        <>
            {renderElements()}
        </>
    )
}

export default StatusBall
