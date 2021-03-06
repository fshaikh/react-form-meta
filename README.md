react-form-meta
=====================

A simple [React](http://facebook.github.io/react/) component capable of building HTML forms based on JSON metadata and using [Bootstrap](http://getbootstrap.com/) semantics by default.

## Table of Contents
- [Installation](#installation)
     - [As a npm-based project dependency](#as-a-npm-based-project-dependency)
- [Usage](#usage)
     - [Form initialization](#form-initialization)
     - [Form event handlers](#form-event-handlers)
        - [Form submission](#form-submission)
        - [Form data changes](#form-data-changes)
        - [Form field focus events](#form-field-focus-events)
- [Form Fields](#formfields)
    - [File Field](#file-field)
    - [Autogenerated field ids](#autogenerated-field-ids)
    - [Hint texts](#hint-texts)
    - [Field Labels](#field-labels)
    - [Placeholders](#placeholders)
    - [Textarea rows option](#textarea-rows-option)
    - [Form action buttons](#form-action-buttons)
    - [Form attributes](#form-attributes)
- [Form Error Boundary](#form-error-boundary)


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

![](https://github.com/fshaikh/react-form-meta/blob/master/resources/Form.JPG)

### Form initialization

To populate form with existing data (for eg when fetching from server), pass a `formData` prop object matching the meta schema:

```jsx
const formData = {
  firstName: 'Furqan',
  emailAddress: 'fur@reversecurrent.com',
  plays: true
};

render((
  <Form schema={schema}
        formData={formData} />
), document.getElementById("app"));
```

### Form event handlers

#### Form submission

You can pass a function as the `onSubmit` prop of your `Form` component to listen to when the form is submitted and its data are valid. It will be passed a result object having a `formData` attribute :

```js
const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);

render((
  <Form schema={this.schema}
        onSubmit = { (formData) => console.log(formData)} />
), document.getElementById("app"));
```

#### Form data changes

If you plan on being notified every time the form data are updated, you can pass an `onChange` handler, which will receive the same args as `onSubmit` any time a value is updated in the form.


#### Form field focus events

Sometimes you may want to trigger events or modify external state when a field has been focused, so you can pass an `onFocus` handler, which will receive the id of the input that is focused and the field value.

```js
const onFocus = (fieldId, fieldValue) => console.log(`${fieldId}: ${fieldValue}`);

render((
  <Form schema={this.schema}
        onFocus = {onFocus} />
), document.getElementById("app"));
```
### Form Fields

This section describes all the form fields supported by this component along with its usage.

#### File Field
Using File field allows users to select files. It support both single and multiple files with file extension restrictions. It uses HTML5 File API to implement this feature.

Following is the json meta to be used when adding single/multiple file fields to a form

```js
schema = {
      fields: [
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
  }
```
This will render in the form as below:
![](https://github.com/fshaikh/react-form-meta/blob/master/resources/File%20Field.JPG)

The file data and metadata will be available (onSubmit, onChange) as an array in the below format. File data will be available as a text string.
```
{
    file-attach: [
                    {
                         data: "<text string>",
                         name: "LICENSE.txt",
                         extension: ".txt",
                         size: 12335, // as bytes
                         type: "text/plain",
                         lastModified: <unix timestamp>
                    }
                 ]
}
```
When file(s) are selected by user, the file UI is shown below the File field. User can click on 'X' to remove the selected file(s).

#### Autogenerated field ids
By default, this library will generate ids unique to the form for all rendered fields. If you plan on using multiple instances of the Form component in a same page, it is recommended to declare a root prefix for these, using the rootIdPrefix property:

```
this.schema = {
      ...
      rootIdPrefix:'contact-form',
      ...
   }
```
So all fields will have an id prefixed with contact-form.

#### Hint texts
Sometimes it's convenient to add text next to a field to guide the end user filling it. This is the purpose of the hintText schema property

```
const schema = {
          name:'password',
          type: 'Password',
          label: 'Password',
          hintText:'Password must be greater than 10 characters'
    };
```
![](https://github.com/fshaikh/react-form-meta/blob/master/resources/Hint%20Text.JPG)

Hint texts work for any kind of field , and will always be rendered immediately below the field component (after validation errors, if any).

#### Field Labels
Field labels are rendered by default. Labels may be omitted by setting the showLabel option to false in the schema.
```
const schema = {
          name:'password',
          type: 'Password',
          label: 'Password',
          showLabel: false
    };
```

#### Placeholders
You can add placeholder text to an input by using the placeholder option in the schema
```
const schema =  {
           name: 'githuburl',
           type: 'ShortText',
           label: 'Github URL',
           placeholder: 'https://'

    };
```
![](https://github.com/fshaikh/react-form-meta/blob/master/resources/Placeholder.JPG)

#### Textarea rows option
You can set the initial height of a textarea field by specifying rows option.
```
const schema =  {
          name:'coverLetter',
          type: 'LongText',
          label: 'Cover Letter',
          rows: 10
    };
```

#### Form action buttons
You can provide custom buttons to your form via the actionButtons property in JSON schema. Otherwise a default submit button will be rendered.
```
const schema =  {
          ...,
          actionButtons:[
              // Submit Button
              {
                    type:"ActionSubmit",
                    text: "Save and Close"
              },
              // Cancel button. Can provide callback function using action property
              {
                    type:"ActionButton",
                    text: "Cancel",
                    action: (event, formData) => {console.log(formData)}
              }
          ]
    };
```
![](https://github.com/fshaikh/react-form-meta/blob/master/resources/Action%20Buttons.JPG)

#### Form attributes
The Form component supports the following html attributes:
```
<Form
  id="form-id"
  name="form-name"
  className="form-class form-class2"
  autoComplete="off"
  schema={} />
```

### Form Error Boundary
When any error occurs during the rendering of Form component, Form Error Component is rendered. Client can provide custom error component. When error occurs, onRenderError event is fired passing error and error information as arguments. Clients can use this event handler to do custom error handling, for eg: sending errors to remote service for auditing.

Pass custom error component by wrapping Form component as shown below
```
<CustomFormError>
        <Form schema={this.schema}
              onRenderError = {(error, info) => console.log(error)}
        />
</CustomFormError>
```
