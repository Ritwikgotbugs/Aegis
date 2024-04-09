import React from "react";
import "../styles/analyse.css";

export function About(){
    return (
        <div className="container">
            <div className="left-side">
                <div className="column">
                    <div className="prompt"></div>
                    <div className="output"></div>
                </div>
            </div>
            <div className="right-side">
                <div className="validated"></div>
            </div>
        </div>
    );
}

export default About;
