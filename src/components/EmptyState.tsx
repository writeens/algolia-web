import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';

const EmptyState = connectStateResults(({ searchResults }:{searchResults:any}) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  if (!hasResults) {
    return (
      <div className="empty-state-container">
        <svg className="empty-state-container__svg" width="72px" height="72px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
          <g id="color">
            <circle cx="36" cy="36" r="24" fill="#fcea2b" />
            <path fill="#3069FE" d="M54.25,28.1758a4.2422,4.2422,0,0,1-4.2442-4.2427c0-4.2026,4.211-8.4619,4.253-8.5044.1543.1729,4.2343,4.3228,4.2343,8.5039A4.241,4.241,0,0,1,54.25,28.1758Z" />
            <path fill="#fff" d="M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z" />
            <path fill="#ea5a47" d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z" />
          </g>
          <g id="hair" />
          <g id="skin" />
          <g id="skin-shadow" />
          <g id="line">
            <path fill="none" stroke="#000" strokeLinejoin="round" strokeWidth="2" d="M54.25,28.1758a4.2422,4.2422,0,0,1-4.2442-4.2427c0-4.2026,4.211-8.4619,4.253-8.5044.1543.1729,4.2343,4.3228,4.2343,8.5039A4.241,4.241,0,0,1,54.25,28.1758Z" />
            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M48.0945,16.433A22.9582,22.9582,0,1,0,58.4938,31.1785" />
            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z" />
            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z" />
            <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M31.6941,33.4036a4.7262,4.7262,0,0,0-8.6382,0" />
            <path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M48.9441,33.4036a4.7262,4.7262,0,0,0-8.6382,0" />
          </g>
        </svg>
        <p className="empty-state-title">Well, this is awkward!</p>
        <p className="empty-state-desc">
          Looks like there are no search results for your current query.
          Try adjusting the query
        </p>
      </div>
    );
  }
  return null;
});

export default EmptyState;
