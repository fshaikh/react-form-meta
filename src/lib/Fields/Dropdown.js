import React from 'react';
import * as FieldControlFactory from '../FieldControlFactory';

export default function DropdownField(props) {
    const field = props.field;
    var index = 0;
    return (
        <select {...FieldControlFactory.getFieldAttributes("select", props)}>
            {field.enumNames.map((option) => {
                return <option key={option} value={field.enum[index++]}>{option}</option>
            })}
        </select>
    );
}