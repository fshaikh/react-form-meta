import React from 'react';
import renderer from 'react-test-renderer';

import HintText from '../lib/Fields/HintText';

describe('Hint Text UI',() => {
    describe('Component tests for Hint Text UI', () => {
        it('should validate prop types',()=>{
            renderer.create(<HintText hintText={''}/>);
        });
    });
    describe('Snapshot tests for Hint Text UI', () => {
        it('should render Hint Text UI', () => {
            const field = {
                hintText: 'Password must be greater than 10 characters'
            };
            const tree = renderer.create(<HintText hintText={field.hintText} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});