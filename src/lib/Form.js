import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';

import FieldHOC from './Fields/FieldHOC';
import * as FieldControlFactory from './FieldControlFactory';
import Title from './FormElements/Title';
import Description from './FormElements/Description';
import getValidator from './validators/validatorFactory';
import FormError from './FormElements/FormError';
import { ActionButtons } from './FormElements/ActionButtons';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        // Holds form data. If client has passed formData object use it else initialize to empty object
        this.formData = this.props.formData || {};
        
        // Hold the form schema
        this.schema = this.props.schema;

        // Hold the field validators
        this.validators = [];

        this.state = {
            showError: false,
            validationMessages: {}
        };

        // Bind the event handlers
        this.bindEventHandlers();
    }

    render() {
        const FormErrorComponent = this.getFormErrorComponent();
        return (
            <FormErrorComponent onRenderError={this.onRenderError}>
                <form 
                    onChange = { this.onChange }
                    onFocus  = { this.props.onFocus  ?  this.onFocus : undefined}>
                    <div className="form-group">
                        <fieldset>
                            <Title title={this.schema.title} />
                            <Description description={this.schema.description} />
                            <div>
                                {this.getFormBody()}
                            </div>
                        </fieldset>
                    </div>
                    {/* <SubmitButton onClick = {(e) => {this.onSubmit(e)}} /> */}
                    <ActionButtons actionButtons={this.schema.actionButtons}
                                   onClick = {(e) => {this.onSubmit(e)}}
                                   onNonSubmitClick = {this.onNonSubmitAction}/>
                </form>
            </FormErrorComponent>
        )
    }

    bindEventHandlers() {
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onRenderError = this.onRenderError.bind(this);
        this.onNonSubmitAction = this.onNonSubmitAction.bind(this)
    }

    onSubmit(e) {
        e.preventDefault();
        // perform form validation based on each field validator
        this.validate();
        this.props.onSubmit(this.formData)
    }

    onNonSubmitAction(event, action) {
        event.preventDefault();
        action(event, this.formData)
    }

    onChange(event, value) {    
        this.formData[event.target.name] = this.getFieldValue(event, value);
        this.validate();
        // if client has supplied onChange event handler via props, invoke it
        if(this.props.onChange) {
            this.props.onChange(this.formData);
        }
    }

    onFocus(event, value) {
        let fieldValue = this.getFieldValue(event, value);
        this.formData[event.target.name] = fieldValue
        // if client has supplied onChange event handler via props, invoke it
        if(this.props.onFocus) {
            this.props.onFocus(event.target.name, fieldValue);
        }
    }

    onRenderError(error, info) {
        if(this.props.onRenderError) {
            this.props.onRenderError(error, info);
        }
    }

    getFormBody() {
        return this.schema.properties.map((fieldControl) => {
            const Field = FieldControlFactory.getFieldControl(fieldControl.type);
            const id = this.getId(fieldControl);
            this.setValidators(fieldControl);
            return <FieldHOC field = {fieldControl}
                             key = {id}
                             showError = {this.state.showError}
                             errorMessages = {this.getValidationMessage(fieldControl.name)}>
                       {this.getField(Field, fieldControl, id)}
                   </FieldHOC>
        });
    }

    getField(Field, fieldControl, id) {
        // add onChange, onFocus only when the props have them. This will prevent 
        // adding redundant event handlers to all form element
        return <Field field={ fieldControl }
                        id = {id}
                        onChange = { this.onChange }
                        onFocus = {this.onFocus}
                        value={this.formData[fieldControl.name] || ''}
                />
    }

    /**
     * Computes the id for each field. 
     * By default, name is used as id for all rendered field. If schema contains rootIdPrefix, it is used
     * as a prefix
     * @param {object} fieldControl - Field control
     */
    getId(fieldControl) {
        const rootIdPrefix = this.schema.rootIdPrefix;
        return rootIdPrefix? `${rootIdPrefix}-${fieldControl.name}`:fieldControl.name;
    }

    getFieldValue(event, value) {
        return value != null ? value : event.target.value;
    } 

    getFormErrorComponent() {
        return  this.props.errorBoundary ? this.props.errorBoundary : FormError;
    }

    setValidators(fieldControl) {
        this.validators.push({
                                field: fieldControl.name,
                                fieldTitle: fieldControl.label,
                                validators: fieldControl.validators
                            });
    }

    validate() {
        var validationMessages = {};
        this.validators.forEach((fieldValidator) => {
            const field = fieldValidator.field;
            const fieldTitle = fieldValidator.fieldTitle;
            const validators = fieldValidator.validators || [];
            // get the field value from the form data
            const fieldValue = this.formData[field];
            validationMessages[field] = [];
            validators.forEach((validator) => {
                // call the validator
                const args = [field, fieldValue, fieldTitle, ...validator.args];
                const errorMessage = getValidator(validator.name)(...args);
                if(!errorMessage.isValid){
                    validationMessages[field].push(errorMessage);
                }
                
            });

        });
        if(Object.keys(validationMessages).length > 0) {
            this.setState((prevState, props) => {
                return {
                    showError: true,
                    validationMessages: validationMessages
                }
            });
        }
    }

    getValidationMessage(field) {
        const messages = this.state.validationMessages[field];
        if(messages == null) {
            return [];
        }
        return messages.map((message) => message.errorMessage);
    }
}



/**
 * Custom validator is a function which takes the below 3 arguments.
 * @param {object} props - Object containing props passed to the component
 * @param {*} propName - Prop being validated
 * @param {*} componentName - Component name
 * @returns {null - If validation passes. Error if validation fails}
 */ 
const schemaValidator = (props, propName, componentName, location) => {
    return null;
}

// Define prop types for Form component
Form.propTypes = {
    schema: PropTypes.object.isRequired,
    formData: PropTypes.object,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onRenderError: PropTypes.func,
    errorBoundary: PropTypes.element
};

// Give a default schema, so Form is rendered empty and not throwing errors
Form.defaultProps = {
    schema :{
        properties:[]
    }
};