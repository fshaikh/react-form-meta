
import ShortTextField from './Fields/ShortTextField';
import LongTextField from './Fields/LongTextField';
import DateTimeField from './Fields/DataTimeField';
import CheckBoxField from './Fields/CheckBoxField';
import DropdownField from './Fields/Dropdown';
import RadioField from './Fields/RadioField';

const components = {
    'ShortText': ShortTextField,
    'LongText': LongTextField,
    'Number': ShortTextField,
    'Email': ShortTextField,
    'Password': ShortTextField,
    'DateTime': DateTimeField,
    'CheckBox': CheckBoxField,
    'Select': DropdownField,
    'Radio': RadioField
};

export function getFieldControl(type) {
    return components[type];
}

export const getFieldAttributes = (type,
                                   props,
                                   id = props.field.name,
                                   value = props.value,
                                   className = "form-control") => {
    return {
        type: type,
        className: className,
        defaultValue : value,
        name: props.field.name,
        id: id
    };
}
