import React from 'react';
import './FileItem.css'

export default function FileItem({file, onFileDelete}) {
    return (
        <li className='file-item'>
            <span className='file-name'>{file.name}</span>
            <span>{` (${file.type}, ${file.size} bytes)`}</span>
            <span onClick={event => onFileDelete(event , file)}>X</span>
        </li>
    );
}