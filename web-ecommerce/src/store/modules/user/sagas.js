import { all, takeLatest, put, call } from 'redux-saga/effects';

import { register,  getUser,updateUser, addPhoto } from '../../../api';
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

	const {displayName, email, password } = payload;

	const response = yield call(register, { displayName, email, password } );
	if(response.error){
		return yield put(failedRequestUser(response.error));
	}
	const { idToken } = response;
	yield put(successRequestUser(response));
	yield put(successRequestAuth(idToken));
	history.replace('/');
	return;

}

export function* getCurrentUser(){
	const response = yield call(getUser);
	
	if(response.error){
		return yield put(failedRequestUser(response.error));
	}
	return yield put(successRequestUser(response));
}

export function* updateUserSaga({ payload }){
	const response = yield call(updateUser, payload);
	if(response.error){
		return yield put(failedRequestUser(response.error));
	}
	if(response.idToken) {
		yield put(successRequestAuth(response.idToken));
	}

	return yield getCurrentUser();
}

export function* setAvatar({ payload }){
	const { file } = payload;
	
	const response = yield addPhoto(file);
	if(response.error){
		return yield put(failedRequestUser(response.error));
	}
	yield getCurrentUser();
	
	
}
export default all([
		takeLatest('@user/CREATE_USER_REQUEST', createUser ),
		takeLatest('@user/GET_USER_REQUEST', getCurrentUser),
		takeLatest('@user/UPDATE_USER_REQUEST', updateUserSaga),
		takeLatest('@user/SET_AVATAR', setAvatar),		
	]);