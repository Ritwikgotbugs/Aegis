import React from 'react';
import '../styles/output.css'; // Make sure to adjust the import path based on your project structure

function Output({ content }) {
    return (
        <div className="container">
            <div className="box">
                <h2 className="heading">OUTPUT</h2>
                <div className="input">{content}</div>
            </div>
        </div>
    );
}

export default Output;
