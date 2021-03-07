import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { store } from '../store';

export default function Router({component: Component, routePrivate, ...rest}){
	const { token } = store.getState().auth;

	if(!token && routePrivate) return <Redirect to='/' />

	if(token && !routePrivate) return <Redirect to='/shop' />

	return <Route {...rest} render={
		props=> (<Component {...props } /> )
		}
	/>
}