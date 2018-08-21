import React from 'react';
import * as FieldControlFactory from '../../FieldControlFactory';

export const FileField = ({field, value, onChange, onFocus}) =>{
    return (
        <div>
            <input {...FieldControlFactory.getFieldAttributes('file', field, undefined, value, "custom-file-input")}
                   onChange = {onChange}
                   multiple={field.field.multiple || false}
                   accept={field.field.allowedExtensions ? field.field.allowedExtensions.join() : undefined} />
            <label className="custom-file-label" htmlFor={field.field.name}>Choose file</label>              
        </div>
    );
};