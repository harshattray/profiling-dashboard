/**
 * @Author: harsha
 * @Date:   2020-08-14T17:36:31+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T23:34:26+02:00
 */

import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/index';
import ReduxThunk from 'redux-thunk';
import { setCommentsData } from '../actions/index';

const middlewares = [ReduxThunk];

/**
 * [findByTestAttr ]
 * @param  {[type]} component [description]
 * @param  {[type]} attr      [description]
 * @return {[type]}           [description]
 */
export const findByTestAttr = (component, attr) => {
  debugger;
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

/**
 * [testStore Dummy test store ]
 * @param  {[type]} initialState [description]
 * @return {[type]}              [description]
 */
export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * [getMetrics description]
 * @param  {[type]} compName   [description]
 * @param  {[type]} mode       [description]
 * @param  {[type]} actualTime [description]
 * @param  {[type]} baseTime   [description]
 * @return {[type]}            [description]
 */

export const getMetrics = (compName, mode, actualTime, baseTime) => {
  console.log(
    compName,
    mode,
    actualTime,
    baseTime,
    'compName, mode, actualTime, baseTime'
  );
  const profilingDump = {
    compName,
    mode,
    actualTime,
    baseTime,
  };
  saveToLocalStorage(profilingDump);
};

/**
 * [saveToLocalStorage description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */

export const saveToLocalStorage = data => {
  var a = [];
  a = JSON.parse(localStorage.getItem('profilingStack')) || [];
  a.push(data);
  localStorage.setItem('profilingStack', JSON.stringify(a));
};

/**
 * [dataHeaderStack description]
 * @type {Array}
 */
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
