/**
 * Defined functions related to HTML5 file API
 */

/**
 * Returns a custom file object from HTML5 File object
 * @param {*} file - HTML5 File
 */
    export const getFileObject = async (file) => {
        // Return a promise, since reading file data is an asynchronous operation
        return new Promise((resolve , reject) => {
            if(file == null) {
                resolve({});
                return;
            }
            // construct the file object to be returned when promise is resolved. This initially
            // contains the file metadata
            var fileObject = {
                name: file.name, // name of the file including extension
                size: file.size, // file size in bytes
                type: file.type, // file content type
                lastModified: file.lastModified, // file last modified timestamp in UNIX format
                extension: file.name.substring(file.name.lastIndexOf('.')) // file extension
            };

            // construct FileReader object
            var fileReader = new FileReader();
            // register for onload event. This is trigerred when reading of file data is completed
            fileReader.onload = () => load(fileReader.result);
            // start the file reading process.
            fileReader.readAsText(file);

            // Event handler invoked by FileReader when file load is complete
            const load = (result) => {
                // set the data in file object to be returned when the promise is resolved
                fileObject.data = result;
                // resolve the promise
                resolve(fileObject);
            };
        });
    };

    export const getFileMeta = (file) => {
        return {
            name: file.name, // name of the file including extension
            size: file.size, // file size in bytes
            type: file.type, // file content type
            lastModified: file.lastModified, // file last modified timestamp in UNIX format
            extension: file.name.substring(file.name.lastIndexOf('.')) // file extension
        };
    };

    
    
