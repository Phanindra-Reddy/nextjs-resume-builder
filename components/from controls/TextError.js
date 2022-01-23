import React from 'react'

function TextError(props) {
    return (
        <span style={{color:"red"}}>
            {props.children}
        </span>
    )
}

export default TextError
