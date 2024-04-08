import React, { useState } from "react";
import "../styles/searchbar.css";
export function SearchBar({}) {
    
    const [search, setSearch] = useState("");
    const handleUrl = (e) => {
        setSearch(e.target.value);
    }

    const searchCity = () => {
        window.location.href = `/test?query="${search}"`
    }
    return (
        <div className="searchBar">
            <input
                className="searchInput"
                type="text"
                placeholder="Enter a url"
                value={search}
                onChange={handleUrl}
            />
            <button className="searchButton" onClick={searchCity}>Search</button>
        </div>
    );

}
