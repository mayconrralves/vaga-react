import { produce } from 'immer';

const INITIAL_STATE = {
	token: '',
	fail: false,
	msgError: '',
};

export default function auth(state=INITIAL_STATE, action){
	switch (action.type) {
		case '@auth/SIGNIN_REQUEST':
			return produce(state, draft=>{
			 	draft.fail = false;
			 	draft.msgError = '';
			 });
		case '@auth/SUCCESS_REQUEST':
			return produce(state, draft=>{
				draft.token = action.payload.token;
			});
		case '@auth/FAILED_REQUEST':
			return produce(state, draft=>{
				draft.fail = true;
				draft.msgError = action.payload.msg;
			});
		default:
			return state;
	}
}