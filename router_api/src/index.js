import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import { colors } from './GlobalStyled';
import rootReducer from './modules';

const rootElement = document.getElementById('root');
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={colors}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
