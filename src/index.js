import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppShell from './router/AppShell'
import CustomFormError from './CustomFormError';
import FormRenderer from './lib/FormRenderer'
import Auth from './router/Auth';
import Settings from './router/Settings'



class App extends Component {
  constructor() {
    super();

    // Define the Form schema in JSON
    this.schema = {
      "rows": {
          "6461e743-9110-457e-a9ea-c017366c60f7": {
              "id": "6461e743-9110-457e-a9ea-c017366c60f7",
              "index": 0,
              "fields": {
                  "89974688-bcb3-49b4-81d7-3010e7173ba2": {
                      "systemId": "89974688-bcb3-49b4-81d7-3010e7173ba2",
                      "base": "field",
                      "type": "ShortText",
                      "label": "First Name",
                      "properties": {
                          "hintText": "Hint text",
                          "placeholder": "Enter first name here",
                          "showLabel": true,
                          "readOnly": false
                      },
                      "meta": {
                          "base": {
                              "name": "base",
                              "type": "String",
                              "readOnly": true,
                              "visible": false
                          },
                          "meta": {
                              "visible": false
                          },
                          "properties": {
                              "visible": false
                          },
                          "validators": {
                              "visible": false
                          },
                          "validValidators": {
                              "visible": false
                          },
                          "systemId": {
                              "name": "systemId",
                              "type": "String",
                              "label": "System Id",
                              "readOnly": true,
                              "visible": false
                          },
                          "type": {
                              "name": "type",
                              "type": "String",
                              "label": "Control Type",
                              "readOnly": true,
                              "visible": false
                          },
                          "id": {
                              "name": "id",
                              "type": "String",
                              "label": "Id",
                              "readOnly": false,
                              "visible": true
                          },
                          "name": {
                              "name": "name",
                              "type": "String",
                              "label": "Name",
                              "readOnly": false,
                              "visible": true
                          },
                          "label": {
                              "name": "label",
                              "type": "String",
                              "label": "Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "hintText": {
                              "name": "hintText",
                              "type": "String",
                              "label": "Hint Text",
                              "readOnly": false,
                              "visible": true
                          },
                          "placeholder": {
                              "name": "placeholder",
                              "type": "String",
                              "label": "Placeholder",
                              "readOnly": false,
                              "visible": true
                          },
                          "readOnly": {
                              "name": "readOnly",
                              "type": "Boolean",
                              "label": "Read Only",
                              "readOnly": false,
                              "visible": true
                          },
                          "showLabel": {
                              "name": "showLabel",
                              "type": "Boolean",
                              "label": "Show Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "layoutType": {
                              "name": "layoutType",
                              "type": "Choice",
                              "label": "Layout",
                              "readOnly": false,
                              "visible": true,
                              "values": [
                                  {
                                      "key": 1,
                                      "value": "Left"
                                  },
                                  {
                                      "key": 2,
                                      "value": "Right"
                                  },
                                  {
                                      "key": 3,
                                      "value": "Span"
                                  }
                              ]
                          }
                      },
                      "validValidators": {
                          "required": {
                              "name": "required",
                              "label": "Required",
                              "helpText": "",
                              "type": "Boolean",
                              "args": []
                          },
                          "minLength": {
                              "name": "minLength",
                              "label": "Minimum Length",
                              "helpText": "",
                              "type": "Number",
                              "args": [
                                  10
                              ]
                          },
                          "maxLength": {
                              "name": "maxLength",
                              "label": "Maximum Length",
                              "helpText": "",
                              "type": "Number",
                              "args": [
                                  20
                              ]
                          }
                      },
                      "id": "firstNme",
                      "name": "firstName",
                      "layoutType": 1,
                      "validators": {
                          "required": {
                              "name": "required",
                              "label": "Required",
                              "helpText": "",
                              "type": "Boolean",
                              "args": [true]
                          },
                          "minLength": {
                              "name": "minLength",
                              "label": "Minimum Length",
                              "helpText": "",
                              "type": "Number",
                              "args": [
                                  10
                              ]
                          },
                          "maxLength": {
                              "name": "maxLength",
                              "label": "Maximum Length",
                              "helpText": "",
                              "type": "Number",
                              "args": [
                                  20
                              ]
                          }
                      }
                  },
                  "c5dc6260-0446-4b09-a997-696a561f65f7": {
                      "systemId": "c5dc6260-0446-4b09-a997-696a561f65f7",
                      "base": "field",
                      "type": "ShortText",
                      "label": "Last Name",
                      "properties": {
                          "hintText": "",
                          "placeholder": "",
                          "showLabel": true,
                          "readOnly": true
                      },
                      "meta": {
                          "base": {
                              "name": "base",
                              "type": "String",
                              "readOnly": true,
                              "visible": false
                          },
                          "meta": {
                              "visible": false
                          },
                          "properties": {
                              "visible": false
                          },
                          "validators": {
                              "visible": false
                          },
                          "validValidators": {
                              "visible": false
                          },
                          "systemId": {
                              "name": "systemId",
                              "type": "String",
                              "label": "System Id",
                              "readOnly": true,
                              "visible": false
                          },
                          "type": {
                              "name": "type",
                              "type": "String",
                              "label": "Control Type",
                              "readOnly": true,
                              "visible": false
                          },
                          "id": {
                              "name": "id",
                              "type": "String",
                              "label": "Id",
                              "readOnly": false,
                              "visible": true
                          },
                          "name": {
                              "name": "name",
                              "type": "String",
                              "label": "Name",
                              "readOnly": false,
                              "visible": true
                          },
                          "label": {
                              "name": "label",
                              "type": "String",
                              "label": "Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "hintText": {
                              "name": "hintText",
                              "type": "String",
                              "label": "Hint Text",
                              "readOnly": false,
                              "visible": true
                          },
                          "placeholder": {
                              "name": "placeholder",
                              "type": "String",
                              "label": "Placeholder",
                              "readOnly": false,
                              "visible": true
                          },
                          "readOnly": {
                              "name": "readOnly",
                              "type": "Boolean",
                              "label": "Read Only",
                              "readOnly": false,
                              "visible": true
                          },
                          "showLabel": {
                              "name": "showLabel",
                              "type": "Boolean",
                              "label": "Show Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "layoutType": {
                              "name": "layoutType",
                              "type": "Choice",
                              "label": "Layout",
                              "readOnly": false,
                              "visible": true,
                              "values": [
                                  {
                                      "key": 1,
                                      "value": "Left"
                                  },
                                  {
                                      "key": 2,
                                      "value": "Right"
                                  },
                                  {
                                      "key": 3,
                                      "value": "Span"
                                  }
                              ]
                          }
                      },
                      "validValidators": {
                          "required": {
                              "name": "required",
                              "label": "Required",
                              "helpText": "",
                              "type": "Boolean",
                              "args": []
                          },
                          "minLength": {
                              "name": "minLength",
                              "label": "Minimum Length",
                              "helpText": "",
                              "type": "Number",
                              "args": [
                                  10
                              ]
                          },
                          "maxLength": {
                              "name": "maxLength",
                              "label": "Maximum Length",
                              "helpText": "",
                              "type": "Number",
                              "args": [
                                  20
                              ]
                          }
                      },
                      "id": "lastName",
                      "name": "lastName",
                      "layoutType": 2,
                      "validators": {
                          "required": {
                              "name": "required",
                              "label": "Required",
                              "helpText": "",
                              "type": "Boolean",
                              "args": [true]
                          }
                      }
                  }
              },
              "rowType": 4
          },
          "6cd1d6bd-37f4-41ad-9e08-e4a68fe0d04d": {
              "id": "6cd1d6bd-37f4-41ad-9e08-e4a68fe0d04d",
              "index": 1,
              "fields": {
                  "204b402e-f7eb-49d6-b99a-982189e6355b": {
                      "systemId": "204b402e-f7eb-49d6-b99a-982189e6355b",
                      "base": "field",
                      "type": "LongText",
                      "label": "Cover Letter",
                      "properties": {
                          "hintText": "",
                          "placeholder": "",
                          "showLabel": true,
                          "readOnly": true,
                          "rows": 3
                      },
                      "meta": {
                          "base": {
                              "name": "base",
                              "type": "String",
                              "readOnly": true,
                              "visible": false
                          },
                          "meta": {
                              "visible": false
                          },
                          "properties": {
                              "visible": false
                          },
                          "validators": {
                              "visible": false
                          },
                          "validValidators": {
                              "visible": false
                          },
                          "systemId": {
                              "name": "systemId",
                              "type": "String",
                              "label": "System Id",
                              "readOnly": true,
                              "visible": false
                          },
                          "type": {
                              "name": "type",
                              "type": "String",
                              "label": "Control Type",
                              "readOnly": true,
                              "visible": false
                          },
                          "id": {
                              "name": "id",
                              "type": "String",
                              "label": "Id",
                              "readOnly": false,
                              "visible": true
                          },
                          "name": {
                              "name": "name",
                              "type": "String",
                              "label": "Name",
                              "readOnly": false,
                              "visible": true
                          },
                          "label": {
                              "name": "label",
                              "type": "String",
                              "label": "Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "hintText": {
                              "name": "hintText",
                              "type": "String",
                              "label": "Hint Text",
                              "readOnly": false,
                              "visible": true
                          },
                          "placeholder": {
                              "name": "placeholder",
                              "type": "String",
                              "label": "Placeholder",
                              "readOnly": false,
                              "visible": true
                          },
                          "readOnly": {
                              "name": "readOnly",
                              "type": "Boolean",
                              "label": "Read Only",
                              "readOnly": false,
                              "visible": true
                          },
                          "showLabel": {
                              "name": "showLabel",
                              "type": "Boolean",
                              "label": "Show Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "layoutType": {
                              "name": "layoutType",
                              "type": "Choice",
                              "label": "Layout",
                              "readOnly": false,
                              "visible": true,
                              "values": [
                                  {
                                      "key": 1,
                                      "value": "Left"
                                  },
                                  {
                                      "key": 2,
                                      "value": "Right"
                                  },
                                  {
                                      "key": 3,
                                      "value": "Span"
                                  }
                              ]
                          },
                          "rows": {
                              "name": "rows",
                              "type": "Number",
                              "label": "Rows",
                              "readOnly": false,
                              "visible": true
                          }
                      },
                      "validValidators": {
                          "required": {
                              "name": "required",
                              "label": "Required",
                              "helpText": "",
                              "type": "Boolean",
                              "args": []
                          },
                          "minLength": {
                              "name": "minLength",
                              "label": "Minimum Length",
                              "helpText": "",
                              "type": "Number",
                              "args": [
                                  10
                              ]
                          },
                          "maxLength": {
                              "name": "maxLength",
                              "label": "Maximum Length",
                              "helpText": "",
                              "type": "Number",
                              "args": [
                                  20
                              ]
                          }
                      },
                      "id": "coverLetter",
                      "name": "coverLetter",
                      "layoutType": 3,
                      "validators": []
                  }
              },
              "rowType": 3
          },
          "6e3de65d-5497-40e4-a1b5-f93c41edb89f": {
              "id": "6e3de65d-5497-40e4-a1b5-f93c41edb89f",
              "index": 2,
              "fields": {
                  "6e6a0bc4-385e-44e6-be4f-586045475aab": {
                      "systemId": "6e6a0bc4-385e-44e6-be4f-586045475aab",
                      "base": "field",
                      "type": "DropDown",
                      "label": "Skills",
                      "properties": {
                          "hintText": "",
                          "showLabel": true,
                          "readOnly": true,
                          "enum": [
                              "react",
                              "js"
                          ],
                          "enumNames": [
                              "React",
                              "JavaScript"
                          ]
                      },
                      "meta": {
                          "base": {
                              "name": "base",
                              "type": "String",
                              "readOnly": true,
                              "visible": false
                          },
                          "meta": {
                              "visible": false
                          },
                          "properties": {
                              "visible": false
                          },
                          "validators": {
                              "visible": false
                          },
                          "validValidators": {
                              "visible": false
                          },
                          "systemId": {
                              "name": "systemId",
                              "type": "String",
                              "label": "System Id",
                              "readOnly": true,
                              "visible": false
                          },
                          "type": {
                              "name": "type",
                              "type": "String",
                              "label": "Control Type",
                              "readOnly": true,
                              "visible": false
                          },
                          "id": {
                              "name": "id",
                              "type": "String",
                              "label": "Id",
                              "readOnly": false,
                              "visible": true
                          },
                          "name": {
                              "name": "name",
                              "type": "String",
                              "label": "Name",
                              "readOnly": false,
                              "visible": true
                          },
                          "label": {
                              "name": "label",
                              "type": "String",
                              "label": "Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "hintText": {
                              "name": "hintText",
                              "type": "String",
                              "label": "Hint Text",
                              "readOnly": false,
                              "visible": true
                          },
                          "placeholder": {
                              "name": "placeholder",
                              "type": "String",
                              "label": "Placeholder",
                              "readOnly": false,
                              "visible": true
                          },
                          "readOnly": {
                              "name": "readOnly",
                              "type": "Boolean",
                              "label": "Read Only",
                              "readOnly": false,
                              "visible": true
                          },
                          "showLabel": {
                              "name": "showLabel",
                              "type": "Boolean",
                              "label": "Show Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "layoutType": {
                              "name": "layoutType",
                              "type": "Choice",
                              "label": "Layout",
                              "readOnly": false,
                              "visible": true,
                              "values": [
                                  {
                                      "key": 1,
                                      "value": "Left"
                                  },
                                  {
                                      "key": 2,
                                      "value": "Right"
                                  },
                                  {
                                      "key": 3,
                                      "value": "Span"
                                  }
                              ]
                          },
                          "enum": {
                              "name": "enum",
                              "type": "Array",
                              "label": "Choice Keys",
                              "readOnly": false,
                              "visible": true
                          },
                          "enumNames": {
                              "name": "enumNames",
                              "type": "Array",
                              "label": "Choice Values",
                              "readOnly": false,
                              "visible": true
                          }
                      },
                      "validValidators": {
                          "required": {
                              "name": "required",
                              "label": "Required",
                              "helpText": "",
                              "type": "Boolean",
                              "args": []
                          }
                      },
                      "id": "skills",
                      "name": "skills",
                      "layoutType": 1,
                      "validators": []
                  }
              },
              "rowType": 1
          },
          "25043186-410c-4db4-b409-8dbe1346ee98": {
              "id": "25043186-410c-4db4-b409-8dbe1346ee98",
              "index": 3,
              "fields": {
                  "492264fd-0921-43f9-a25c-14d64bdb3b52": {
                      "systemId": "492264fd-0921-43f9-a25c-14d64bdb3b52",
                      "base": "field",
                      "type": "File",
                      "label": "Upload Resume",
                      "properties": {
                          "hintText": "",
                          "placeholder": "",
                          "showLabel": true,
                          "readOnly": true,
                          "multiple": false,
                          "allowedExtensions": [
                              ".docx",
                              ".pdf"
                          ],
                          "allowedSize": "5"
                      },
                      "meta": {
                          "base": {
                              "name": "base",
                              "type": "String",
                              "readOnly": true,
                              "visible": false
                          },
                          "meta": {
                              "visible": false
                          },
                          "properties": {
                              "visible": false
                          },
                          "validators": {
                              "visible": false
                          },
                          "validValidators": {
                              "visible": false
                          },
                          "systemId": {
                              "name": "systemId",
                              "type": "String",
                              "label": "System Id",
                              "readOnly": true,
                              "visible": false
                          },
                          "type": {
                              "name": "type",
                              "type": "String",
                              "label": "Control Type",
                              "readOnly": true,
                              "visible": false
                          },
                          "id": {
                              "name": "id",
                              "type": "String",
                              "label": "Id",
                              "readOnly": false,
                              "visible": true
                          },
                          "name": {
                              "name": "name",
                              "type": "String",
                              "label": "Name",
                              "readOnly": false,
                              "visible": true
                          },
                          "label": {
                              "name": "label",
                              "type": "String",
                              "label": "Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "hintText": {
                              "name": "hintText",
                              "type": "String",
                              "label": "Hint Text",
                              "readOnly": false,
                              "visible": true
                          },
                          "placeholder": {
                              "name": "placeholder",
                              "type": "String",
                              "label": "Placeholder",
                              "readOnly": false,
                              "visible": true
                          },
                          "readOnly": {
                              "name": "readOnly",
                              "type": "Boolean",
                              "label": "Read Only",
                              "readOnly": false,
                              "visible": true
                          },
                          "showLabel": {
                              "name": "showLabel",
                              "type": "Boolean",
                              "label": "Show Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "layoutType": {
                              "name": "layoutType",
                              "type": "Choice",
                              "label": "Layout",
                              "readOnly": false,
                              "visible": true,
                              "values": [
                                  {
                                      "key": 1,
                                      "value": "Left"
                                  },
                                  {
                                      "key": 2,
                                      "value": "Right"
                                  },
                                  {
                                      "key": 3,
                                      "value": "Span"
                                  }
                              ]
                          },
                          "multiple": {
                              "name": "multiple",
                              "type": "Boolean",
                              "label": "Allow multiple uploads",
                              "readOnly": false,
                              "visible": true
                          },
                          "allowedExtensions": {
                              "name": "allowedExtensions",
                              "type": "Array",
                              "label": "Allowed Extensions",
                              "helpText": "Separate each extension by a comma. For eg: .jpg, .png",
                              "readOnly": false,
                              "visible": true
                          },
                          "allowedSize": {
                              "name": "allowedSize",
                              "type": "Number",
                              "label": "Maximum Allowed Size",
                              "helpText": "Specify in MB",
                              "readOnly": false,
                              "visible": true
                          }
                      },
                      "validValidators": {
                          "required": {
                              "name": "required",
                              "label": "Required",
                              "helpText": "",
                              "type": "Boolean",
                              "args": []
                          }
                      },
                      "id": "resume",
                      "name": "resume",
                      "layoutType": 2,
                      "validators": []
                  }
              },
              "rowType": 2
          },
          "945fac67-dbd2-4919-8447-10ea336498c5": {
              "id": "945fac67-dbd2-4919-8447-10ea336498c5",
              "index": 4,
              "fields": {
                  "7ae71981-4984-425d-bf2b-a26d32cbc694": {
                      "systemId": "7ae71981-4984-425d-bf2b-a26d32cbc694",
                      "base": "field",
                      "type": "CheckBox",
                      "label": "Is Notice Period?",
                      "properties": {
                          "hintText": "If you are serving notice period",
                          "showLabel": true,
                          "readOnly": false,
                          "checked": 0
                      },
                      "meta": {
                          "base": {
                              "name": "base",
                              "type": "String",
                              "readOnly": true,
                              "visible": false
                          },
                          "meta": {
                              "visible": false
                          },
                          "properties": {
                              "visible": false
                          },
                          "validators": {
                              "visible": false
                          },
                          "validValidators": {
                              "visible": false
                          },
                          "systemId": {
                              "name": "systemId",
                              "type": "String",
                              "label": "System Id",
                              "readOnly": true,
                              "visible": false
                          },
                          "type": {
                              "name": "type",
                              "type": "String",
                              "label": "Control Type",
                              "readOnly": true,
                              "visible": false
                          },
                          "id": {
                              "name": "id",
                              "type": "String",
                              "label": "Id",
                              "readOnly": false,
                              "visible": true
                          },
                          "name": {
                              "name": "name",
                              "type": "String",
                              "label": "Name",
                              "readOnly": false,
                              "visible": true
                          },
                          "label": {
                              "name": "label",
                              "type": "String",
                              "label": "Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "hintText": {
                              "name": "hintText",
                              "type": "String",
                              "label": "Hint Text",
                              "readOnly": false,
                              "visible": true
                          },
                          "placeholder": {
                              "name": "placeholder",
                              "type": "String",
                              "label": "Placeholder",
                              "readOnly": false,
                              "visible": true
                          },
                          "readOnly": {
                              "name": "readOnly",
                              "type": "Boolean",
                              "label": "Read Only",
                              "readOnly": false,
                              "visible": true
                          },
                          "showLabel": {
                              "name": "showLabel",
                              "type": "Boolean",
                              "label": "Show Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "layoutType": {
                              "name": "layoutType",
                              "type": "Choice",
                              "label": "Layout",
                              "readOnly": false,
                              "visible": true,
                              "values": [
                                  {
                                      "key": 1,
                                      "value": "Left"
                                  },
                                  {
                                      "key": 2,
                                      "value": "Right"
                                  },
                                  {
                                      "key": 3,
                                      "value": "Span"
                                  }
                              ]
                          },
                          "checked": {
                              "name": "enum",
                              "type": "Boolean",
                              "label": "Checked",
                              "readOnly": false,
                              "visible": true
                          }
                      },
                      "validValidators": {
                          "required": {
                              "name": "required",
                              "label": "Required",
                              "helpText": "",
                              "type": "Boolean",
                              "args": []
                          }
                      },
                      "id": "isNoticePeriod",
                      "name": "isNoticePeriod",
                      "layoutType": 3,
                      "validators": []
                  }
              },
              "rowType": 3
          },
          "ed7e22e5-848e-4bc5-9338-5be224da0ec6": {
              "id": "ed7e22e5-848e-4bc5-9338-5be224da0ec6",
              "index": 5,
              "fields": {
                  "d168e0c2-5d39-40a5-9ff9-560c7f4972ff": {
                      "systemId": "d168e0c2-5d39-40a5-9ff9-560c7f4972ff",
                      "base": "field",
                      "type": "Radio",
                      "label": "Gender",
                      "properties": {
                          "hintText": "",
                          "showLabel": true,
                          "readOnly": false,
                          "enum": [
                              "male",
                              "female"
                          ],
                          "enumNames": [
                              "Male",
                              "Female"
                          ]
                      },
                      "meta": {
                          "base": {
                              "name": "base",
                              "type": "String",
                              "readOnly": true,
                              "visible": false
                          },
                          "meta": {
                              "visible": false
                          },
                          "properties": {
                              "visible": false
                          },
                          "validators": {
                              "visible": false
                          },
                          "validValidators": {
                              "visible": false
                          },
                          "systemId": {
                              "name": "systemId",
                              "type": "String",
                              "label": "System Id",
                              "readOnly": true,
                              "visible": false
                          },
                          "type": {
                              "name": "type",
                              "type": "String",
                              "label": "Control Type",
                              "readOnly": true,
                              "visible": false
                          },
                          "id": {
                              "name": "id",
                              "type": "String",
                              "label": "Id",
                              "readOnly": false,
                              "visible": true
                          },
                          "name": {
                              "name": "name",
                              "type": "String",
                              "label": "Name",
                              "readOnly": false,
                              "visible": true
                          },
                          "label": {
                              "name": "label",
                              "type": "String",
                              "label": "Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "hintText": {
                              "name": "hintText",
                              "type": "String",
                              "label": "Hint Text",
                              "readOnly": false,
                              "visible": true
                          },
                          "placeholder": {
                              "name": "placeholder",
                              "type": "String",
                              "label": "Placeholder",
                              "readOnly": false,
                              "visible": true
                          },
                          "readOnly": {
                              "name": "readOnly",
                              "type": "Boolean",
                              "label": "Read Only",
                              "readOnly": false,
                              "visible": true
                          },
                          "showLabel": {
                              "name": "showLabel",
                              "type": "Boolean",
                              "label": "Show Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "layoutType": {
                              "name": "layoutType",
                              "type": "Choice",
                              "label": "Layout",
                              "readOnly": false,
                              "visible": true,
                              "values": [
                                  {
                                      "key": 1,
                                      "value": "Left"
                                  },
                                  {
                                      "key": 2,
                                      "value": "Right"
                                  },
                                  {
                                      "key": 3,
                                      "value": "Span"
                                  }
                              ]
                          },
                          "enum": {
                              "name": "enum",
                              "type": "Array",
                              "label": "Choice Keys",
                              "readOnly": false,
                              "visible": true
                          },
                          "enumNames": {
                              "name": "enumNames",
                              "type": "Array",
                              "label": "Choice Values",
                              "readOnly": false,
                              "visible": true
                          }
                      },
                      "validValidators": {
                          "required": {
                              "name": "required",
                              "label": "Required",
                              "helpText": "",
                              "type": "Boolean",
                              "args": []
                          }
                      },
                      "id": "gender",
                      "name": "gender",
                      "layoutType": 3,
                      "validators": []
                  }
              },
              "rowType": 3
          },
          "3274459a-cf77-477e-840f-8c9fcea973c6": {
              "id": "3274459a-cf77-477e-840f-8c9fcea973c6",
              "index": 6,
              "fields": {
                  "5c6a4616-2398-4fc6-8d71-4d43d44d507c": {
                      "systemId": "5c6a4616-2398-4fc6-8d71-4d43d44d507c",
                      "base": "field",
                      "type": "Label",
                      "label": "This is a label field",
                      "properties": {},
                      "meta": {
                          "base": {
                              "name": "base",
                              "type": "String",
                              "readOnly": true,
                              "visible": false
                          },
                          "meta": {
                              "visible": false
                          },
                          "properties": {
                              "visible": false
                          },
                          "validators": {
                              "visible": false
                          },
                          "validValidators": {
                              "visible": false
                          },
                          "systemId": {
                              "name": "systemId",
                              "type": "String",
                              "label": "System Id",
                              "readOnly": true,
                              "visible": false
                          },
                          "type": {
                              "name": "type",
                              "type": "String",
                              "label": "Control Type",
                              "readOnly": true,
                              "visible": false
                          },
                          "id": {
                              "name": "id",
                              "type": "String",
                              "label": "Id",
                              "readOnly": false,
                              "visible": true
                          },
                          "name": {
                              "name": "name",
                              "type": "String",
                              "label": "Name",
                              "readOnly": false,
                              "visible": true
                          },
                          "label": {
                              "name": "label",
                              "type": "String",
                              "label": "Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "hintText": {
                              "name": "hintText",
                              "type": "String",
                              "label": "Hint Text",
                              "readOnly": false,
                              "visible": true
                          },
                          "placeholder": {
                              "name": "placeholder",
                              "type": "String",
                              "label": "Placeholder",
                              "readOnly": false,
                              "visible": true
                          },
                          "readOnly": {
                              "name": "readOnly",
                              "type": "Boolean",
                              "label": "Read Only",
                              "readOnly": false,
                              "visible": true
                          },
                          "showLabel": {
                              "name": "showLabel",
                              "type": "Boolean",
                              "label": "Show Label",
                              "readOnly": false,
                              "visible": true
                          },
                          "layoutType": {
                              "name": "layoutType",
                              "type": "Choice",
                              "label": "Layout",
                              "readOnly": false,
                              "visible": true,
                              "values": [
                                  {
                                      "key": 1,
                                      "value": "Left"
                                  },
                                  {
                                      "key": 2,
                                      "value": "Right"
                                  },
                                  {
                                      "key": 3,
                                      "value": "Span"
                                  }
                              ]
                          }
                      },
                      "validValidators": {},
                      "id": "labelField",
                      "name": "labelField",
                      "layoutType": 3,
                      "validators": []
                  }
              },
              "rowType": 3
          }
      },
      "formName": "Contact Form",
      "formProperties": {
          "title": "Form Title",
          "description": "Form description",
          "rootIdPrefix": "form-rootid",
          "id": "form-id",
          "name": "form-name",
          "className": "form-classes",
          "autoComplete": true
      }
  }
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
            <FormRenderer 
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


