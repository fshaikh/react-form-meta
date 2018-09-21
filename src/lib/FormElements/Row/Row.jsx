import React from 'react';
import PropTypes from 'prop-types';

import Fields from '../Fields/Fields';

const Row = (props) => {
    const fields = props.row.fields;
    return (
        <div className="form-row">
           { Object.keys(fields).map((key) => {
                return <div className="col" key={key}>
                            <Fields key={key} field={fields[key]} />
                        </div>
                        
            })} 
        </div>
    )
};

Row.propTypes = {
    row: PropTypes.object.isRequired
};
export default Row;