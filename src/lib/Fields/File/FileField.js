import React from 'react';
import * as FieldControlFactory from '../../FieldControlFactory';

export const FileField = ({field, onChange, onFocus}) =>{
    return (
        <div>
            <input {...FieldControlFactory.getFieldAttributes('file', field)}
                   onChange = {onChange}
                   multiple={field.field.multiple || false} />              
        </div>
    );
};