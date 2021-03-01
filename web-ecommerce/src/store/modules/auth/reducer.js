import { produce } from 'immer';

const INITIAL_STATE = {
	token: '',
	fail: false,
};

export default function auth(state=INITIAL_STATE, action){
	switch (action.type) {
		case '@auth/INITIAL_REQUEST':
			return produce(state, draft=>{
			 	draft.fail = false;
			 });
		case '@auth/SUCCESS_REQUEST':
			return produce(state, draft=>{
				draft.token = action.payload.token;
			});
		case '@auth/FAILED_REQUEST':
			return produce(state, draft=>{
				draft.fail = true;
			});
		default:
			return state;
	}
}