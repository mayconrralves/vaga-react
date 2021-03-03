import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default function persist(reducers) {
	const persistedReducer = persistReducer({
		'key': 'ecommerce',
		storage,
		whitelist: [ 'auth','user' ],
	}, reducers);

	return persistedReducer;
}