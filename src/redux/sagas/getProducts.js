import { call, put, takeEvery } from 'redux-saga/effects';
import fetchProducts from '../../services/products';

function* handleGetProducts() {
  try {
    const products = yield call(fetchProducts.list);
    yield put({ type: 'GET_PRODUCTS_SUCCESS', products });
  } catch (err) {
    yield put({ type: 'GET_PRODUCTS_FAILED', message: err.message });
  }
}

function* watcherProductsSaga() {
  yield takeEvery('GET_PRODUCTS_REQUESTED', handleGetProducts);
}

export default watcherProductsSaga;
