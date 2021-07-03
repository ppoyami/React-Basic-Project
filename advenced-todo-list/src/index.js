import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules';
import ContextProvider from './context';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
