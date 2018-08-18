import React from 'react';

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