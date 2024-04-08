import React from 'react';
import "../styles/vuln.css";

export function Vulnerability({ text, bool }) {
    return (
        <div className='box'>
            <p className='text'>{text}</p>
            <div className={bool ? "green" : "red"}></div>
        </div>
    );
}
