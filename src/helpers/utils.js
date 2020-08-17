/**
 * @Author: harsha
 * @Date:   2020-08-14T17:36:31+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T15:54:17+02:00
 */

import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/index';
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

/**
 * [findByTestAttr ]
 * @param  {[type]} component [description]
 * @param  {[type]} attr      [description]
 * @return {[type]}           [description]
 */
export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

/**
 * [testStore Dummy test store ]
 * @param  {[type]} initialState [description]
 * @return {[type]}              [description]
 */
export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const dataHeaderStack = [
  {
    title: 'postId',
    dataIndex: 'postId',
    key: 'postId',
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Body',
    dataIndex: 'body',
    key: 'body',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
];
