/**
 * @Author: harsha
 * @Date:   2020-08-13T23:20:55+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T20:42:11+02:00
 */

import {
  FETCHING_COMMENTS,
  INIT_FETCH_COMMENTS,
  FETCHING_COMMENTS_FAIL,
  SET_COMMENTS_DATA,
} from '../actions/types';

/**
 * [Holygrail of the store]
 * @param  {Object} [state={}] [description]
 * @param  {[type]} action     [description]
 * @return {[type]}            [description]
 */

export default (state = {}, action) => {
  switch (action.type) {
    case INIT_FETCH_COMMENTS:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case FETCHING_COMMENTS:
      return {
        ...state,
        commentsData: action.payload.data,
        isLoading: action.isLoading,
      };
    case FETCHING_COMMENTS_FAIL:
      return {
        ...state,
        fetchCommentsFail: action.payload,
        isLoading: action.isLoading,
      };
    case SET_COMMENTS_DATA:
      return {
        ...state,
        profilingDetails: action.payload,
      };
    default:
      return state;
  }
};
