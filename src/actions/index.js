/**
 * @Author: harsha
 * @Date:   2020-08-13T23:12:31+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T23:42:42+02:00
 */

import {
  INIT_FETCH_COMMENTS,
  FETCHING_COMMENTS,
  FETCHING_COMMENTS_FAIL,
  SET_COMMENTS_DATA,
} from './types';
import axios from 'axios';
import { saveToLocalStorage } from '../helpers/utils';

/**
 * [fetchCommentsData fetch call to get comments data]
 * @return {[type]} [description]
 */

export const fetchCommentsData = () => async (dispatch, getState) => {
  dispatch(initfetchCommentsData());
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );
    dispatch({
      type: FETCHING_COMMENTS,
      payload: res,
      isLoading: false,
    });
  } catch (e) {
    dispatch({
      type: FETCHING_COMMENTS_FAIL,
      payload: e,
      isLoading: false,
    });
  }
};

/**
 * [initfetchCommentsData initial load state cushion for async calls]
 * @return {[type]} [description]
 */

export const initfetchCommentsData = () => {
  return {
    type: INIT_FETCH_COMMENTS,
    isLoading: true,
  };
};

export const setCommentsData = data => async (dispatch, getState) => {
  dispatch({
    type: SET_COMMENTS_DATA,
    payload: data,
  });
};
