import ErrorMessage from './ErrorMessage';

const maxLength = (name, value,fieldTitle, maxLength) => {
    const message = `${fieldTitle} must be less than ${maxLength}`;
    var errorMessage = new ErrorMessage();
    return value == null || value === '' || value.length < maxLength ? errorMessage.getErrorMessage(message) : errorMessage.getValidMessage();
};

export default maxLength;

