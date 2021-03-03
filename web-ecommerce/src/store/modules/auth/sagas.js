import { takeLatest, all, call, put} from 'redux-saga/effects';
import { signin } from '../../../api';
export function* login ({ payload }){
	const {email, password} = payload;
	const response = yield call(signin, email, payload);
	console.log(response);


}


export default all([
	takeLatest('@auth/SIGNIN_REQUEST', login ),
	]);