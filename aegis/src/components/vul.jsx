import React from 'react';
import '../styles/vul.css'; // Make sure to adjust the import path based on your project structure

function Vuln({ content }) {
    return (
        <div className="container2">
            <div className="box2">
                <h2 className="heading2">VULN</h2>
                <div className="input2">{content}</div>
            </div>
        </div>
    );
}

export default Vuln;