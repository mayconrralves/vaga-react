import { produce } from 'immer';

const INITIAL_STATE = {
	loading: false,
	success: false,
	products: [],
	fail: false,
}

const searchProduct = (products, id, action) => products.findIndex(product => product.id === action.payload.id);

export default function Cart(state=INITIAL_STATE, action){
	switch (action.type) {
		case  "@cart/ADD_CART":
			return produce(state, draft=>{
				draft.success = false;
				draft.fail =  false;
				draft.loading = true;
			});
		case  "@cart/SUCCESS_ADD_CART":
			return produce(state, draft => {
				const index = searchProduct(draft.products, action.payload.product.id, action);
				if(index >= 0){
					draft.products.push(action.payload.product);
				}
				else {
					draft.products[index].quantity += action.payload.product.quantity;
				}
				draft.success = true;
				draft.loading = false;
			});
		case "@cart/FAILED_ADD_CART":
			return produce(state, draft => {
				draft.fail = true;
				draft.loading = false;
			});
		case "@cart/UPDATE_CART_SUM":
			return produce(state, draft => {
				const index = searchProduct(draft.products, action.payload.id, action);
				draft.product[index].quantity++;
			});
		case "@cart/UPDATE_CART_SUB":
			return produce(state, draft => {
				const index = searchProduct(draft.products, action.payload.id, action);
				draft.product.quantity--;
			});
		case  "@cart/DELETE_CART":
			return produce(state, draft=>{
				draft.products = null;
			});
		case "@cart/DELETE_PRODUCT_IN_CART":
			return produce(state, draft=>{
				const index = searchProduct(draft.products,action.payload.id, action);
				draft.products.splice(index, 1);
			});
		default:
			return state;
	}
}