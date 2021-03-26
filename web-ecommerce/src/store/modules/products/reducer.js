import { produce } from 'immer';

const INITIAL_STATE= {
	loading: false,
	products: [],
	success: false,
	fail: false,
	msgError: '',
};

export default function products(state=INITIAL_STATE, action){
	switch (action.type) {
		case "@products/GET_REQUEST":
			return produce(state, draft=>{
				draft.loading = true;
				draft.products = [];
				draft.success = false;
				draft.fail = false;
				draft.msgError = '';
			});
		case "@products/SUCCESS_REQUEST":
			return produce(state, draft=>{
				draft.loading = false;
				draft.success = true;
				draft.products = action.payload.products;
			});
		case "@products/FAILED_REQUEST":
			return produce(state, draft=>{
				draft.loading = false;
				draft.fail = false;
				draft.msgError = action.payload.msg;
			});
		default:
			return state;
	}
}