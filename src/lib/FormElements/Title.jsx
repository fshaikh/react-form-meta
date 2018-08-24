import React from 'react';
import PropTypes from 'prop-types';

export default function Title({title}) {
    return (
        <legend>{title}</legend>
    );
}

Title.propTypes = {
    title: PropTypes.string
};