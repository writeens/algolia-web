import algoliasearch from 'algoliasearch';
import React, { useRef, useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { ToastContainer } from 'react-toastify';
import Banner from './components/Banner';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Results from './components/Results';
import { SearchProvider } from './context/Search';
import { useURLSync } from './hooks/useURLSync';

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
  const [refresh, setRefresh] = useState(false);
  const {
    onSearchStateChange, createURL, searchState,
  } = useURLSync();

  return (
    <SearchProvider state={{ refresh, updateRefresh: setRefresh }}>
      <div ref={appContainerRef} className="app-container">
        <Navbar />
        <InstantSearch
          searchClient={searchClient}
          indexName={`${REACT_APP_ALGOLIA_INDEX_NAME}`}
          onSearchStateChange={onSearchStateChange}
          createURL={createURL}
          searchState={searchState}
          refresh={refresh}
        >
          <Banner />
          <main className="main-container">
            <Filters ref={appContainerRef} />
            <Results />
          </main>

        </InstantSearch>
        <ToastContainer />
      </div>
    </SearchProvider>
  );
};

export default App;
