import React from 'react';
import PropTypes from 'prop-types';

export default function LabelField(props) {
    const field = props.field;
    const requiredUI = isRequired(field) ? <span className="required">*</span> : '';
    const showLabel = field.showLabel === undefined ? true : field.showLabel;

    if(showLabel) {
        return (
            <label className={props.className} htmlFor={field.name}>
                {field.label} 
                {requiredUI}
            </label> 
        );
    }
    return '';
}

const isRequired = (field) => {
    const required = Object.keys(field.validators).find((value) => value === 'required');
    if(required == null) {
        return false;
    }
    return field.validators[required].args[0] === true;
}

LabelField.propTypes = {
    field: PropTypes.object.isRequired,
    className: PropTypes.string
}