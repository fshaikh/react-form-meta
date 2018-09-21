import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row/Row';

const Rows = (props) => {
    return (
        Object.keys(props.rows).map((key) => {
            return <Row key={key} row={props.rows[key]} />
        })
    )
};

Rows.propTypes = {
    rows: PropTypes.object.isRequired
};
export default Rows;