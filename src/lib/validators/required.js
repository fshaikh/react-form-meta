import ErrorMessage from './ErrorMessage';

const required = (name, value, fieldTitle) => {
    const message = `${fieldTitle} must have a value`;
    var errorMessage = new ErrorMessage();
    return value == null || value === '' ? errorMessage.getErrorMessage(message) : errorMessage.getValidMessage();
};

export default required;