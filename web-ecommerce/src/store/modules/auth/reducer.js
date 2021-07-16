import { produce } from 'immer';

export const INITIAL_STATE = {
	token: '',
	fail: false,
	msgError: '',
	loading: false,
	success: false,
};

export default function auth(state=INITIAL_STATE, action){
	switch (action.type) {
		case '@auth/SIGNIN_REQUEST':
			return produce(state, draft=>{
			 	draft.fail = false;
			 	draft.success = false;
			 	draft.loading = true;
			 	draft.msgError = '';
			 });
		case '@auth/SUCCESS_REQUEST':
			return produce(state, draft=>{
				draft.token = action.payload.token;
				draft.success = true;
				draft.loading = false;
			});
		case '@auth/FAILED_REQUEST':
			return produce(state, draft=>{
				draft.fail = true;
				draft.msgError = action.payload.msg;
				draft.loading = false;
			});
		case '@auth/SIGN_OUT':
			return produce(state, draft=>{
				draft.token = '';
				draft.success = false;
				draft.fail = false;
			});
		case '@auth/CLEAR_AUTH':
			return produce(state, draft=> {
					draft.fail = false;
					draft.msgError = '';
			});
		default:
			return state;
	}
}