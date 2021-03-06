import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppShell from './router/AppShell'
import CustomFormError from './CustomFormError';
import Form from './lib/Form'
import Auth from './router/Auth';
import Settings from './router/Settings'



class App extends Component {
  constructor() {
    super();

    // Define the Form schema in JSON
    this.schema = {
      title: 'Contact Details Form',
      description: 'Enter details below',
      rootIdPrefix:'contact-form',
      actionButtons:[
         {
              type:"ActionSubmit",
	            text: "Save and Close"
	       },
	       {
              type:"ActionButton",
              text: "Cancel",
              action: (event, formData) => {console.log('form cancelled'); console.log(formData)}
	       }
     ],
      fields: [
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
          showLabel: false,
          rows: 3
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
      <BrowserRouter>
        <CustomFormError>
          <div>
            <Form 
                  id="form-id"
                  name="form-name"
                  className="form-class form-class2"
                  autoComplete="off"
                  schema={this.schema}
                  formData={this.formData}
                  onSubmit = { (formData) => console.log(formData)}
                  onRenderError = {(error, info) => console.log(error)}
                  
                  />
            {/* <AppShell />
            <div className="center-content">
                <Switch>
                  <Route exact path="/auth" component={Auth} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/" component={Auth} />
                  <Route path="*" component={NotFound}/>
                </Switch>
            </div> */}
          </div>
        </CustomFormError>
      </BrowserRouter>
    );
  }
}

const NotFound = () => {
    return (
      <div>Not found</div>
    )
};



ReactDOM.render(<App />, document.getElementById("root"));


