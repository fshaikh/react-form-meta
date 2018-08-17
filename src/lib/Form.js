import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';

import FieldHOC from './Fields/FieldHOC';
import getFieldControl from './FieldControlFactory';
import Title from './FormElements/Title';
import Description from './FormElements/Description';
import SubmitButton from './FormElements/SubmitButton';
import getValidator from './validators/validatorFactory';

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
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <fieldset>
                        <Title title={this.schema.title} />
                        <Description description={this.schema.description} />
                        <div>
                            {this.getFormBody()}
                        </div>
                    </fieldset>
                </div>
                <SubmitButton onClick = {(e) => {this.onSubmit(e)}} />
            </form>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        // perform form validation based on each field validator
        this.validate();
        this.props.onSubmit(this.formData)
    }

    onChange(event, name, value) {
        this.formData[name] = value != null ? value : event.target.value;
        this.validate();
    }

    getFormBody() {
        return this.schema.properties.map((fieldControl) => {
            const Field = getFieldControl(fieldControl.type);
            this.setValidators(fieldControl);
            return <FieldHOC field={fieldControl}
                             key={fieldControl.name}
                             showError={this.state.showError}
                             errorMessages={this.getValidationMessage(fieldControl.name)}>
                        {this.getField(Field, fieldControl)}
                   </FieldHOC>
        });
    }

    getField(Field, fieldControl) {
        return <Field field={ fieldControl }
                        onChange = {this.onChange}
                        value={this.formData[fieldControl.name] || ''}
                />
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