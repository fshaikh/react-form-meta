import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for defining error boundary for Form component
 */
export default class FormError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    /**
     * 
     * @param {*} error - error that has been thrown.
     * @param {*object} info - object with componentStack key. The property has information about component stack during thrown error.
     */
    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, error: error, errorInfo: errorInfo});
        this.props.onRenderError(error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

FormError.propTypes = {
    children: PropTypes.node.isRequired,
    onRenderError: PropTypes.func
};