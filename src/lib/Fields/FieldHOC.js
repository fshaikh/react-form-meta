import React from 'react';
import PropTypes from 'prop-types';
import LabelField from './LabelField';
import ErrorUI from './ErrorUI';
import HintText from './HintText';
import FieldControlsEnum from '../Shared/Models/FieldControlEnum';

export default function FieldHOC(props) {
    return (
        <div className="form-group">
            {getLabel(props.field)}
            <div>
                {props.children}
            </div>
            <ErrorUI showError={props.showError} errorMessages={props.errorMessages} />
            {props.field.hintText ? <HintText hintText={props.field.hintText}/> : undefined}
        </div>
    )
}

const getLabel = (field) => {
    return field.type === FieldControlsEnum.Label ? '' : <LabelField field={field} />;
}

FieldHOC.propTypes = {
    field: PropTypes.object.isRequired,
    children: PropTypes.node,
    showError: PropTypes.bool,
    errorMessages: PropTypes.array
};
