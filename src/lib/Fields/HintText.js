import React from 'react';
import PropTypes from 'prop-types';
import './HintText.css'

/**
 * Presentational component for showing hint text for a form field
 * @param {*} hintText - Hint text to show under a form field 
 */
const HintText = ({hintText}) => {
    return (
        <p className="hint-text">
            {hintText}
        </p>
    );
};

// Define Prop types
HintText.propTypes = {
    hintText: PropTypes.string
};

// exports go here
export default HintText;

