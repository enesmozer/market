import { combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import companies from './reducers/companies';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducers = combineReducers({
  companies,
});
const store = createStore(reducers);

export default reducers;
