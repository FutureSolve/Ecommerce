import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery !== '') { // Check if searchQuery is not empty
          const response = await fetch(`http://localhost:5000/api/v1/Product/search?query=${searchQuery}`);
          const data = await response.json();
          setSearchResults(data);
          // Handle the response data here...
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke fetchData regardless of searchQuery (to handle initial fetch or clear results)
  }, [searchQuery]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SearchPage;
