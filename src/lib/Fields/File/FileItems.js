import React from 'react';
import FileItem from './FileItem';

export default function FileItems({files , onFileDelete}) {
    return (
        <ul>
            {files.map(file => <FileItem key={file.name} file={file} onFileDelete={onFileDelete} />)}
        </ul>
    );
}