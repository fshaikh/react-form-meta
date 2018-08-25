
import ShortTextField from './Fields/ShortTextField';
import LongTextField from './Fields/LongTextField';
import DateTimeField from './Fields/DataTimeField';
import CheckBoxField from './Fields/CheckBoxField';
import DropdownField from './Fields/Dropdown';
import RadioField from './Fields/RadioField';
import FileFieldContainer from './Fields/File/FileFieldContainer';

const components = {
    'ShortText': ShortTextField,
    'LongText': LongTextField,
    'Number': ShortTextField,
    'Email': ShortTextField,
    'Password': ShortTextField,
    'DateTime': DateTimeField,
    'CheckBox': CheckBoxField,
    'Select': DropdownField,
    'Radio': RadioField,
    'File': FileFieldContainer
};

export function getFieldControl(type) {
    return components[type];
}

export const getFieldAttributes = (type,
                                   props,
                                   value = props.value,
                                   className = "form-control",
                                   id = props.id) => {
    return {
        type: type,
        className: className,
        defaultValue : value,
        name: props.field.name,
        id: id
    };
}
