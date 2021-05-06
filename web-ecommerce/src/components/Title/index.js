import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import PropTypes from 'prop-types';

export default function Title( { isAuth } ){


	return (
		<Container isAuth={isAuth}>
			<Link to='/'>Nova Loja</Link>
		</Container>
		)
}

Title.propTypes = {
	isAuth: PropTypes.bool,
}