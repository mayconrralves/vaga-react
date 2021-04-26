import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  signInRequest } from '../../store/modules/auth/actions';
import { Container } from '../_styles/auth';
import Title from '../Title';
import Loading from '../Loading';
import { toastMessageError } from '../../functions/toastError';

export default function SignIn(){
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { loading, fail, msgError } = useSelector(state=> state.auth);
	const dispatch = useDispatch();
	const schemaLogin = Yup.object().shape({
		email: Yup.string().email("Digite um email válido").required("Email é requerido"),
		password: Yup.string().required("Password é requerido"),
	});
	useEffect(()=> {
		if(fail) toastMessageError(msgError);
	}, [fail]);
	return (
			<Container>
				{
					loading ? (
						<Loading width='100%' height='100%'/>
					) : (
						<>
							<div>
								<Title isAuth />
								<h2>Entre</h2>
							</div>
							<Formik
								initialValues={{
									email,
									password
								}}
								enableReinitialize={false}
								validationSchema={schemaLogin}
								onSubmit={ ( values ) => {
									const {email, password } = values;
									setEmail(email);
									setPassword(password);
									dispatch(signInRequest(email, password));
								}}
							>
								<Form>
									<Field name='email' type='email' placeholder='Seu email...' />
									<p><ErrorMessage name="email" /></p>				
									<Field name='password' type='password' placeholder='Sua senha...' />
									<p><ErrorMessage name="password" /></p>
									<Field name='signin' type='submit' value='Enviar' />				
								</Form>
							</Formik>
							<Link className='sign-register' to='/signup'>Cadastra-se</Link>
						</>
					)
				}
			</Container>
		)
}