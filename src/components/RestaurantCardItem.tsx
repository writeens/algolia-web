import React, { useState } from 'react';
import { Highlight } from 'react-instantsearch-dom';
import { generateID } from '../helpers/util';
import { IRestaurantObject } from '../interfaces';
import DeleteModal from './modals/DeleteModal';

const Stars = ({ num, numOfReviews }:{num:number, numOfReviews:number}) => {
  const arrayOfFull = new Array(num).fill(null).map(() => <svg key={generateID()} className="restaurant-star" aria-hidden="true" width="12" height="12"><use xlinkHref="#ais-RatingMenu-starSymbol" /></svg>);
  const arrayOfEmpty = new Array(5 - num).fill(null).map(() => <svg key={generateID()} className="restaurant-star" aria-hidden="true" width="12" height="12"><use xlinkHref="#ais-RatingMenu-starEmptySymbol" /></svg>);
  return (
    <a href="/" aria-label={`${num} & Up`} className="restaurant-star-body">
      {[...arrayOfFull, ...arrayOfEmpty]}
      <span className="restaurant-star-body__text">{`(${numOfReviews})`}</span>
    </a>
  );
};

const RestaurantCardItem = ({ hit }:{hit:IRestaurantObject}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <article key={hit.objectID} className="restaurant-item">
        <header className="restaurant-item__header">
          <img src={hit.image_url} alt={hit.name} className="restaurant-item-image" />
        </header>
        <div className="restaurant-item-body">
          <Highlight
            attribute="food_type"
            hit={hit}
            tagName="mark"
          />
          <Highlight
            attribute="name"
            hit={hit}
            tagName="mark"
          />
          <p className="restaurant-item-body__price-text">{hit.price_range}</p>
          <Stars
            num={hit.rounded_stars_count}
            numOfReviews={hit.reviews_count}
          />
        </div>
        <button className="delete-button" type="button" onClick={handleButtonClick}>
          <svg className="restaurant-delete-icon" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0001 3.07677H9.15396V1.846C9.15396 1.16908 8.60011 0.615234 7.92319 0.615234H6.07704C5.40011 0.615234 4.84627 1.16908 4.84627 1.846V3.07677H1.00011C0.753959 3.07677 0.538574 3.29216 0.538574 3.53831V4.46139C0.538574 4.70754 0.753959 4.92293 1.00011 4.92293H13.0001C13.2463 4.92293 13.4617 4.70754 13.4617 4.46139V3.53831C13.4617 3.29216 13.2463 3.07677 13.0001 3.07677ZM6.07704 2.1537C6.07704 1.96908 6.20011 1.846 6.38473 1.846H7.6155C7.80011 1.846 7.92319 1.96908 7.92319 2.1537V3.07677H6.07704V2.1537Z" />
            <path d="M11.7695 6.15381H2.23107C1.98492 6.15381 1.76953 6.36919 1.76953 6.61535V13.8461C1.76953 14.7077 2.44645 15.3846 3.30799 15.3846H10.6926C11.5541 15.3846 12.2311 14.7077 12.2311 13.8461V6.61535C12.2311 6.36919 12.0157 6.15381 11.7695 6.15381ZM6.07722 12.923C6.07722 13.1077 5.95415 13.2307 5.76953 13.2307H5.15415C4.96953 13.2307 4.84645 13.1077 4.84645 12.923V8.61535C4.84645 8.43073 4.96953 8.30765 5.15415 8.30765H5.76953C5.95415 8.30765 6.07722 8.43073 6.07722 8.61535V12.923ZM9.15415 12.923C9.15415 13.1077 9.03107 13.2307 8.84645 13.2307H8.23107C8.04645 13.2307 7.92338 13.1077 7.92338 12.923V8.61535C7.92338 8.43073 8.04645 8.30765 8.23107 8.30765H8.84645C9.03107 8.30765 9.15415 8.43073 9.15415 8.61535V12.923Z" />
          </svg>
        </button>
      </article>
      <DeleteModal
        name={hit.name}
        objectId={hit.objectID}
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      />
    </>
  );
};

export default RestaurantCardItem;
