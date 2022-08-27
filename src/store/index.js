import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducers from './reducers';
import rootSaga from './saga';

// ==========
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//============
const configureStore = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const useSelector = useReduxSelector;
export const useDispatch = () => useReduxDispatch();

export default configureStore;
