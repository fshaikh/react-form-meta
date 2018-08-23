import React from 'react';
import { FileField } from '../File/FileField';
import * as FileHelper from './FileHelper';
import FileItems from './FileItems';

/**
 * Container component for File field
 */
export default class FileFieldContainer extends React.Component {
    /**
     * Initializes a new instance of FileFieldContainer
     * @param {object} props 
     */
    constructor(props) {
        super(props);

        // define the component staet
        this.state = {
            files: [],  // files selected by the user
            value:''    // text to be shown to user when files are selected
        };

        // bind event handlers
        this.bindEventHandlers();
    }

    /**
     * Bind event handlers so that 'this' context is set to class instance
     */
    bindEventHandlers() {
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.onFileDelete = this.onFileDelete.bind(this);
    }

    /**
     * Event handler for onChange event
     * @param { SyntheticEvent} event 
     */
    async handleOnChange(event){
        // Persist the event since it will be required in an async manner
        event.persist();
        this.handleEvent(event, this.props.onChange);
    }

    async handleOnFocus(event) {
        event.stopPropagation();
        //this.handleEvent(event, this.props.onFocus);
    }

    /**
     * Common function whic handles logic for onChange and onFocus events
     * @param {* SyntheticEvent} event 
     * @param {* function } eventHandler - Event handler to be invoked
     */
    async handleEvent(event, eventHandler) {
        event.stopPropagation();
        var fileData  = [];
        // FileList is array-like. To do array operations on it, convert it to array first
        const fileListArray = Array.from(event.target.files);
        // iterate each file selected by the user
        for(const fileItem of fileListArray) {
            // get the file object: data + metadata. This ias an async operation since reading file data
            // is asynchronous
            const fileObject = await FileHelper.getFileObject(fileItem);
            // add the file object to fileData array
            fileData.push(fileObject);
        }

        // Fire the passed in event handler, passing event and fileData.
        eventHandler(event, fileData);
        // Set the component state. This will cause re-render of the component and its children
        this.setState({
            files: fileData,
            value: this.getFileValue(fileData)
        });
    }

    /**
     * Gets the text to be shown to the user in the File field
     * @param { Array } fileData - Array of file objects
     */
    getFileValue(fileData) {
        if(fileData.length === 0) {
            return '';
        }
        if(fileData.length === 1) {
            return fileData[0].name;
        }
        return `${fileData.length} files`;
    }

    /**
     * Event handler for file delete event
     * @param { SyntheticEvent} event 
     * @param {*} file - File being removed
     */
    onFileDelete(event , file) {
        // filter the files
        const fileData = this.state.files.filter(fileItem => fileItem.name !== file.name);
        // set the name of the event to be container component
        event.target.name = this.props.field.name;
        event.stopPropagation();
        // fire the onchange event to ensure the formData is properly updated
        this.props.onChange(event, fileData);
        // set state to ensure UI is re-rendered
        this.setState({
            files: fileData,
            value: this.getFileValue(fileData)
        });
    }

    /**
     * Render function which returns the component UI
     */
    render() {
        return(
            <div className="custom-file">
                <FileField field={this.props}
                           value={this.state.value}
                           onChange={this.handleOnChange}
                           onFocus={this.handleOnFocus}/>
                <FileItems files={this.state.files}
                           onFileDelete={this.onFileDelete} />
            </div>
        );
    }
}
// export const FileFieldContainer = (props) => {
//     async function handleOnChange(event){
//         handleEvent(event, props.onChange);
//     }

//     async function handleOnFocus(event) {
//         handleEvent(event, props.onFocus);
//     }

//     async function handleEvent(event, eventHandler) {
//         event.stopPropagation();
//         var fileData  = [];
//         Array.from(event.target.files)
//              .forEach(async (file) => fileData.push(await FileHelper.getFileObject(file)));
//         eventHandler(event, fileData)
//     }
//     return (
//         <div>
//             <FileField field={props}
//                        onChange={handleOnChange}
//                        onFocus={handleOnFocus}/>
//             <FileItems files={} />
//         </div>
//     );
// }

