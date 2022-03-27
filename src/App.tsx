import algoliasearch from 'algoliasearch';
import React, { useRef } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import Banner from './components/Banner';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Results from './components/Results';

const {
  REACT_APP_ALGOLIA_INDEX_NAME,
  REACT_APP_ALGOLIA_API_KEY, REACT_APP_ALGOLIA_APP_ID,
} = process.env;

const searchClient = algoliasearch(
  `${REACT_APP_ALGOLIA_APP_ID}`,
  `${REACT_APP_ALGOLIA_API_KEY}`,
);

const App = () => {
  const appContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={appContainerRef} className="app-container">
      <Navbar />
      <InstantSearch
        searchClient={searchClient}
        indexName={`${REACT_APP_ALGOLIA_INDEX_NAME}`}
      >
        <Banner />
        <main className="main-container">
          <Filters ref={appContainerRef} />
          <Results />
        </main>
      </InstantSearch>
    </div>
  );
};

export default App;
