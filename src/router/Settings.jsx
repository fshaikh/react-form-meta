import React from 'react';

const Settings = (props) => {
    return (
        <div>
            <span>User: {props.location.state ? props.location.state.username : ''}</span>
        </div>
    );
};

export default Settings;