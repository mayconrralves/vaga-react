import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Shop from '../pages/Shop';
import Profile from '../pages/Profile';
import NotFound from '../components/NotFound';
import Details from '../components/ProductDetails';
import { store } from '../store';

export default function Navigation(){
	const { token } = store.getState().auth;
	return (
		<Switch>
				<Route path='/' exact component={Shop} />
				{
					!token && <>
						<Route path='/login' exact component={SignIn} /> 
						<Route path='/signup' exact component={SignUp} />
					</>
				}
				<Route path='/details/:id' exact component={Details} />
				{
					token && <>
								<Route path='/profile' exact component={Profile} />
							</>
				}
				<Route component={NotFound} />

		</Switch>
	)
	
}