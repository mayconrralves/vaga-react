import { createStore, compose, applyMiddleware} from 'redux';

export default (reducers, middlewares)=>{
	return createStore(reducers, middlewares);
}