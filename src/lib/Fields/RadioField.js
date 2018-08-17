import React from 'react';


export default function RadioField(props) {
    const field = props.field;
    var index = 0;
    return (
      <div>
          {field.enum.map((option) => {
              const id = field.name + index;
              const template =  <div className="form-check" key={id}>
                                    <input className="form-check-input" type="radio"
                                           name={field.name} id={id}
                                           value={option} 
                                           onChange = { (event) => props.onChange(event, field.name)} />
                                    <label className="form-check-label" htmlFor={id}>
                                        {field.enumNames[index]}
                                    </label>
                                </div>
                index++;
                return template;
          })}
      </div>
    );
}