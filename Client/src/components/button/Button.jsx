import React from "react";

import PropTypes from 'prop-types';
import './button.scss';


const Button = props => {

    return (
        <div 
            className={`button ${props.className}`}
            onClick={props.onClick ? props.onClick() : null}
        >
            {props.children}
        </div>
    );
}

export const ButtonOutLine = props => {

    return (
        <Button
            className={`button-outline ${props.className}`}
            onClick={props.onClick ? props.onClick() : null}
        >
            {props.children}
        </Button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;