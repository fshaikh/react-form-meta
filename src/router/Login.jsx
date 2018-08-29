import React from 'react';
import Form from '../lib/Form';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.schema = {
            title: 'Login',
            rootIdPrefix:'login-form',
            actionButtons:[
               {
                    type:"ActionSubmit",
                    text: "Login"
                 },
                 {
                    type:"ActionButton",
                    text: "Cancel",
                    action: (event, formData) => {console.log('form cancelled'); console.log(formData)}
                 }
           ],
            properties: [
              {
                name:'username',
                type: 'ShortText',
                label: 'User Name',
                required: true,
                validators:[
                  {
                    name: 'required',
                    args: []
                  }
                ]
              },
              {
                name:'password',
                type: 'Password',
                label: 'Password'
              }
            ]
          };
        
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <Form schema={this.schema}
                  onSubmit = {this.onSubmit} />
        )
    }
    onSubmit(formData) {
        console.log(formData);
        // send to Settings route
        this.props.history.push('/settings', formData);
    }
}