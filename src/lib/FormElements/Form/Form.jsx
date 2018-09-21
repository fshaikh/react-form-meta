/**
 * React specific imports
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Lib specific imports
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../Title';
import Description from '../Description';

const Form = (props) => {
    const {
        title,
        description,
        rootIdPrefix,
        id,
        name,
        className,
        autoComplete
    } = props.formProperties;

    return (
        <form 
            id = {id}
            name = {name}
            className = {className}
            autoComplete = {autoComplete.toString()}
            
            >
            <div className="form-group">
                <fieldset>
                    <Title title={title} />
                    <Description description={description} />
                    <div>
                        {props.children}
                    </div>
                </fieldset>
            </div>
            {props.actionButtons}
        </form>
    )
};

Form.propTypes = {
    formProperties: PropTypes.object,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    actionButtons: PropTypes.element.isRequired
};

export default Form;