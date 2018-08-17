import React from 'react';

export default function SubmitButton(props) {
    return (
        <div>
            <button onClick={props.onClick} className="btn btn-primary">Submit</button>
        </div>
    );
}