import React from 'react';
import * as FieldControlFactory from '../../FieldControlFactory';

/**
 * Presentational component for File control
 * @param {*} field - Field control
 * @param {* string} value - Field default value 
 */
export const FileField = ({field, value, onChange, onFocus}) =>{
    return (
        <div>
            <input {...FieldControlFactory.getFieldAttributes('file', field, undefined, value, "custom-file-input")}
                   onChange = {onChange}
                   multiple={field.field.multiple || false}
                   accept={field.field.allowedExtensions ? field.field.allowedExtensions.join() : undefined} />
            <label className="custom-file-label" htmlFor={field.field.name}>{value === '' ? 'Choose File': value}</label>              
        </div>
    );
};