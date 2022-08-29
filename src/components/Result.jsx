import React from "react";
import PropTypes from "prop-types";

const Result = ({ value }) => (
    <div className="result">
        { value }
    </div>
)


// Validacion del tipo de dato
Result.propTypes = {
    value: PropTypes.string.isRequired
}

//valor por defecto

Result.defaultProps = {
    value: "0"
}

export default Result;