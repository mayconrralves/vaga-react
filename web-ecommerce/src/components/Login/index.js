import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from './styles';


export default function Login() {
	return (
			<Container>
				<Formik>
					<Form>
						<Field name='email' type='email' placeholder='Seu email...' />				
						<Field name='password' type='password' placeholder='Sua senha...' />				
						<Field name='signin' type='submit' value='Enviar' />				
					</Form>
				</Formik>
			</Container>
		)
}
