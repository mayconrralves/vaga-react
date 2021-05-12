import { produce } from 'immer';

const INITIAL_STATE = {
	fail: false,
	success: false,
	user: null,
	msgError: '',
	loading: false,
	update: false,
	getFail: false,
}

export default function reducer(state=INITIAL_STATE, action){
	switch (action.type) {
		case '@user/CREATE_USER_REQUEST':
			return produce(state, draft=>{
				draft.fail = false;
				draft.success = false;
			 	draft.msgError = '';
				draft.loading = true;
			});	
		case '@user/UPDATE_USER_REQUEST':
			return produce(state, draft=>{
				draft.fail = false;
				draft.success = false;
				draft.loading = true;
				draft.update = false;
			});
		case '@user/GET_USER_REQUEST':
			return produce(state, draft=>{
				draft.getFail = false;
				draft.success = false;
				draft.loading = true;
			});
		case '@user/SUCCESS_REQUEST':
			return produce(state, draft=>{
				draft.success = true;
				draft.user = action.payload.user;
				draft.loading = false;
			});
		case '@user/SUCCESS_UPDATE_REQUEST':
			return produce(state, draft=>{
				draft.update = true;
				draft.loading = false;
			});
		case '@user/FAILED_REQUEST':
			return produce(state, draft=>{
				draft.fail = true;
				draft.msgError = action.payload.msg;
				draft.loading = false;
			});
		case '@user/FAILED_GET_REQUEST':
			return produce(state, draft=>{
				draft.getFail = true;
				draft.msgError = action.payload.msg;
				draft.loading = false;
			});
		case '@user/CLEAN_USER':
			return produce(state, draft=>{
				draft.user = null;
				draft.fail= false;
				draft.success = false;
				draft.msgError = '';
				draft.update = false;
			});
		default:
			return state;
	}
}