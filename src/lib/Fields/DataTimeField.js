import React from 'react';
import PropTypes from 'prop-types';
import * as FieldControlFactory from '../FieldControlFactory';

export default function DateTimeField(props) {
    return (
            <div>
                <input {...FieldControlFactory.getFieldAttributes("date", props)} />
            </div>
    );
}

DateTimeField.propTypes = {
    field: PropTypes.object.isRequired
};