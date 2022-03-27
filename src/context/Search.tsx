import React, { createContext, ReactElement } from 'react';
import { ISearchContextInterface } from '../interfaces';

const SearchContext = createContext<ISearchContextInterface>({} as ISearchContextInterface);

const SearchProvider = ({ children, state }
    :{state:ISearchContextInterface, children:ReactElement}) => (
      <SearchContext.Provider value={state}>
        {children}
      </SearchContext.Provider>
);

export {
  SearchContext,
  SearchProvider,
};
