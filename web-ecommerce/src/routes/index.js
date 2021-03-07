import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Router';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Shop from '../pages/Shop';
import NotFound from '../components/NotFound';


export default function Navigation(){
	return (
		<Switch>
				<Route path='/' exact component={Shop} />
				<Route path='/login' exact component={SignIn} /> 
				<Route path='/signup' exact component={SignUp} />
				<Route path='/shop' exact component={Shop} routePrivate />
				<Route component={NotFound} />

		</Switch>
	)
	
}