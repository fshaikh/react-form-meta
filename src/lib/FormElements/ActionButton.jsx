import React from 'react';
import PropTypes from 'prop-types';

import './ActionButton.css'

export const ActionButton = (props) => {
    const className = `btn ${props.className}`;
    return (
            <button onClick={props.onClick} className={className}>{props.actionButton.text}</button>
    );
}

ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    actionButton: PropTypes.object,
    className: PropTypes.string
};  