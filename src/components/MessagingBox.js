import React from 'react'

function MessagingBox(props) {
    return (
        <div className="alert">
            {props.children}
        </div>
    )
}

export default MessagingBox
