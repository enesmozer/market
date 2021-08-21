import { call, put, takeEvery } from 'redux-saga/effects';
import service from '../../services/companies';

function* handleGetCompanies() {
  const companies = yield call(service.list);
  yield put({ type: 'GET_COMPANIES', companies });
}
function* watcherCompanySaga() {
  yield takeEvery('GET_COMPANIES', handleGetCompanies);
}
export default watcherCompanySaga;
