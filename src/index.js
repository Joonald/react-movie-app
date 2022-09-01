import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import RouterApp from './router/RouterApp';
import store from './store/store';
import { Provider } from 'react-redux'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
  </Provider>
);

