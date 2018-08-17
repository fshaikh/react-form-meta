import React from 'react';
import LabelField from './LabelField'

export default function CheckBoxField(props) {
    const field = props.field;
    return (
        <div className="form-check">
            <input type="checkbox"
                    className="form-check-input"
                    value={props.value}
                    name={field.name}
                    id={field.name}
                    onChange = { (event) => props.onChange(event, field.name, event.target.checked)} />
            <LabelField field={field} />
        </div>
        
    );
}