import React from 'react';

export default function LongTextField(props) {
    const field = props.field;
    return (
            <div>
                <textarea className="form-control"
                    value={field.value}
                    name={field.name}
                    onChange = { (event) => props.onChange(event, field.name)}
                />
            </div>
    );
}