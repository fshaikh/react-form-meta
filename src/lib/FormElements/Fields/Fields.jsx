import React from 'react';
import PropTypes from 'prop-types';

import * as FieldControlFactory from '../../FieldControlFactory';
import FieldHOC from '../../Fields/FieldHOC';
import FormRendererContext from '../../Store/FormRendererContext';

const Fields = (props) => {
    const fieldControl = props.field;
    
    return (
            <FormRendererContext.Consumer>
                {(context) => {
                     return <FieldHOC field = {fieldControl}
                               key = {fieldControl.id}
                               showError = {context.state.showError}
                               errorMessages = {context.getValidationMessage(fieldControl.name)}>
                            {context.getField(fieldControl)}
                     </FieldHOC>
                }}
            </FormRendererContext.Consumer>
    )
};

Fields.propTypes = {
    field: PropTypes.object.isRequired
};
export default Fields;