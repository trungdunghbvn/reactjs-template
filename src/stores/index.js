import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

export const history = createHistory();
history.listen(location => console.log('location back click:', location));

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWares = [];
middleWares.push(sagaMiddleware);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
