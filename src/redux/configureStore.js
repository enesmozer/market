/* eslint-disable no-underscore-dangle */
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import companies from './reducers/companies';
import rootSaga from './sagas/rootSaga';

const reducers = combineReducers({
  companies,
});
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore)(reducers);

sagaMiddleware.run(rootSaga);
export default store;
