import React from 'react';
import * as FieldControlFactory from '../FieldControlFactory';

export default function DateTimeField(props) {
    return (
            <div>
                <input {...FieldControlFactory.getFieldAttributes("date", props)} />
            </div>
    );
}