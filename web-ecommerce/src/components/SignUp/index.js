import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Title from '../Title';
import { createUser } from '../../store/modules/user/actions';
import { Container } from '../_styles/auth';
import Loading from '../Loading';
import { toastMessageError } from '../../functions/toastError';


export default function SignUp(){
	const dispatch = useDispatch();
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
						<Formik
							initialValues={{
								displayName: '',
								email: '',
								password:'',
								confirmPassword: ''
							}}
							onSubmit={ ( values ) => {
								const {displayName, email, password } = values;
								dispatch(createUser({displayName, email, password}));
								}}
						>
							<Form>
								<Field name='displayName' type='text' placeholder='Seu Nome...' />				
								<Field name='email' type='email' placeholder='Seu email...' />				
								<Field name='password' type='password' placeholder='Sua senha...' />				
								<Field name='confirmPassword' type='password' placeholder='Confirme sua senha...' />				
								<Field name='signup' type='submit' value='Enviar' />				
							</Form>
						</Formik>
						<Link className='sign-register' to='/login'>Já sou Cadastrado</Link>
					</>
				)
			}
		</Container>
		)
}