import React from 'react';

import { Route, Redirect  } from 'react-router-dom';
export default function Router( { component: Component, isPrivate, path, ...rest } ) {
	
	const signed = false;

	if(!signed && isPrivate){
		return <Redirect to='/'  />
	}
	if(signed && !isPrivate ){
		return <Redirect to={path} />
	}
	return <Route {...rest} render={props=>(
		<Component {...props} /> 
	)}/>
}