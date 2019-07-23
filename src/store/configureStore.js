import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers/appReducer';
import authReducer from '../reducers/auth';
import noteReducer from '../reducers/notes';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      appState: appReducer,
      auth: authReducer,
      notes: noteReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
