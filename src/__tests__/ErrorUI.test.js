import React from 'react';
import ErrorUI from '../lib/Fields/ErrorUI';
import renderer from 'react-test-renderer';

describe('Error UI',() => {
    describe('Snapshot tests for Error UI', () => {
        it('should render empty when showEror is false', () => {
            var showError = false;
            const errorMessages =[];
            const tree = renderer.create(<ErrorUI showError={showError} errorMessages={errorMessages} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render empty when showEror is true and no error messages', () => {
            var showError = true;
            const errorMessages =[];
            const tree = renderer.create(<ErrorUI showError={showError} errorMessages={errorMessages} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
        
        it('should render error messages ', () => {
            var showError = true;
            const errorMessages =['Error message 1','Error message 2'];
            const tree = renderer.create(<ErrorUI showError={showError} errorMessages={errorMessages} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
   
});