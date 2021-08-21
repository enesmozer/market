import { all } from 'redux-saga/effects';
import watcherCompanySaga from './getCompanies';

export default function* rootSaga() {
  yield all([watcherCompanySaga()]);
}
