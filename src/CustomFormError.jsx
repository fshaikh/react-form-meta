import React from 'react';

/**
 * Component for defining error boundary for Form component
 */
export default class CustomFormError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    /**
     * 
     * @param {*} error - error that has been thrown.
     * @param {*object} info - object with componentStack key. The property has information about component stack during thrown error.
     */
    componentDidCatch(error, info) {
        this.setState({hasError: true});
        //this.props.onRenderError(error, info);
    }

    render() {
        return (
                this.state.hasError ? <div>Oops. Something went wrong. Custom!!</div>
                                    : this.props.children
        );
    }
}