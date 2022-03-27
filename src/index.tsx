import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './styles/index.css';
import './styles/components/Navbar.css';
import './styles/components/Banner.css';
import './styles/components/Filters.css';
import './styles/components/Results.css';
import './styles/components/RestaurantCardItem.css';
import './styles/components/DeleteModal.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
