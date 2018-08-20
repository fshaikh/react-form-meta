import React from 'react';
import LabelField from './LabelField';
import * as FieldControlFactory from '../FieldControlFactory';

export default function CheckBoxField(props) {
    return (
        <div className="form-check">
            <input {...FieldControlFactory.getFieldAttributes("checkbox", props,undefined, undefined,"form-check-input")}
                    onChange = { (event) => {
                                    event.stopPropagation();
                                    props.onChange(event, event.target.checked)}
                                } 
                    onFocus = {
                        (event) => {
                            event.stopPropagation();
                            props.onFocus(event, event.target.checked)}
                    }/>
            <LabelField field={props.field} />
        </div>
        
    );
}