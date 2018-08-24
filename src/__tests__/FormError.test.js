/**
 * Test suite for FormError component which acts as a error boundary for Form React component
 */
import React from 'react';
import renderer from 'react-test-renderer';
import FormError from '../lib/FormElements/FormError';
import Form from '../lib/Form';

describe('Form Error component',() => {
    it('should render child view when no error', () => {
        const schema = {
            title: 'Form',
            properties:[]
        };
        const tree = renderer.create(<FormError onRenderError={()=>{} }>
                                        <Form schema={schema} />
                                     </FormError>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render error view when child component throws',() => {
        
    });
});