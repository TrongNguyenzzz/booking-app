import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { SearchContextProvider } from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext';
import { WishlistContextProvider } from './context/WishlistContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WishlistContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </WishlistContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
