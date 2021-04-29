import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Title from '../Title';
import FormUser from '../FormUser';
import { Container } from '../_styles/auth';
import Loading from '../Loading';
import { toastMessageError } from '../../functions/toastError';


export default function SignUp(){

	const { loading, fail, msgError } = useSelector(state=> state.user);
	
	useEffect(()=>{
		if(fail) toastMessageError(msgError);
	}, [fail]);
	return (
		<Container>
			{
				loading ? (
					<Loading width='100%' height='100%' />
				) : (
					<>
						<div>
							<Title isAuth />
							<h2>Cadastre-se</h2>
						</div>
						<FormUser />
						<Link className='sign-register' to='/login'>Já sou Cadastrado</Link>
					</>
				)
			}
		</Container>
		)
}