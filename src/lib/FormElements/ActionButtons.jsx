import React from 'react';
import PropTypes from 'prop-types';
import {ActionButton} from './ActionButton';

export const ActionButtons = (props) => {
    // Props shape is :
    // actionButtons:[
    //     {
    //          type:"ActionSubmit",
    //            text: "Submit"
    //       },
    //       {
    //          type:"ActionButton",
    //          text: "Cancel"
    //       }
    // ]
    // Cases:
    // actionButtons not present or empty: Render default Submit component
    // If present
    //     Render each button based on type
    //     If Submit not povided, Render default Submit component
    
    // actionButtons not present or empty: Render default Submit component
    return (
        <div>
            {getActionButtons(props)}
        </div>
    );
    
};

const getActionButtons = (props) => {
    if(props.actionButtons.length === 0) {
        const actionButton = {text: 'Submit'};
        return <ActionButton  actionButton = {actionButton}
                              className = "btn-primary"
                              onClick = {(e) => {props.onClick(e)}} />
    }
    const actionButtons = props.actionButtons.map((actionButton) => {
        const clickFn = actionButton.type === 'ActionSubmit' ?
                                        (e) => {props.onClick(e)}:
                                        (e) => {props.onNonSubmitClick(e, actionButton.action)}
                                        //(e) => {e.preventDefault(); actionButton.action(e)};
        return <ActionButton key={actionButton.text}
                             actionButton = {actionButton}
                             className={actionButton.type === 'ActionSubmit' ? "btn-primary": ''}
                             onClick = {clickFn} />
        
    });
    return actionButtons;
}

ActionButtons.propTypes = {
    actionButtons: PropTypes.array,
    onClick: PropTypes.func,
    onNonSubmitClick: PropTypes.func
};
