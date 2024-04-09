import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"; 
import "../styles/analyse.css";
import ChatComponent from "../components/output";
import Validate from "../components/validator";

const API_KEY = "AIzaSyDzF8HyBSgw3fvDo-yhMO5eI0NcIi5E91A"; 
const genAI = new GoogleGenerativeAI(API_KEY);

const dataset = [
  {
    name: "Dynamic SQL Concatenation",
    keywords: ["concat", "sprintf", "+", "||"],
  },
  {
    name: "Unsanitized User Input",
    keywords: [
      "mysql_real_escape_string",
      "mysqli_real_escape_string",
      "pg_escape_string",
      "addslashes",
    ],
  },
  { name: "SQL Comments", keywords: ["--", "#", "/* */"] },
  {
    name: "Error Messages",
    keywords: [
      "mysql_error",
      "mysqli_error",
      "pg_last_error",
      "PDO::errorInfo",
    ],
  },
  { name: "Database Error Handling", keywords: ["die", "exit"] },
  {
    name: "Dynamic Query Execution",
    keywords: ["eval", "exec", "system", "shell_exec", "passthru"],
  },
  {
    name: "Hardcoded Credentials",
    keywords: ["username", "password", "db_user", "db_pass"],
  },
  {
    name: "File System Access",
    keywords: ["file_get_contents", "fopen", "readfile", "include", "require"],
  },
  {
    name: "Cross-Site Scripting (XSS)",
    keywords: ["echo", "print", "innerHTML", "document.write"],
  },
];

function categorizeCodeSnippets(outputValue, dataset) {
  const categorizedSnippets = {};

  // Iterate through each code snippet
  outputValue.forEach((snippet, index) => {
    categorizedSnippets[index] = {};

    // Iterate through each vulnerability category
    dataset.forEach((category) => {
      // Check for matches with category keywords
      const foundKeywords = category.keywords.filter((keyword) =>
        snippet.includes(keyword)
      );
      if (foundKeywords.length > 0) {
        categorizedSnippets[index][category.name] = foundKeywords;
      }
    });

    // If no vulnerabilities found, categorize as "No vulnerabilities found"
    if (Object.keys(categorizedSnippets[index]).length === 0) {
      categorizedSnippets[index] = { "No vulnerabilities found": null };
    }
  });

  return categorizedSnippets;
}

export function About(){
  const [outputValue, setOutputValue] = useState(""); 
  const [validationOutput, setValidationOutput] = useState("");
  const [categorizedSnippets, setCategorizedSnippets] = useState(null);

  const handleOutputChange = (value) => {
    setOutputValue(value);
  };

  async function handleValidation(outputValue) {
    const userInput = outputValue + "find security flaws in the code and be specific and provide brief solution for those,first provide flaws then the solutions    ";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(userInput);
    const response = await result.response;
    const text = await response.text();

    setValidationOutput(text); 
    const categorizedOutput = categorizeCodeSnippets([outputValue], dataset);
    setCategorizedSnippets(categorizedOutput);
  }

  const handleValidationButtonClick = () => {
    handleValidation(outputValue);
  };

  return (
    <div className="container">
      <div className="left-side">
        <ChatComponent onOutputChange={handleOutputChange} />
      </div>
      <button className="check-button" onClick={handleValidationButtonClick}>Check for Vulnerabilities</button>
      <Validate outputValue={validationOutput} />
      <div className="down-side">
        {categorizedSnippets && Object.keys(categorizedSnippets).map((index) => (
          <div key={index}>
            {Object.keys(categorizedSnippets[index]).map((category) => (
              <div key={category}>
                <h3>{category}</h3>
                <ul>
                  {categorizedSnippets[index][category].map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
