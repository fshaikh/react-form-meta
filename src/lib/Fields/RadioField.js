import React from 'react';
import PropTypes from 'prop-types';
import * as FieldControlFactory from '../FieldControlFactory';

export default function RadioField(props) {
    const field = props.field;
    var index = 0;
    return (
      <div>
          {field.properties.enum.map((option) => {
              const id = field.name + index;
              const template =  <div className="form-check" key={id}>
                                    <input {...FieldControlFactory.getFieldAttributes("radio", props, option,"form-check-input",id)}
                                           onChange={(event) => props.onChange(event,event.target.value)} />
                                    <label className="form-check-label" htmlFor={id}>
                                        {field.properties.enumNames[index]}
                                    </label>
                                </div>
                index++;
                return template;
          })}
      </div>
    );
}

RadioField.propTypes = {
    field: PropTypes.object.isRequired
};