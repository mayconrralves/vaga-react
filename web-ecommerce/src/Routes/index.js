import React from 'react';
import Route from './Router';
import { Switch } from 'react-router-dom';
import Login from '../components/Login';
import Store from '../components/Store';
import SignUp from '../components/SignUp';


export default function Routes(){
	return (
			<Switch>
				<Route path='/' exact component={Store}/>	
				<Route path='/login' exact component={Login}/>	
				<Route path='/signup' exact component={SignUp}/>	
			</Switch>
		)
}