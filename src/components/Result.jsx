import React from "react";
import PropTypes from "prop-types";

const Result = ({ value }) => {
    return (
        <div className="result">
            { value }
        </div>
    )
};

// Validacion del tipo de dato
Result.propTypes = {
    value: PropTypes.string.isRequired
}

export default Result;