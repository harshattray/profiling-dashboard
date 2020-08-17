/**
 * @Author: harsha
 * @Date:   2020-08-16T21:54:49+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T23:40:26+02:00
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reducers from './reducers';
import 'antd/dist/antd.css';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
