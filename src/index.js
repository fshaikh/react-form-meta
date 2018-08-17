import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import the Form component
import Form from './lib/Form';



class App extends Component {
  constructor() {
    super();

    // Define the Form schema in JSON
    this.schema = {
      title: 'Contact Details Form',
      description: 'Enter details below',
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
          name:'plays',
          type: 'CheckBox',
          label: 'Plays?'
        },
        {
          name:'coverLetter',
          type: 'LongText',
          label: 'Cover Letter'
        },
        {
          name: 'hobbies',
          type: 'Select',
          label: 'Hobbies',
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
      <div>
        <Form schema={this.schema} onSubmit = { (formData) => console.log(formData)} formData={this.formData} />
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("root"));


