import React from 'react';
import PropTypes from 'prop-types';

export default function SubmitButton(props) {
    return (
        <div>
            <button onClick={props.onClick} className="btn btn-primary">Submit</button>
        </div>
    );
}

SubmitButton.propTypes = {
    onClick: PropTypes.func.isRequired
}