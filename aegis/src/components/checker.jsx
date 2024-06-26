import React from "react";
import { Vulnerability } from "./vuln";

const topics = [
    {
      title: 'SQL-Injection',
      description: 'SQL injection is a malicious technique used by attackers to manipulate a database by inserting or "injecting" malicious SQL code into input fields of a web application. This code can modify, delete, or extract sensitive data from the database. For example, an attacker could input something like "1; DROP TABLE users;-- into a login form, causing the database to execute both the legitimate query and the malicious one, potentially leading to catastrophic data loss. Preventing SQL injection involves validating and sanitizing user input, as well as using parameterized queries or prepared statements to interact with the database, which help to prevent malicious SQL injection attacks.' ,
      percentage: 30,
      bool: false
    },
    {
      title: 'Encryption',
      description: 'Encryption is a method of securing data by converting it into an unreadable format called ciphertext. It is used to protect sensitive information from unauthorized access or interception during transmission or storage. Encryption algorithms utilize keys to encrypt and decrypt data, with only authorized parties possessing the necessary keys to access the original plaintext. This process ensures confidentiality and data integrity, making encryption a fundamental component of cybersecurity protocols across various industries and applications.',
      percentage: 90,
      bool: false

    },
    {
      title: 'Auth(2FA)',
      description: 'Authentication through Two-Factor Authentication (2FA) is a security mechanism that adds an extra layer of protection to user accounts beyond traditional username and password combinations. In addition to entering their credentials, users must also provide a second form of verification, typically a temporary code generated by a separate device or application. This code is usually sent via SMS, email, or generated by an authenticator app. 2FA significantly enhances account security by requiring something the user knows (password) and something they have (temporary code), reducing the risk of unauthorized access even if passwords are compromised.',
      percentage: 60,
      bool: false

    },

  
  ];

export function CheckVulnerability() {
    return (
        <>
            {topics.map((topic, index) => (
                <Vulnerability key={index} text={topic.title} bool={topic.bool}/>
            ))}
        </>
    );
}
