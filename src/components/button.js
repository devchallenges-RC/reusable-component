import React from 'react'
import './button.css'
import Button from '@mui/material/Button'

export const AndButton = (props) => {
    return <Button className={props.style}>{props.children}</Button>
}
