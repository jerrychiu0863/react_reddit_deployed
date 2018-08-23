import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, className }) => {
    return(
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
    classNane: PropTypes.string
} 

export default Button;