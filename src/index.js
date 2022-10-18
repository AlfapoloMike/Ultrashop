import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/user/store';
import {PersistGate} from 'redux-persist/integration/react'
import { GlobalStyle } from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle/>
    <App />
    </PersistGate>
  </Provider>

);

reportWebVitals();
