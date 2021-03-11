import { produce } from 'immer';

const INITIAL_STATE= {
	loading: false,
	products: [],
	msgError: '',
};

export default function products(state=INITIAL_STATE, action){
	switch (action.type) {
		case "@products/GET_REQUEST":
			return produce(state, draft=>{
				draft.loading = true;
				draft.products = [];
				draft.msgError = '';
			});
		case "@products/SUCCESS_REQUEST":
			return produce(state, draft=>{
				draft.loading = false;
				draft.products = action.payload.products;
			});
		case "@products/FAILED_REQUEST":
			return produce(state, draft=>{
				draft.loading = false;
				draft.msgError = action.payload.msg;
			});
		default:
			return state;
	}
}