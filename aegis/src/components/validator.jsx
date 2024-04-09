import React from "react";

export function Validate({ outputValue }) {
    return (
        <div className="right-side">
            <textarea className="validated" value={outputValue} placeholder="Validation status" readOnly></textarea>
        </div>
    );
}

export default Validate;