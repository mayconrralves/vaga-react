import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import Title from '../Title';
import { createUser } from '../../store/modules/user/actions';
import { Container } from '../_styles/auth';
import Loading from '../Loading';
import { toastMessageError } from '../../functions/toastError';


export default function SignUp(){
	const [ displayName, setDisplayName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const dispatch = useDispatch();
	const { loading, fail, msgError } = useSelector(state=> state.user);
	const schemaSignUp = Yup.object().shape({
		displayName: Yup.string()
						.required("Nome é obrigatório"),
		email: Yup.string()
				  .email("Digite um email válido")
				  .required("Email é obrigatório"),
		password: Yup.string()
					 .min(6,"Senha muito curta. Deve ter seis ou mais caracteres")
					 .required("Senha é obrigatória"),
		confirmPassword: Yup.string().test({
			name: 'password-match',
			test: function(value) { return this.parent.password === value },
			message: "Password não confere",
		} )


	});
	useEffect(()=>{
		console.log(msgError)
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
								displayName,
								email,
								password,
								confirmPassword,
							}}
							validationSchema={schemaSignUp}
							enableReinitialize={false}
							onSubmit={ ( values ) => {
								const {displayName, email, password, confirmPassword } = values;
								setDisplayName(displayName);
								setEmail(email);
								setPassword(password);
								setConfirmPassword(confirmPassword);
								dispatch(createUser({displayName, email, password}));
								}}
						>
									<Form>
										<Field name='displayName' type='text' placeholder='Seu Nome...' />
										<p className="msg-error"><ErrorMessage name="displayName" /></p>
										<Field name='email' type='email' placeholder='Seu email...' />
										<p className="msg-error"><ErrorMessage name="email" /></p>				
										<Field name='password' type='password' placeholder='Sua senha...' />
										<p className="msg-error"><ErrorMessage name="password" /></p>
										<Field name='confirmPassword' type='password' placeholder='Confirme sua senha...' />
										<p className="msg-error"><ErrorMessage name="confirmPassword" /></p>
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