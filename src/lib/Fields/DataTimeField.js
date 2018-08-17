import React from 'react';


export default function DateTimeField(props) {
    const field = props.field;
    return (
            <div>
                <input type="date" className="form-control"
                    value={props.value}
                    name={field.name}
                    onChange = { (event) => props.onChange(event, field.name)}
                />
            </div>
    );
}