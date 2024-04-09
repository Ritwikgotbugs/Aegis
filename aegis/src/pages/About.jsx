import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"; 
import "../styles/analyse.css";
import ChatComponent from "../components/output";
import Validate from "../components/validator";

const API_KEY = "AIzaSyDzF8HyBSgw3fvDo-yhMO5eI0NcIi5E91A"; 
const genAI = new GoogleGenerativeAI(API_KEY);

export function About(){
    const [outputValue, setOutputValue] = useState(""); 
    const [validationOutput, setValidationOutput] = useState("");

    const handleOutputChange = (value) => {
        setOutputValue(value);
    };

    async function handleValidation(outputValue) {
        const userInput = outputValue + "give vulnerabilities in the code";

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(userInput);
        const response = await result.response;
        const text = await response.text();

        setValidationOutput(text); 
    }

    return (
        <div className="container">
            <div className="left-side">
                <ChatComponent onOutputChange={handleOutputChange} />
            </div>
            <button onClick={() => handleValidation(outputValue)}>Check for Vulnerabilities</button> {/* Call a function to handle validation */}
            <Validate outputValue={validationOutput} />
        </div>
    );
}

export default About;
