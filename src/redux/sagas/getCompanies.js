import { call, put, takeEvery } from 'redux-saga/effects';
import fetchCompanies from '../../services/companies';

function* handleGetCompanies() {
  try {
    const companies = yield call(fetchCompanies.list);
    yield put({ type: 'GET_COMPANIES_SUCCESS', companies });
  } catch (err) {
    yield put({ type: 'GET_COMPANIES_FAILED', message: err.message });
  }
}

function* watcherCompaniesSaga() {
  yield takeEvery('GET_COMPANIES_REQUESTED', handleGetCompanies);
}

export default watcherCompaniesSaga;
