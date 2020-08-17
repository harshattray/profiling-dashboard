/**
 * @Author: harsha
 * @Date:   2020-08-17T11:29:33+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T14:13:28+02:00
 */
import { combineReducers } from 'redux';
import CommentsReducer from './fetchCommentsReducers';

export default combineReducers({
  commentsStack: CommentsReducer,
});
