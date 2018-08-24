import React from 'react';
import PropTypes from 'prop-types';
import * as FieldControlFactory from '../FieldControlFactory';

export default function LongTextField(props) {
    return (
            <div>
                <textarea {...FieldControlFactory.getFieldAttributes('textarea', props)} />
            </div>
    );
}

LongTextField.propTypes = {
    field: PropTypes.object.isRequired
};

