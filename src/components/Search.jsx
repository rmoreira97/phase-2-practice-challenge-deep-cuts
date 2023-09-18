import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search your Tracks"
        value={searchTerm}
        onChange={handleSearch}
      />
      <i>🔎</i>
    </div>
  );
}

export default Search;
