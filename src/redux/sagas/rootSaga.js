import { all } from 'redux-saga/effects';
import watcherCompanySaga from './getCompanies';
import watcherProductsSaga from './getProducts';

export default function* rootSaga() {
  yield all([watcherProductsSaga(), watcherCompanySaga()]);
}
