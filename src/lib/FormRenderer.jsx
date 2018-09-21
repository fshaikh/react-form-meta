/**
 * React specific imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Lib specific imports
 */
import FormError from './FormElements/FormError';
import Rows from './FormElements/Rows/Rows';
import Form from './FormElements/Form/Form';
import { ActionButtons } from './FormElements/ActionButtons';
import FormRendererContext from './Store/FormRendererContext'; 
import * as FieldControlFactory from './FieldControlFactory';
import getValidator from './validators/validatorFactory';

/**
 * Main container component which bootstraps the form rendering based on the passed
 * form schema definition.
 */
class FormRenderer extends React.Component {
    /**
     * Initializes a new instance of FormRenderer
     * @param {*} props - Passed in props
     */
    constructor(props) {
        super(props);
        // set internal component state
        this.deriveState();
         // Bind the event handlers
         this.bindEventHandlers();
         // set field validators
         this.setValidators();
    }

    render() {
        const FormErrorComponent = this.getFormErrorComponent();
        const context = this.getContext();
        return (
            <FormRendererContext.Provider value={context}>
                <FormErrorComponent onRenderError={this.onRenderError}>
                    <Form formProperties={this.schema.formProperties}
                        onChange= {this.onChange}
                        onFocus  ={ this.props.onFocus  ?  this.onFocus : undefined}
                        actionButtons = {this.getActionButtons()}>
                        {this.getFormBody()}
                    </Form>
                </FormErrorComponent>
            </FormRendererContext.Provider> 
        )
    }

    deriveState() {
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
    }

    bindEventHandlers() {
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onRenderError = this.onRenderError.bind(this);
        this.onNonSubmitAction = this.onNonSubmitAction.bind(this);
        this.getField = this.getField.bind(this);
    }

    /**
     * Creates Form Renderer context object
     */
    getContext() {
        return {
            schema : this.schema,
            state: this.state,
            onChange: this.onChange,
            onSubmit: this.onSubmit,
            getField: this.getField,
            getValidationMessage: this.getValidationMessage
        };
    }

    getFormErrorComponent() {
        return  this.props.errorBoundary ? this.props.errorBoundary : FormError;
    }

    getActionButtons() {
        return <ActionButtons actionButtons={this.schema.actionButtons}
                              onClick = {(e) => {this.onSubmit(e)}}
                              onNonSubmitClick = {this.onNonSubmitAction} />
    }

    getFormBody() {
        return <Rows rows={this.schema.rows} />;
    }

    onChange(event, value) {    
        this.formData[event.target.name] = this.getFieldValue(event, value);
        this.validate();
        // if client has supplied onChange event handler via props, invoke it
        if(this.props.onChange) {
            this.props.onChange(this.formData);
        }
    }

    onSubmit(e) {
        e.preventDefault();
        // perform form validation based on each field validator
        //this.validate();
        this.props.onSubmit(this.formData)
    }

    onNonSubmitAction(event, action) {
        event.preventDefault();
        action(event, this.formData)
    }

    

    onFocus(event, value) {
        let fieldValue = this.getFieldValue(event, value);
        this.formData[event.target.name] = fieldValue
        // if client has supplied onChange event handler via props, invoke it
        if(this.props.onFocus) {
            this.props.onFocus(event.target.name, fieldValue);
        }
    }

    getField(fieldControl) {
        const Field = FieldControlFactory.getFieldControl(fieldControl.type);
        const id = this.getId(fieldControl);
        

        return <Field field={ fieldControl }
                      id = {id}
                      onChange = { this.onChange }
                      onFocus = {this.onFocus}
                      value={this.formData[fieldControl.name] || ''}
        />
    }

   

    getFieldValue(event, value) {
        return value != null ? value : event.target.value;
    } 

    onRenderError(error, info) {
        if(this.props.onRenderError) {
            this.props.onRenderError(error, info);
        }
    }

    /**
     * Computes the id for each field. 
     * By default, name is used as id for all rendered field. If schema contains rootIdPrefix, it is used
     * as a prefix
     * @param {object} fieldControl - Field control
     */
    getId(fieldControl) {
        const rootIdPrefix = this.schema.formProperties.rootIdPrefix;
        return rootIdPrefix? `${rootIdPrefix}-${fieldControl.name}`:fieldControl.name;
    }

    setValidators() {
        const rows = this.schema.rows;
        Object.keys(rows).forEach((rowKey) => {
            const row = rows[rowKey];
            Object.keys(row.fields).forEach((fieldKey) => {
                const fieldControl = row.fields[fieldKey];
                this.validators.push({
                    field: fieldControl.name,
                    fieldTitle: fieldControl.label,
                    validators: fieldControl.validators
                });
            },this)
        },this);
    }

    validate() {

        var validationMessages = {};
        this.validators.forEach((fieldValidator) => {
            const field = fieldValidator.field;
            const fieldTitle = fieldValidator.fieldTitle;
            const validators = fieldValidator.validators || [];
            // // get the field value from the form data
            const fieldValue = this.formData[field];
            validationMessages[field] = [];
            Object.keys(validators).forEach((validatorKey) => {
                const controlValidator = validators[validatorKey];
                // call the validator
                const args = [field, fieldValue, fieldTitle, ...controlValidator.args];
                const errorMessage = getValidator(controlValidator.name)(...args);
                if(!errorMessage.isValid){
                    validationMessages[field].push(errorMessage);
                }
                
            });

        },this);
        if(Object.keys(validationMessages).length > 0){
            this.setState({
                    showError: true,
                    validationMessages: validationMessages
                }
            );
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

// Define prop types for Form component
FormRenderer.propTypes = {
    schema: PropTypes.object.isRequired,
    formData: PropTypes.object,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onRenderError: PropTypes.func,
    errorBoundary: PropTypes.element
};

// Give a default schema, so Form is rendered empty and not throwing errors
FormRenderer.defaultProps = {
    schema :{
        
    }
};

export {FormRenderer};