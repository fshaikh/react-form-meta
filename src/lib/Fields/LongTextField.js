import React from 'react';
import * as FieldControlFactory from '../FieldControlFactory';

export default function LongTextField(props) {
    return (
            <div>
                <textarea {...FieldControlFactory.getFieldAttributes('textarea', props)} />
            </div>
    );
}