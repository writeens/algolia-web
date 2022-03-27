import React from 'react';
import { SearchBox } from 'react-instantsearch-dom';

const Banner = () => (
  <header className="search-header">
    <h2 className="search-header__h2">All the information you need about the places you love</h2>
    <SearchBox translations={{ placeholder: 'Search for restaurants by name, cuisine type' }} />
  </header>
);

export default Banner;
