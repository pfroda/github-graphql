import { useState } from 'react';

type Props = { onSearch: (query: string) => void };

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-3/4 border-2 px-2 rounded-sm"
        placeholder="Search title or body"
      />
      <button onClick={handleSearch} className="w-1/4">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
