import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(history) {
  const middleware = [
    thunkMiddleware,
    routerMiddleware(history),
  ]

  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
      ...middleware
    ))
  );
}
