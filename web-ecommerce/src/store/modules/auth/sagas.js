import { takeLatest, all, call, put} from 'redux-saga/effects';
import { signin, configToken } from '../../../api';
import history from  '../../../services/history';
import { successRequest, failedRequest } from './actions';
import { cleanUser } from '../user/actions';
import { signOut } from '../../../api/storage';


export function* login ({ payload }){
	const {email, password} = payload;
	const response = yield call(signin, email, password);
	if(response.error){
		return yield put(failedRequest(response.error));
	}
	const { idToken } = response;
	yield put(successRequest(idToken));
	history.replace('/');

	return;
}

export function setToken({ payload }){
	if(!payload) return;

	const { token } = payload.auth;
	if(token){
		configToken.token = token;
	}
}

export function* logout(){
	yield put(cleanUser());
	configToken.token = '';
	yield signOut();
	history.replace('/');
}

export default all([
	takeLatest('@auth/SIGNIN_REQUEST', login ),
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest('@auth/SIGN_OUT', logout),
	]);