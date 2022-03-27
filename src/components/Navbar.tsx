import React, { useState } from 'react';
import NewRestaurantModal from './modals/NewRestaurantModal';

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar-container">
        <a href="/">
          <svg className="navbar-logo" xmlns="http://www.w3.org/2000/svg" width="485" height="120" viewBox="0 0 485 120">
            <title>Algolia logo</title>
            <g fill="none" fillRule="evenodd">
              <path fill="#5468FF" d="M15.8-.001h88.4c8.7 0 15.8 7.065 15.8 15.8v88.405c0 8.7-7.064 15.795-15.8 15.795H15.8c-8.7 0-15.8-7.06-15.8-15.795V15.759C0 7.064 7.06-.001 15.8-.001" />
              <path fill="#FFF" d="M72.504 26.788v-4.114a5.209 5.209 0 0 0-5.21-5.206H55.15a5.209 5.209 0 0 0-5.21 5.206v4.224c0 .47.434.8.91.69a37.966 37.966 0 0 1 10.57-1.49c3.465 0 6.894.47 10.21 1.38.44.11.874-.215.874-.69M39.22 32.173l-2.075-2.075a5.206 5.206 0 0 0-7.364 0l-2.48 2.476a5.185 5.185 0 0 0 0 7.355l2.04 2.04c.33.325.805.25 1.095-.075a39.876 39.876 0 0 1 3.975-4.66 37.68 37.68 0 0 1 4.7-4c.364-.22.4-.73.11-1.06m22.165 13.065v17.8c0 .51.55.874 1.02.62l15.825-8.19c.36-.18.47-.62.29-.98-3.28-5.755-9.37-9.685-16.405-9.94-.366 0-.73.29-.73.69m0 42.88c-13.195 0-23.916-10.706-23.916-23.88 0-13.176 10.72-23.876 23.916-23.876 13.2 0 23.914 10.7 23.914 23.876 0 13.174-10.68 23.88-23.915 23.88m0-57.8c-18.74 0-33.94 15.18-33.94 33.92 0 18.745 15.2 33.89 33.94 33.89s33.94-15.18 33.94-33.925c0-18.745-15.165-33.885-33.94-33.885" />
              <path fill="#5468FF" d="M239.214 95.177c-23.365.11-23.365-18.855-23.365-21.875l-.04-71.045 14.255-2.26v70.61c0 1.715 0 12.56 9.15 12.595v11.975zm-57.78-11.61c4.375 0 7.62-.255 9.88-.69V68.392a29.196 29.196 0 0 0-3.43-.695 33.742 33.742 0 0 0-4.955-.365c-1.57 0-3.175.11-4.775.365-1.606.22-3.065.655-4.34 1.275-1.275.62-2.335 1.495-3.1 2.62-.8 1.13-1.166 1.785-1.166 3.495 0 3.345 1.166 5.28 3.28 6.55 2.115 1.275 4.995 1.93 8.606 1.93zm-1.24-51.685c4.7 0 8.675.585 11.885 1.75 3.204 1.165 5.794 2.8 7.69 4.875 1.934 2.11 3.244 4.915 4.044 7.9.84 2.985 1.24 6.26 1.24 9.86v36.62c-2.184.47-5.505 1.015-9.95 1.67-4.445.655-9.44.985-14.984.985-3.68 0-7.07-.365-10.095-1.055-3.066-.69-5.65-1.82-7.84-3.385-2.15-1.565-3.826-3.57-5.065-6.04-1.206-2.48-1.826-5.97-1.826-9.61 0-3.495.69-5.715 2.046-8.12 1.38-2.4 3.24-4.365 5.575-5.895 2.37-1.53 5.065-2.62 8.165-3.275 3.1-.655 6.344-.985 9.695-.985 1.57 0 3.21.11 4.96.29 1.714.185 3.575.515 5.544.985v-2.33c0-1.635-.184-3.2-.584-4.655a10.012 10.012 0 0 0-2.045-3.895c-.986-1.13-2.256-2.005-3.86-2.62-1.605-.62-3.65-1.095-6.09-1.095-3.28 0-6.27.4-9.006.875-2.735.47-4.995 1.02-6.71 1.635l-1.71-11.68c1.786-.62 4.446-1.24 7.876-1.855 3.424-.66 7.11-.95 11.044-.95zm281.51 51.285c4.375 0 7.614-.255 9.875-.695v-14.48c-.8-.22-1.93-.475-3.425-.695a33.813 33.813 0 0 0-4.96-.365c-1.566 0-3.17.11-4.776.365-1.6.22-3.06.655-4.334 1.275-1.28.62-2.336 1.495-3.1 2.62-.805 1.13-1.166 1.785-1.166 3.495 0 3.345 1.166 5.28 3.28 6.55 2.15 1.31 4.995 1.93 8.606 1.93zm-1.206-51.645c4.7 0 8.675.58 11.886 1.745 3.204 1.165 5.794 2.8 7.69 4.875 1.894 2.075 3.244 4.915 4.044 7.9.84 2.985 1.24 6.26 1.24 9.865v36.615c-2.185.47-5.505 1.015-9.95 1.675-4.445.655-9.44.98-14.985.98-3.68 0-7.07-.365-10.094-1.055-3.065-.69-5.65-1.82-7.84-3.385-2.15-1.565-3.825-3.57-5.065-6.04-1.205-2.475-1.825-5.97-1.825-9.61 0-3.495.695-5.715 2.045-8.12 1.38-2.4 3.24-4.365 5.575-5.895 2.37-1.525 5.065-2.62 8.165-3.275 3.1-.655 6.344-.98 9.7-.98 1.565 0 3.204.11 4.954.29 1.75.18 3.575.51 5.54.985v-2.33c0-1.64-.18-3.205-.58-4.66a9.977 9.977 0 0 0-2.044-3.895c-.986-1.13-2.255-2.005-3.86-2.62-1.606-.62-3.65-1.09-6.09-1.09-3.28 0-6.27.4-9.006.87-2.734.475-4.995 1.02-6.71 1.64l-1.71-11.685c1.786-.62 4.446-1.235 7.876-1.855 3.424-.62 7.104-.945 11.044-.945zm-42.8-6.77c4.776 0 8.68-3.86 8.68-8.63 0-4.765-3.864-8.625-8.68-8.625-4.81 0-8.674 3.86-8.674 8.625 0 4.77 3.9 8.63 8.675 8.63zm7.18 70.425h-14.325v-61.44l14.325-2.255v63.695zm-25.114 0c-23.365.11-23.365-18.855-23.365-21.875l-.04-71.045 14.255-2.26v70.61c0 1.715 0 12.56 9.15 12.595v11.975zm-46.336-31.445c0-6.155-1.35-11.285-3.974-14.85-2.625-3.605-6.305-5.385-11.01-5.385-4.7 0-8.386 1.78-11.006 5.385-2.625 3.6-3.904 8.695-3.904 14.85 0 6.225 1.315 10.405 3.94 14.01 2.625 3.64 6.305 5.425 11.01 5.425 4.7 0 8.385-1.82 11.01-5.425 2.624-3.64 3.934-7.785 3.934-14.01zm14.58-.035c0 4.805-.69 8.44-2.114 12.41-1.42 3.965-3.425 7.35-6.01 10.155-2.59 2.8-5.69 4.985-9.336 6.515-3.644 1.525-9.26 2.4-12.065 2.4-2.81-.035-8.385-.835-11.995-2.4-3.61-1.565-6.71-3.715-9.295-6.515-2.59-2.805-4.594-6.19-6.054-10.155-1.456-3.97-2.185-7.605-2.185-12.41s.654-9.43 2.114-13.36c1.46-3.93 3.5-7.28 6.125-10.08 2.625-2.805 5.76-4.955 9.33-6.48 3.61-1.53 7.585-2.255 11.885-2.255 4.305 0 8.275.76 11.92 2.255 3.65 1.525 6.786 3.675 9.336 6.48 2.584 2.8 4.59 6.15 6.05 10.08 1.53 3.93 2.295 8.555 2.295 13.36zm-107.284 0c0 5.965 1.31 12.59 3.935 15.355 2.625 2.77 6.014 4.15 10.175 4.15 2.26 0 4.41-.325 6.414-.945 2.005-.62 3.606-1.35 4.886-2.22v-35.34c-1.02-.22-5.286-1.095-9.41-1.2-5.175-.15-9.11 1.965-11.88 5.345-2.736 3.39-4.12 9.32-4.12 14.855zm39.625 28.095c0 9.72-2.48 16.815-7.476 21.33-4.99 4.51-12.61 6.77-22.89 6.77-3.755 0-11.555-.73-17.79-2.11l2.295-11.285c5.216 1.09 12.106 1.385 15.716 1.385 5.72 0 9.805-1.165 12.245-3.495 2.445-2.33 3.644-5.785 3.644-10.375v-2.33c-1.42.69-3.28 1.385-5.575 2.115-2.294.69-4.954 1.055-7.95 1.055-3.934 0-7.51-.62-10.75-1.86-3.244-1.235-6.054-3.055-8.35-5.46-2.294-2.4-4.12-5.42-5.394-9.025-1.276-3.605-1.936-10.045-1.936-14.775 0-4.44.695-10.01 2.046-13.725 1.385-3.71 3.35-6.915 6.014-9.57 2.626-2.655 5.835-4.695 9.59-6.19 3.755-1.49 8.16-2.435 12.935-2.435 4.635 0 8.9.58 13.055 1.275 4.155.69 7.69 1.415 10.57 2.215v56.49z" />
            </g>
          </svg>
        </a>
        <button type="button" className="navbar-button" onClick={() => setModalIsOpen(true)}>
          <svg className="navbar-plus" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172">
            <title>Add New Restaurant Icon</title>
            <g fill="none" fillRule="nonzero" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="inter" fontWeight="none" fontSize="none" textAnchor="none">
              <path d="M0,172v-172h172v172z" fill="none" />
              <g stroke="white" strokeWidth={14} fill="#ffffff"><path d="M82.56,30.96v51.6h-51.6v6.88h51.6v51.6h6.88v-51.6h51.6v-6.88h-51.6v-51.6z" /></g>
            </g>
          </svg>
          <span>Add a Restaurant</span>
        </button>
      </nav>
      <NewRestaurantModal
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      />
    </>
  );
};

export default Navbar;
