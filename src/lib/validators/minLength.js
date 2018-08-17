import ErrorMessage from './ErrorMessage';

const minLength = (name, value,fieldTitle, minLength) => {
    const message = `${fieldTitle} must be greater than ${minLength}`;
    var errorMessage = new ErrorMessage();
    return value == null || value === '' || value.length < minLength ? errorMessage.getErrorMessage(message) : errorMessage.getValidMessage();
};

export default minLength;

