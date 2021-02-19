import React from 'react';
import Route from './Router';
import { Switch } from 'react-router-dom';
import Login from '../components/Login';

export default function Routes(){
	return (
			<Switch>
				<Route path='/login' exact component={Login}/>	
			</Switch>
		)
}