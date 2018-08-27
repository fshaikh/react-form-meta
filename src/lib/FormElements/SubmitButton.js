import React from 'react';
import PropTypes from 'prop-types';

export default function SubmitButton(props) {
    const text = props.actionButton ? props.actionButton.text : "Submit";
    return (
        <div>
            <button onClick={props.onClick} className="btn btn-primary">{text}</button>
        </div>
    );
}

SubmitButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    actionButton: PropTypes.object
}