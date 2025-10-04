import { useState } from "react";
import "./SearchBox.css";
import TabButton from "../TabButton/TabButton";

export default function SearchBox({ onSearch }) {
    const [query, setQuery] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    setQuery("");
    } 


  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-input"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <TabButton label="Search" type="submit" />
    </form>
  );
}
