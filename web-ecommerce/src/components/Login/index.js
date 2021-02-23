import React, { useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from './styles';

import { auth } from '../../config/firebase';

export default function Login() {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const signIn = async ({email, password}) => {
		try{
			await auth.signInWithEmailAndPassword(email, password);
		}catch(err){
			setError(err.code);
		}
	}
	const signOut = () => {
		auth.signOut();
	}
	return (
			<Container>
				<div>
					<h1>Entre</h1>
				</div>
				<Formik
					initialValues={{
						email: '',
						password:'',
					}}
					onSubmit={ ( values ) => {
						signIn({...values});
						}}
				>
					<Form>
						<Field name='email' type='email' placeholder='Seu email...' />				
						<Field name='password' type='password' placeholder='Sua senha...' />				
						<Field name='signin' type='submit' value='Enviar' />				
					</Form>
				</Formik>
			</Container>
		)
}
