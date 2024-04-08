import React, { useState } from "react";
import "../styles/prompt.css"; // Ensure correct import path

function Prompt() {
    const [userInput, setUserInput] = useState("");

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    }

    return (
        <div className="promptContainer">
            <div className="promptBox">
                <h2 className="promptHeading">ENTER PROMPT</h2>
                <input
                    className="promptInput"
                    type="text"
                    placeholder="Enter your prompt here"
                    value={userInput}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default Prompt;
