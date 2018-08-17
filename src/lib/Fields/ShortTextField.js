import React from 'react';



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
                <input type={type} className="form-control"
                    defaultValue = { props.value }
                    name = { field.name }
                    onChange = { (event) =>{  props.onChange(event, field.name)}}
                />
            </div>
    );
}