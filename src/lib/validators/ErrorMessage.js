export default class ErrorMessage {
    constructor() {
        this.isValid = true;
        this.errorMessage = ''
    }

    getValidMessage() {
        return {
            isValid: this.isValid,
            errorMessage: this.errorMessage
        };
    }

    getErrorMessage(message) {
        this.errorMessage = message;
        return {
            isValid: false,
            errorMessage: this.errorMessage
        };
    }
}