import { takeLatest, put, all} from 'redux-saga/effects';
import { setCartProducts } from './actions';

export function* setProducts ({payload}) {
	try{
		const { products } = payload.cart;
		if(products){
			yield put(setCartProducts(products));
			return;
		}
		yield put(setCartProducts([]));
	}
	catch(error){}
}


export default all([
	takeLatest("persist/REHYDRATE", setProducts),

	]);