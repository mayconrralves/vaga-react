import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from './styles';

export default function SignUp(){

	return (
			<Container>
				<div>
					<h1>Cadastre-se</h1>
				</div>
				<Formik
					initialValues={{
						email: '',
						password:'',
						confirmPassword:'',
					}}
					onSubmit={ ( values ) => {
						console.log(values );
						}}
				>
					<Form>
						<Field name='email' type='email' placeholder='Seu email...' />				
						<Field name='password' type='password' placeholder='Sua senha...' />				
						<Field name='confirmPassword' type='password' placeholder='Confirme sua senha...' />				
						<Field name='signup' type='submit' value='Enviar' />				
					</Form>
				</Formik>
			</Container>
		)
}
