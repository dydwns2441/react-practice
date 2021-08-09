import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("")

  const handleData = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFiltered = data.filter((el) => {
      return el.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord.length===0) {
      setFilteredData([]);
    } else {
      setFilteredData(newFiltered);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("")
  }
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleData} />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                href={value.link}
                target="_blank"
                rel="noreferrer"
                onClick={clearInput}
              >
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
