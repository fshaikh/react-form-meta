import React from 'react';
import PropTypes from 'prop-types';

export default function LabelField(props) {
    const field = props.field;
    const requiredUI = field.required ? <span className="required">*</span> : '';
    return (
        <label className={props.className} htmlFor={field.name}>
            {field.label} 
            {requiredUI}
        </label> 
    );
}

LabelField.propTypes = {
    field: PropTypes.object.isRequired,
    className: PropTypes.string
}