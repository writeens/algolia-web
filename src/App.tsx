import algoliasearch from 'algoliasearch';
import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

const {
  REACT_APP_ALGOLIA_INDEX_NAME,
  REACT_APP_ALGOLIA_API_KEY, REACT_APP_ALGOLIA_APP_ID,
} = process.env;

const searchClient = algoliasearch(
  `${REACT_APP_ALGOLIA_APP_ID}`,
  `${REACT_APP_ALGOLIA_API_KEY}`,
);

const App = () => (
  <div className="app-container">
    <Navbar />
    <InstantSearch
      searchClient={searchClient}
      indexName={`${REACT_APP_ALGOLIA_INDEX_NAME}`}
    >
      <Banner />
    </InstantSearch>
  </div>
);

export default App;
