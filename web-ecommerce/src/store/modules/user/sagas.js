import { all, takeLatest, put, call } from 'redux-saga/effects';

import { register,  getUser } from '../../../api';
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
	const { idToken, idLocal } = response;
	yield put(successRequestUser(idLocal));
	yield put(successRequestAuth(idToken));
	history.replace('/shop');
	return;

}

export function* getCurrentUser(){
	const response = yield call(getUser);
	if(response.error){
		return yield put(failedRequestUser(response.error));
	}
	console.log(response)
	return yield put(successRequestUser(response));
}


export default all([
		takeLatest('@user/CREATE_USER_REQUEST', createUser ),
		takeLatest('persist/REHYDRATE', getCurrentUser),		
	]);