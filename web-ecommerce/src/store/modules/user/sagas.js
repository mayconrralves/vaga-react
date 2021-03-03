import { all, takeLatest, put, call } from 'redux-saga/effects';
import { register } from '../../../api';

export function* createUser({ payload }){
	const {name, email, password } = payload;
	console.log(name, email, password)
	const response = yield call(register, {name, email, password});
	console.log(response);

}


export default all([
		takeLatest('@user/CREATE_USER_REQUEST', createUser ),
	]);