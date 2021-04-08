import { all, takeLatest, put, call} from 'redux-saga/effects';
import { updateProducts, createOrder } from '../../../api';
import { getProducts, getOrders } from '../../../api';
import { failedRequest, successRequest, getOrders as getOrdersAction } from './actions';
import { cleanCart } from '../cart/actions';
import history from '../../../services/history';

export function* getOrdersSaga( { payload } ){
    const { email } = payload;
    const response = yield call(getOrders, email);
    if(response.error){
        yield put(failedRequest(response.error));
        return;
    }
    yield put(successRequest(response));
}


export function* closeCart( { payload } ){
    const productsStock = yield call(getProducts);
    const {products, email } = payload;
    const productsReady = [];
    const productsErrors = []; 
    for (let product of products){
        const productIndex = productsStock.findIndex(p => p.id === product.id);
        if(productIndex >= 0 && productsStock[productIndex].quantity >= product.quantityPurchase ){
            productsReady.push({
                index: productIndex,
                quantityPurchase: productsStock[productIndex].quantity - product.quantityPurchase 
            });
        } else {
            productsErrors.push(productIndex);
        }
    }
    if(productsErrors.length){
        return yield put(failedRequest(productsErrors));
    }
    for(let product of productsReady){
        yield call(updateProducts,product.index, product.quantityPurchase);
    }
    yield call(createOrder, email, products);
    yield put(getOrdersAction(email));
    yield put(cleanCart());
    history.replace('/orders')
    return;
}

export default all([
    takeLatest('@orders/REQUEST_CLOSE_CART', closeCart),
    takeLatest('@orders/GET_REQUEST', getOrdersSaga),
]);