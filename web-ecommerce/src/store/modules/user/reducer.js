import { produce } from 'immer';

const INITIAL_STATE = {
	fail: false,
	success: false,
	user: null,
	msgError: '',
}

export default function reducer(state=INITIAL_STATE, action){
	switch (action.type) {
		case '@user/CREATE_USER_REQUEST':
			return produce(state, draft=>{
				draft.fail = false;
				draft.success = false;
			 	draft.msgError = '';
			});	
		case '@user/UPDATE_USER_REQUEST':
			return produce(state, draft=>{
				draft.fail = false;
				draft.success = false;
			});
		case '@user/GET_USER_REQUEST':
			return produce(state, draft=>{
				draft.fail = false;
				draft.success = false;
			});
		case '@user/SUCCESS_REQUEST':
			return produce(state, draft=>{
				draft.success = true;
				draft.user = action.payload.user;
			});
		case '@user/FAILED_REQUEST':
			return produce(state, draft=>{
				draft.fail = true;
				draft.msgError = action.payload.msg;
			});
		default:
			return state;
	}
}