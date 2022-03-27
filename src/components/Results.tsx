import React from 'react';
import {
  Hits, HitsPerPage, Pagination, Stats,
} from 'react-instantsearch-dom';
import RestaurantCardItem from './RestaurantCardItem';

const Results = () => (
  <section className="results-section">
    <header className="results-section__header">
      <Stats translations={{
        stats(nbHits, processingTimeMS, nbSortedHits, areHitsSorted) {
          return areHitsSorted && nbHits !== nbSortedHits
            ? `Found ${nbSortedHits!.toLocaleString()} relevant results sorted out of ${nbHits.toLocaleString()} in ${processingTimeMS.toLocaleString()}ms`
            : `Found ${nbHits.toLocaleString()} results in ${processingTimeMS.toLocaleString()}ms`;
        },
      }}
      />
      <HitsPerPage
        defaultRefinement={10}
        items={[
          { value: 10, label: 'Show 10 places per page' },
          { value: 20, label: 'Show 20 places per page' },
        ]}
      />
    </header>
    <div className="results-section-content">
      <Hits hitComponent={RestaurantCardItem} />
    </div>
    <footer className="results-section-pagination">
      {/** PAGINATION */}
      <Pagination
        padding={2}
        showFirst={false}
        showLast={false}
        translations={{
          previous: (
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Previous Icon</title>
              <path d="M5 9L1 5L5 1" stroke="#6F6F6F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          ),
          next: (
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Next Icon</title>
              <path d="M1 9L5 5L1 1" stroke="#6F6F6F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          ),
        }}
      />
    </footer>
  </section>
);

export default Results;
