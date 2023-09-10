import React from "react";

export default function SearchBar({ input, handleChange, handleSubmit, news }) {
  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search Titles"
          onChange={(e) => handleChange(e.target.value)}
          value={input}
        />

        <button type="submit" className="search_button">
          <span className="material-icons-outlined">search</span>
        </button>
      </form>
    </>
  );
}
