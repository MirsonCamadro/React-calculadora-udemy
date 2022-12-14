import React from "react";
import Button from "./Button/Button";
import PropTypes from 'prop-types';

const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="Clear" clickHandler={onContentClear} />
        <Button type="" text="&larr;" clickHandler={onDelete} />
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions;
