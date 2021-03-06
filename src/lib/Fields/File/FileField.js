import React from 'react';
import PropTypes from 'prop-types';
import * as FieldControlFactory from '../../FieldControlFactory';

/**
 * Presentational component for File control
 * @param {*} field - Field control
 * @param {* string} value - Field default value 
 */
export const FileField = ({field, value, onChange, onFocus}) =>{
    return (
        <div className="custom-file">
            <input {...FieldControlFactory.getFieldAttributes('file', field, value, "custom-file-input")}
                   onChange = {onChange}
                   multiple={field.field.multiple || false}
                   accept={field.field.allowedExtensions ? field.field.allowedExtensions.join() : undefined} />
            <label className="custom-file-label" id={field.field.id} htmlFor={field.field.id}>{value === '' ? 'Choose File': value}</label>              
        </div>
    );
};

FileField.propTypes = {
    field: PropTypes.object.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func
};