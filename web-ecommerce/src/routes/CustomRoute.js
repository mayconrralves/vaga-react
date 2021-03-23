import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import { store } from '../store';


export default function CustomRoute({ protect, component: Component, ...rest }){
	const { token } = store.getState().auth;
	if(token && rest.path === '/login'){
		return <Redirect to='/' />
	}
	if(!token && !protect ) {
		return (
				<Route  {...rest} 
					render={props => (
							<Component {...props} />
						)}
				/>
			)
	}
	return (
			<Route 
				{ ...rest }
				render={props=>(
						token ?
							<Component {...props} /> :
							<Redirect to='/login' />
					)}
			/>
		)
}