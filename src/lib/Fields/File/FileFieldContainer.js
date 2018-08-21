import React from 'react';
import { FileField } from '../File/FileField';
import * as FileHelper from './FileHelper';
import FileItems from './FileItems';

export default class FileFieldContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            value:''
        };

        // bind event handlers
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.onFileDelete = this.onFileDelete.bind(this);
    }

    async handleOnChange(event){
        // Persist the event since it will be required in an async manner
        event.persist();
        this.handleEvent(event, this.props.onChange);
    }

    async handleOnFocus(event) {
        event.stopPropagation();
        //this.handleEvent(event, this.props.onFocus);
    }

    async handleEvent(event, eventHandler) {
        event.stopPropagation();
        var fileData  = [];
        const fileListArray = Array.from(event.target.files);
        for(const fileItem of fileListArray) {
            const fileObject = await FileHelper.getFileObject(fileItem);
            fileData.push(fileObject);
        }
        eventHandler(event, fileData);
        this.setState({
            files: fileData,
            value: this.getFileValue(fileData)
        });
    }

    getFileValue(fileData) {
        if(fileData.length === 0) {
            return '';
        }
        if(fileData.length === 1) {
            return fileData[0].name;
        }
        return `${fileData.length} files`;
    }

    onFileDelete(event , file) {
        const fileData = this.state.files.filter(fileItem => fileItem.name !== file.name);
        this.setState({
            files: fileData,
            value: this.getFileValue(fileData)
        });
    }

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

