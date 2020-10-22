import React from 'react'
import './button.scss'

import * as ReactIs from 'react-is';
const deepClone = require('clone-deep')

const Button = ({message = 'Hello world'}) => {
    return (
        <>
        <pre>{JSON.stringify(ReactIs.isElement(<div />))}</pre>
        <button>{deepClone(message)}</button>
        </>
    )
}

export default Button
