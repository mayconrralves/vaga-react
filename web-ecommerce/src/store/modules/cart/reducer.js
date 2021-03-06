import { produce } from 'immer';

export const INITIAL_STATE = {
	products: [],
}

export default function Cart(state=INITIAL_STATE, action){
	switch (action.type) {
		case  "@cart/ADD_CART":
			return produce(state, draft => {
				const index = draft.products.findIndex(product => product.id === action.payload.product.id);
				if(index < 0){
					draft.products.push(action.payload.product);
				}
				else {
					draft.products[index].quantityPurchase += parseInt(action.payload.product.quantityPurchase);
				}
			});
		case "@cart/UPDATE_CART_SUM":
			return produce(state, draft => {
				draft.products[action.payload.index].quantityPurchase++;
			});
		case "@cart/UPDATE_CART_SUB":
			return produce(state, draft => {
				draft.products[action.payload.index].quantityPurchase--;
			});
		case "@cart/DELETE_PRODUCT_IN_CART":
			return produce(state, draft=>{
				draft.products.splice(action.payload.index, 1);
			});
		case "@cart/SET_PRODUCTS_IN_CART":
			return produce(state, draft=>{
				draft.products = action.payload.products;
			});
		case "@cart/CLEAN_CART":
			return produce(state, draft=>{
				draft.products = [];
			});
		default:
			return state;
	}
}