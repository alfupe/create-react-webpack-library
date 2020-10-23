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

/*import {Button as AntButton} from 'antd';

class TSUIComponent extends React.Component {

};

class TSUIComponentAntWrapper extends TSUIComponent {

    wrappedComponent = null;
    passThruProps = [];

    extractPassThruProps() {
        return Object.assign({}, ...this.passThruProps.map(prop => ({[prop]: this.props[prop]})));
    }

    render() {
        return React.createElement(this.wrappedComponent, this.extractPassThruProps());
    }

}

class TSUIComponentAntButton extends TSUIComponentAntWrapper {
    wrappedComponent = AntButton;
    passThruProps = ['onClick'];
}

const TSButton = ({message = 'Hello typescript'}) => {
    return (
        <TSUIComponentAntButton message={message} />
    )
}

export default TSButton*/
