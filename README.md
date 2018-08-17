react-form-meta
=====================

A simple [React](http://facebook.github.io/react/) component capable of building HTML forms based on JSON metadata and using [Bootstrap](http://getbootstrap.com/) semantics by default.

## Table of Contents
- [Philosophy](#philosophy)
- [Installation](#installation)
     - [As a npm-based project dependency](#as-a-npm-based-project-dependency)
- [Usage](#usage)
     - [Form initialization](#form-initialization)
     - [Form event handlers](#form-event-handlers)
        - [Form submission](#form-submission)
        - [Form data changes](#form-data-changes)
        
## Philosophy

react-form-meta is meant to automatically generate a React form based on JSON metadata.

## Installation

Requires React 15.0.0+.

### As a npm-based project dependency

```
$ npm install react-form-meta --save
```

## Usage

```jsx
import React, { Component } from "react";
import { render } from "react-dom";

import Form from "react-form-meta";

const schema = {
      title: 'Form',
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
          name:'age',
          type: 'Number',
          label: 'Enter Age'
        },
        {
          name:'password',
          type: 'Password',
          label: 'Enter Password',
          required: true,
          validators:[
            {
              name: 'required',
              args: []
            },
            {
              name: 'minLength',
              args: [10]
            }
          ]
        },
        {
          name:'birthday',
          type: 'DateTime',
          label: 'Enter Birthday'
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


render((
  <Form schema={this.schema} 
        onSubmit = { (formData) => console.log(formData)} />
), document.getElementById("app"));
```

This will generate a form like this:

![](http://i.imgur.com/DZQYPyu.png)

