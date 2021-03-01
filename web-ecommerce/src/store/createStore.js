import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function create(reducers, middlewares){
	return createStore(reducers, composeWithDevTools(
			applyMiddleware(...middlewares),
		));
}