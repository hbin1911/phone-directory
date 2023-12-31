import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import AddSubscriber from './AddSubscriber';
import reportWebVitals from './reportWebVitals';
import './common/common.css';
import ShowSubscribers from './ShowSubscribers';
import PhoneDirectory from './PhoneDirectory';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AddSubscriber /> */}
      {/* <ShowSubscribers/> */}
      <PhoneDirectory/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
