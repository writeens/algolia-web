import React, { forwardRef, MutableRefObject } from 'react';
import {
  ClearRefinements, RatingMenu, RefinementList, Stats,
} from 'react-instantsearch-dom';
import { PRICES } from '../constants/strings';

const Filters = forwardRef((props, appContainerRef) => {
  // TRANSFORM PRICE OPTIONS FROM DATA
  const handleTransformPriceElements = (items:any) => items
    .map((i:{label:string, value:string[]}) => ({ ...i, label: PRICES[i.label] }));

  const handleCloseFilter = () => {
    const appElement = (appContainerRef as
      MutableRefObject<HTMLDivElement>).current as HTMLDivElement;
    appElement.classList.remove('active-filter');
  };

  const handleOpenFilter = () => {
    const appElement = (appContainerRef as
      MutableRefObject<HTMLDivElement>).current as HTMLDivElement;
    appElement.classList.add('active-filter');
  };
  return (
    <>
      <div className="filter-content">
        {/** FILTERS SECTION */}
        <section className="filter-section">
          <div className="filter-section-header">
            <h2 className="filter-section-header__h2">Filter</h2>
            <ClearRefinements
              translations={{
                reset: (
                  <div className="filter-header-refine">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      className="filter-header-refine__svg"
                    >
                      <title>Clear Filter Icon</title>
                      <g fill="none" fillRule="evenodd" opacity=".4">
                        <path d="M0 0h11v11H0z" />
                        <path
                          fill="#000"
                          fillRule="nonzero"
                          d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"
                        />
                      </g>
                    </svg>
                    <span className="filter-header-refine__span">Clear filters</span>
                  </div>
                ),
              }}
            />
          </div>
          <div className="filter-body-refine">
            <div className="filter-body-refine__div">Price</div>
            <RefinementList
              attribute="price"
              transformItems={handleTransformPriceElements}
            />
          </div>
          <div className="filter-body-refine">
            <div className="filter-body-refine__div">Cuisine</div>
            <RefinementList
              attribute="food_type"
              searchable
              limit={5}
              showMore
            />
          </div>
          <div className="filter-body-refine">
            <div className="filter-body-refine__div">Payment Options</div>
            <RefinementList
              attribute="payment_options"
              searchable
              limit={5}
              showMore
            />
          </div>
          <div className="filter-body-refine">
            <div className="filter-body-refine__div">Rating</div>
            <RatingMenu
              attribute="rounded_stars_count"
              translations={{
                ratingLabel: '& Up',
              }}
              max={5}
            />
          </div>
        </section>
        <footer className="filter-button-container">
          <button type="button" className="filter-button filter-close" onClick={handleCloseFilter}>
            <span className="">
              <Stats translations={{
                stats(nbHits) {
                  return `See results (${nbHits.toLocaleString()})`;
                },
              }}
              />
            </span>
          </button>
        </footer>
      </div>
      <aside>
        <button type="button" className="filter-button filter-open" onClick={handleOpenFilter}>
          <svg className="filter-open__svg" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Open Filters Icon</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M17 1H1L7.4 8.35V13.4483L10.6 15V8.35L17 1Z" stroke="white" strokeWidth="1.29" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span className="">Filters</span>
        </button>
      </aside>
    </>
  );
});

export default Filters;
