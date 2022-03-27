/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import qs from 'qs';
import { SearchState } from 'react-instantsearch-core';

const urlToSearchState = ({ search }:Location) => qs.parse(search.slice(1));

const DEBOUNCE_TIME = 500;

let INTERVAL:any = 0;

export const useURLSync = () => {
  const [searchState, setSearchState] = useState(urlToSearchState(window.location));

  // CONVERT SEARCH STATE TO STRING
  const createURL = (state:SearchState) => `?${qs.stringify(state)}`;

  // CONVERT SEARCH STATE TO URL
  const searchStateToUrl = (ss:SearchState) => (ss ? createURL(ss) : '');

  // HANDLE SEARCH STATE CHANGES
  const onSearchStateChange = (newSearchState:SearchState) => {
    clearTimeout(INTERVAL);

    INTERVAL = setTimeout(() => {
      window.history.pushState(searchState, '', searchStateToUrl(newSearchState));
    }, DEBOUNCE_TIME);

    setSearchState(newSearchState);
  };

  // ON LOCATION CHANGE - UPDATE SEARCH STATE
  useEffect(() => {
    setSearchState(urlToSearchState(window.location));

    return () => {
      clearTimeout(INTERVAL); // CLEAR ANY PENDING TIMEOUT
    };
  }, [window.location]);

  return {
    searchState,
    onSearchStateChange,
    createURL,
  };
};
