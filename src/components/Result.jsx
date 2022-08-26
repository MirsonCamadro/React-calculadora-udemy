import React from "react";

const Result = (props) => {
    const { value } = props;
    return (
        <div className="result">
            { value }
        </div>
    )
};

export default Result;