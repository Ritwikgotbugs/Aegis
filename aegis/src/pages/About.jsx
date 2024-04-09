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
      description: "This vulnerability occurs when SQL queries are constructed by concatenating strings, making the code susceptible to SQL injection attacks.",
      keywords: ["concat", "sprintf", "+", "||"],
    },
    {
      name: "Unsanitized User Input",
      description: "This vulnerability arises when user inputs are not properly sanitized before being used in database queries, leading to SQL injection vulnerabilities.",
      keywords: [
        "mysql_real_escape_string",
        "mysqli_real_escape_string",
        "pg_escape_string",
        "addslashes",
      ],
    },
    { 
      name: "SQL Comments", 
      description: "SQL comments can be used to bypass input validation or inject malicious code into database queries.",
      keywords: ["--", "/* */"] 
    },
    {
      name: "Error Messages",
      description: "Exposing detailed error messages to users can inadvertently reveal sensitive information about the system, making it easier for attackers to exploit vulnerabilities.",
      keywords: [
        "mysql_error",
        "mysqli_error",
        "pg_last_error",
        "PDO::errorInfo",
      ],
    },
    { 
      name: "Database Error Handling", 
      description: "Improper handling of database errors can lead to security vulnerabilities such as information leakage or denial of service attacks.",
      keywords: ["die", "exit"] 
    },
    {
      name: "Dynamic Query Execution",
      description: "Executing dynamically constructed queries without proper validation can lead to SQL injection vulnerabilities.",
      keywords: ["eval", "exec", "system", "shell_exec", "passthru"],
    },
    {
      name: "Hardcoded Credentials",
      description: "Embedding credentials directly into the code exposes them to potential leakage or unauthorized access.",
      keywords: ["username", "password", "db_user", "db_pass"],
    },
    {
      name: "File System Access",
      description: "Granting unrestricted access to file system operations can lead to security vulnerabilities such as arbitrary file inclusion or information disclosure.",
      keywords: ["file_get_contents", "fopen", "readfile", "include", "require"],
    },
    {
      name: "Cross-Site Scripting (XSS)",
      description: "Failure to properly sanitize user inputs before rendering them in web pages can allow attackers to inject malicious scripts, leading to cross-site scripting vulnerabilities.",
      keywords: ["echo", "print", "innerHTML", "document.write"],
    },
    {
      name: "Insecure Object Deserialization",
      description: "Deserializing untrusted data can lead to security vulnerabilities such as remote code execution or denial of service attacks.",
      keywords: ["ObjectInputStream", "readObject", "deserialize"],
    },
    {
      name: "Insecure Randomness",
      description: "Using insecure random number generators or weak cryptographic algorithms can compromise the confidentiality and integrity of sensitive data.",
      keywords: ["java.util.Random", "Math.random", "java.security.SecureRandom"],
    },
    {
      name: "Weak Cryptography",
      description: "Using weak cryptographic algorithms or improper encryption practices can result in data breaches and compromise the confidentiality of sensitive information.",
      keywords: [
        "MD5", 
        "SHA-1", 
        "DES", 
        "RC4", 
        "Single DES", 
        "Triple DES",
        "Base64 Encoding",
        "ROT13"
      ],
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

  const handleValidation = async (outputValue) => {
    const userInput = outputValue + "find security flaws in the code and be specific and provide brief solution for those,first provide flaws then the solutions    ";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(userInput);
    const response = await result.response;
    const text = await response.text();

    setValidationOutput(text); 
    return text;
  };

  const handleCategorization = (outputValue) => {
    const categorizedOutput = categorizeCodeSnippets([outputValue], dataset);
    setCategorizedSnippets(categorizedOutput);
  };

  const handleValidationButtonClick = async () => {
    const validationText = await handleValidation(outputValue);
    handleCategorization(validationText);
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
          {dataset.map((vulnerability) => (
            <div key={vulnerability.name}>
              {vulnerability.name === category && (
                <p>{vulnerability.description}</p>
              )}
            </div>
          ))}
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
