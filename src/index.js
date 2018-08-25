import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import the Form component
import Form from './lib/Form';
import CustomFormError from './CustomFormError';


class App extends Component {
  constructor() {
    super();

    // Define the Form schema in JSON
    this.schema = {
      title: 'Contact Details Form',
      description: 'Enter details below',
      rootIdPrefix:'contact-form',
      properties: [
        {
          name:'firstName',
          type: 'ShortText',
          label: 'First Name',
          required: true,
          validators:[
            {
              name: 'required',
              args: []
            },
            {
              name: 'minLength',
              args: [6]
            }
          ]
        },
        {
          name:'emailAddress',
          type: 'Email',
          label: 'Email Address'
        },
        {
          name:'password',
          type: 'Password',
          label: 'Password',
          hintText:'Password must be greater than 10 characters'
        },
        {
           name: 'githuburl',
           type: 'ShortText',
           label: 'Github URL',
           placeholder: 'https://'
        },
        {
          name:'plays',
          type: 'CheckBox',
          label: 'Plays?',
          showLabel: true
        },
        {
          name:'coverLetter',
          type: 'LongText',
          label: 'Cover Letter',
          showLabel: false
        },
        {
          name: 'hobbies',
          type: 'Select',
          label: 'Hobbies',
          showLabel: false,
          enum: [
            "screen",
            "multiply",
            "overlay"
          ],
          enumNames: [
            "Screen",
            "Multiply",
            "Overlay"
          ]
        },
        {
          name: 'plan',
          type: 'Radio',
          label: 'Plan',
          enum: [
            "basic",
            "commercial",
            "enterprise"
          ],
          enumNames: [
            "Basic",
            "Commercial",
            "Enterprise"
          ],
          checked: 0
        },
        {
          name:'file-attach',
          type:'File',
          label:'Choose images to upload (PNG, JPG)',
          multiple: false,
          allowedExtensions:['.jpg', '.jpeg','.png']
        },
        {
          name:'file-attach-multiple',
          type:'File',
          label:'Enter multiple file',
          multiple: true
        }
      ]
    };

    // Define the form data
    this.formData = {
      firstName: 'Furqan',
      emailAddress: 'fur@cdc.com'
    }
  }

  
  render() {
    return (
      <CustomFormError>
      <div>
        <Form schema={this.schema}
              formData={this.formData}
              onSubmit = { (formData) => console.log(formData)}
              onRenderError = {(error, info) => console.log(error)}
              
               />
      </div>
      </CustomFormError>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("root"));


