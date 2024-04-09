import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from "react";
import "../styles/analyse.css";

const API_KEY = "AIzaSyDzF8HyBSgw3fvDo-yhMO5eI0NcIi5E91A";
const genAI = new GoogleGenerativeAI(API_KEY);

export function ChatComponent({ onOutputChange }) {
    const [output, setOutput] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const userInput = event.target.query.value;

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(userInput);
        const response = await result.response;
        const text = await response.text();
        setOutput(text);
        onOutputChange(text); 
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="column">
                    <div className="row">
                        <textarea name="query" className="prompt" placeholder="Enter prompt text"></textarea>
                        <button type="submit" className="generate-button">Generate</button>
                    </div>
                    <textarea value={output} className="output" placeholder="Output will be displayed here" readOnly></textarea>
                </div>
            </form>
        </>
    );
}

export default ChatComponent;