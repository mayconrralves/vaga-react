import { takeLatest, all, call, put} from 'redux-saga/effects';
import api from '../../../api';
import { signin } from '../../../api';
import history from  '../../../services/history';
import { successRequest, failedRequest } from './actions';
export function* login ({ payload }){
	const {email, password} = payload;
	const response = yield call(signin, email, password);
	if(response.error){
		return yield put(failedRequest(response.error));
	}
	const { token } = response;
	yield put(successRequest(token));
	history.replace('/shop');

	return;
}

export function setToken({ payload }){
	if(!payload) return;

	const { token } = payload.auth;

	if(token){
		api.defaults.headers.Authorization = `Bearer ${token}`;
	}
}

export function signOut(){
	history.replace('/');
}

export default all([
	takeLatest('@auth/SIGNIN_REQUEST', login ),
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest('@auth/SIGN_OUT', signOut),
	]);