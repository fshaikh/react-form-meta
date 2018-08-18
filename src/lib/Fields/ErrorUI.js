import React from 'react';
import '../Form.css';

export default function ErrorUI({showError, errorMessages}) {
    if(errorMessages.length === 0) {
        return '';
    }
    var index = 0;
    return (
        <ul className="validation-error">
            {errorMessages.map((message) => {
                return <li key={index++}>
                    <span className="validation-error-text">{message}</span>
                </li>
            })}
            
        </ul>
    )
    
}