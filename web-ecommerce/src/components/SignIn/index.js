import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signInRequest } from '../../store/modules/auth/actions';
import { Container } from '../_styles/auth';
import Title from '../Title';
export default function SignIn(){
	const dispatch = useDispatch();
	return (
			<Container>
				<div>
					<Title />
					<h2>Entre</h2>
				</div>
				<Formik
					initialValues={{
						email: '',
						password:'',
					}}
					onSubmit={ ( values ) => {
						const {email, password } = values;
						dispatch(signInRequest(email, password));
						}}
				>
					<Form>
						<Field name='email' type='email' placeholder='Seu email...' />				
						<Field name='password' type='password' placeholder='Sua senha...' />				
						<Field name='signin' type='submit' value='Enviar' />				
					</Form>
				</Formik>
						<Link className='sign-register' to='/signup'>Cadastra-se</Link>
			</Container>
		)
}