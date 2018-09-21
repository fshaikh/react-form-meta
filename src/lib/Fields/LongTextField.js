import React from 'react';
import PropTypes from 'prop-types';
import * as FieldControlFactory from '../FieldControlFactory';

export default function LongTextField(props) {
    const field = props.field;
    return (
            <div>
                <textarea {...FieldControlFactory.getFieldAttributes('textarea', props)}
                          rows={field.rows ? field.rows : undefined} 
                          onChange={(event) => props.onChange(event,event.target.value)}          
                />
            </div>
    );
}

LongTextField.propTypes = {
    field: PropTypes.object.isRequired
};

