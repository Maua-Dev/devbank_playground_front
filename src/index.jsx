import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import GlobalContextProvider from './app/context/GlobalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);

