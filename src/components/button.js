import React from 'react'
import './button.css'

export const AndButton = (props) => {
    return <button className={props.style}>{props.children}</button>
}
