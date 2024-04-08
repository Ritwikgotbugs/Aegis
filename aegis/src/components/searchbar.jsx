import React, { useState } from "react";
import "../styles/searchbar.css";


export function SearchBar() {
    const [search, setSearch] = useState("");
    const [chatbotResponse, setChatbotResponse] = useState("");

    const handleUrl = (e) => {
        setSearch(e.target.value);
    }

    const searchCity = async () => {
        try {
            const response = await openai.completion.create({
                engine: 'davinci',
                prompt: `You: ${search}\n`,
                max_tokens: 50
            });
            setChatbotResponse(response.choices[0].text);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="searchBar">
            <input
                className="searchInput"
                type="text"
                placeholder="Enter a message"
                value={search}
                onChange={handleUrl}
            />
            <button className="searchButton" onClick={searchCity}>Search</button>
            {chatbotResponse && (
                <div className="chatbotResponse">
                    {chatbotResponse}
                </div>
            )}
        </div>
    );
}
