import React from 'react';


export default function DropdownField(props) {
    const field = props.field;
    var index = 0;
    return (
        <select id={field.name}
                name={field.name}
               className="form-control"
               onChange = { (event) => props.onChange(event, field.name, event.target.selected)} >
            {field.enumNames.map((option) => {
                return <option key={option} value={field.enum[index++]}>{option}</option>
            })}
        </select>
    );
}