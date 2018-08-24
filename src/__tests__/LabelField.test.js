import React from 'react';
import LabelField from '../lib/Fields/LabelField';
import renderer from 'react-test-renderer';

describe('Label Field',() => {
    describe('Component tests for Label Field',() => {
        it('should check for prop types',() => {
            const field = {
                required: true,
                name: 'firstName',
                label:'First Name'
            };
            const tree = renderer.create(<LabelField field={field} className={[]}/>);
        });
    });

    describe('Snapshot tests for Label Field', () => {
        it('should render correctly for required field', () => {
            const field = {
                required: true,
                name: 'firstName',
                label:'First Name'
            };
            const tree = renderer.create(<LabelField field={field} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    
        it('should render correctly for non-required field', () => {
            const field = {
                required: false,
                name: 'firstName',
                label:'First Name'
            };
            const tree = renderer.create(<LabelField field={field} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
   
});