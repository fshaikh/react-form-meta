import {Validators} from './validatorExports';

const validatorKeys = {
    'required': Validators.required,
    'minLength': Validators.minLength,
    'maxLength': Validators.maxLength
};


export default function getValidator(key) {
    switch(key) {
        case 'required':
            return validatorKeys.required;
        case 'minLength':
            return validatorKeys.minLength;
        case 'maxLength':
            return validatorKeys.maxLength;
        default:
            return () => {};
    }
}