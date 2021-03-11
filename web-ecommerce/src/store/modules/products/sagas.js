import { all, put, call, takeLatest } from 'redux-saga/effects';
import { successRequest, failedRequest} from './actions';
import { getProducts } from '../../../api';

export function* requestProducts(){
	const products = yield call(getProducts);

	if(products.error){
		return yield put(failedRequest(products.error));
	}
	return yield put(successRequest(products));
}

export default all(
	[
		takeLatest("@products/GET_REQUEST", requestProducts),
	]
);