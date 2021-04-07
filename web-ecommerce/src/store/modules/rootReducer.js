import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import products from './products/reducer';
import cart from './cart/reducer';
import orders from './orders/reducer';

export default combineReducers({
	auth, user, products, cart, orders
});