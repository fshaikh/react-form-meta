import React from 'react';
import * as FieldControlFactory from '../FieldControlFactory';


export default function ShortTextField(props) {
    const field = props.field;
    var type = 'text';
    switch(field.type) {
        case 'Number':
            type = 'number';
            break;
        case 'Email':
            type = 'email';
            break;
        case 'Password':
            type = 'password';
            break;
        default:
            type = 'text';
    };

    return (
            <div>
                <input {...FieldControlFactory.getFieldAttributes(type, props)} />
            </div>
        );
}