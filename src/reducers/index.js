import { combineReducers } from 'redux';
import application from './application';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  application,
  routing: routerReducer
});
