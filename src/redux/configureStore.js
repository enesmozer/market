import { combineReducers } from 'redux';
import companies from './reducers/companies';

const reducers = combineReducers({
  companies,
});

export default reducers;
