import React from 'react';
import LabelField from './LabelField';
import ErrorUI from './ErrorUI';

export default function FieldHOC(props) {
    return (
        <div className="form-group">
            <LabelField field={props.field} />
            <div>
                {props.children}
            </div>
            <ErrorUI showError={props.showError} errorMessages={props.errorMessages} />
        </div>
    )
}