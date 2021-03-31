import React from 'react';
import { Switch, Route,useLocation } from 'react-router-dom';

import CustomRoute from './CustomRoute';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Shop from '../pages/Shop';
import Profile from '../pages/Profile';
import NotFound from '../components/NotFound';
import Details from '../pages/ProductDetails';
import Cart from '../pages/Cart';

export default function Navigation(props){

	
	return (
		<Switch>
				<CustomRoute path='/' exact component={Shop} />
				<CustomRoute path='/shop' exact component={Shop} />
				<CustomRoute path='/login' exact component={SignIn} /> 
				<CustomRoute path='/signup' exact component={SignUp} />
				<CustomRoute path='/details/:id' exact component={Details} />
				<CustomRoute path='/cart' exact component={Cart}  />
				<CustomRoute path='/profile' exact component={Profile}  protect />
				<CustomRoute component={NotFound} />
		</Switch>
	)
	
}