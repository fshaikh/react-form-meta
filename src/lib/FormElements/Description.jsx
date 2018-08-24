import React from 'react';
import PropTypes from 'prop-types';

export default function Description(props) {
    return (
        <p className="field-description">{props.description}</p>
    )
}

Description.propTypes = {
    description: PropTypes.string
};