import React from 'react';
import PropTypes from 'prop-types';
import FileItem from './FileItem';

export default function FileItems({files , onFileDelete}) {
    return (
        <ul className="list-group">
            {files.map(file => <FileItem key={file.name} file={file} onFileDelete={onFileDelete} />)}
        </ul>
    );
}

FileItems.propTypes = {
    files: PropTypes.arrayOf(File),
    onFileDelete: PropTypes.func.isRequired
};