import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Title from '../Title';
import { createUser } from '../../store/modules/user/actions';
import { Container } from '../_styles/auth';


export default function SignUp(){
	const dispatch = useDispatch();
	return (
		<Container>
				<div>
					<Title />
					<h2>Cadastre-se</h2>
				</div>
				<Formik
					initialValues={{
						name: '',
						email: '',
						password:'',
						confirmPassword: ''
					}}
					onSubmit={ ( values ) => {
						const {name, email, password } = values;
						dispatch(createUser({name, email, password}));
						}}
				>
					<Form>
						<Field name='name' type='text' placeholder='Seu Nome...' />				
						<Field name='email' type='email' placeholder='Seu email...' />				
						<Field name='password' type='password' placeholder='Sua senha...' />				
						<Field name='confirmPassword' type='password' placeholder='Confirme sua senha...' />				
						<Field name='signup' type='submit' value='Enviar' />				
					</Form>
				</Formik>
				<Link className='sign-register' to='/login'>Já sou Cadastrado</Link>
			</Container>
		)
}