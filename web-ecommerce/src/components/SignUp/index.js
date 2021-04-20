import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Title from '../Title';
import { createUser } from '../../store/modules/user/actions';
import { Container } from '../_styles/auth';
import Loading from '../Loading';


export default function SignUp(){
	const dispatch = useDispatch();
	const { loading } = useSelector(state=> state.user);
	return (
		<Container>
			{
				loading ? (
					<Loading width='60%' height='60%' />
				) : (
					<>
							<div>
								<Title />
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