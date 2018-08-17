import React from 'react';

export default function LabelField(props) {
    const field = props.field;

    if(field.required) {
        return <label className={props.className} htmlFor={field.name}>
                    {field.label} 
                    <span className="required">*</span>
                </label>
    }else{
        return <label className={props.className} htmlFor={field.name}>
                    {field.label} 
                </label>
    }
    
}