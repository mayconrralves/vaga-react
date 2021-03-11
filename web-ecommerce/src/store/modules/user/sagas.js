import { all, takeLatest, put, call } from 'redux-saga/effects';

import { register, signin, getUser } from '../../../api';
import { signOut } from '../auth/actions';
import { 
	successRequest as successRequestUser, 
	failedRequest as failedRequestUser, 
} from './actions';
import { 
	successRequest as successRequestAuth,
	failedRequest as failedRequestAuth
 } from '../auth/actions';
import history from  '../../../services/history';

export function* createUser( { payload } ){

	const {name, email, password } = payload;

	const response = yield call(register, { name, email, password } );

	if(response.error){
		return yield put(failedRequestUser(response.error));
	}

	yield put(successRequestUser(null));

	const responseSignIn = yield call(signin, email, password);

	if(responseSignIn.error){
		return yield put(failedRequestAuth());
	}

	const { token } = responseSignIn;
	
	yield put(successRequestAuth(token));
	history.replace('/shop');
	return;

}

export function* getCurrentUser(){
	const response = yield call(getUser);
	if(response.error){
		yield put(signOut());
		return yield put(failedRequestUser(response.error));
	}
	return yield put(successRequestUser(response));
}


export default all([
		takeLatest('@user/CREATE_USER_REQUEST', createUser ),
		takeLatest('persist/REHYDRATE', getCurrentUser),
		
	]);