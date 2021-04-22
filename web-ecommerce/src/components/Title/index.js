import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Title( { isAuth } ){


	return (
		<Container isAuth={isAuth}>
			<Link to='/'>Nova Loja</Link>
		</Container>
		)
}