
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

export default function getFieldControl(type) {
    return components[type];
}