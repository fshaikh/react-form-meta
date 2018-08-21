import React from 'react';
import './FileItem.css'

export default function FileItem({file}) {
    return (
        <li>
            <span className='file-name'>{file.name}</span>
            <span>{` (${file.type}, ${file.size} bytes)`}</span>
        </li>
    );
}