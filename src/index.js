import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import RouterApp from './router/RouterApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);

