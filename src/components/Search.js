import React, { useState } from "react";
import '../App.css'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <button className="search-btn">
                <img className="search-img" src={require('../assets/search-icon.png')} alt="Search" onClick={callSearchFunction} />
            </button>

        </form>
    );
}

export default Search;
