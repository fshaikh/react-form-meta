import {Validators} from './validatorExports';

const validatorKeys = {
    'required': Validators.required,
    'minLength': Validators.minLength
};


export default function getValidator(key) {
    switch(key) {
        case 'required':
            return validatorKeys.required;
        case 'minLength':
            return validatorKeys.minLength;
        default:
            return () => {};
    }
}