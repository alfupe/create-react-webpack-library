import * as React from 'react';
import './ts-button.scss';

// import {Button as AntButton} from 'antd';
// import {BaseButtonProps} from 'antd/lib/button/button';
//
// console.log('BaseButtonProps', BaseButtonProps);
//
// class TSUIComponent extends React.Component {
//
// };
//
// class TSUIComponentAntWrapper extends TSUIComponent {
//     wrappedComponent = null;
//     wrappedInterface = null;
// }
//
// class TSUIComponentAntButton extends TSUIComponentAntWrapper {
//
//     wrappedComponent = AntButton;
//
// }



const TSButton = ({message = 'Hello typescript'}) => {
    return (
        <button>{message}</button>
    )
}

export default TSButton
