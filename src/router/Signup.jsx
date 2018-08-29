import React from 'react';
import Form from '../lib/Form';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.schema = {
            title: 'Sign up',
            rootIdPrefix:'signup-form',
            actionButtons:[
               {
                    type:"ActionSubmit",
                    text: "Signup"
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
                name:'emailAddress',
                type: 'Email',
                label: 'Email Address'
              },
              {
                name:'password',
                type: 'Password',
                label: 'Password',
                hintText:'Password must be greater than 10 characters'
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
    }
}