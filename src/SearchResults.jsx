import React from 'react';
import { useSelector } from 'react-redux';

function SearchResults() {
  const query = useSelector(state => state.search.query);
  const products = useSelector(state => state.products.items); // Assuming products are stored in Redux

  const filteredResults = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <ul>
        {filteredResults.length > 0 ? (
          filteredResults.map(product => (
            <li key={product.id}>{product.name}</li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
}

export default SearchResults;