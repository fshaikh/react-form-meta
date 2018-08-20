import React from 'react';
import Form from '../lib/Form';
import * as TestRenderer from 'react-test-renderer';

describe('Form', () => {
    describe('Form snapshot tests', () => {

    });

    describe('Form component tests', () => {
        // Define the Form schema in JSON
        const schema = {
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

        const formData = {
            firstName: 'Furqan',
            emailAddress: 'fur@cdc.com'
        };
        var reactTestRenderer;
        var componentInstance;

        beforeAll(() => {
            // create the Form component tree
            reactTestRenderer = TestRenderer.create(
                <Form schema={schema}
                    formData={formData}
                    onSubmit = { (formData) => console.log(formData)}
                    onFocus = {(id, value) => {console.log(`Field with id: ${id} got focus. Value is : ${value}`)}}
                 />);
            componentInstance = reactTestRenderer.root;
        });

        const getSubmitButton = () => {
            return componentInstance.find(el => el.type === 'button');
        };

        describe('Form field elements existence tests',()=>{
            it('should render submit button',()=>{
                expect(getSubmitButton()).not.toBeNull();
            });
        })
        describe('Form event handler tests', () => {
            it('should call onSubmit when clicking on submit button',()=>{
                // get submit button
                // 
            });
        });
    });
});