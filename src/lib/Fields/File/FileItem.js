import React from 'react';
import './FileItem.css'

export default function FileItem({file, onFileDelete}) {
    return (
        <li className='list-group-item'>
            <span className='file-name'>{file.name}</span>
            <span>{` (${file.type}, ${file.size} bytes)`}</span>
            <span className="badge badge-primary badge-pill delete-option"
                  title="Remove the file"
                  onClick={event => onFileDelete(event , file)}>X</span>
        </li>
    );
}