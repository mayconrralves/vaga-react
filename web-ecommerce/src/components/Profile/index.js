import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';


export default function Profile(){
	const { user } = useSelector(state=> state.user)
	console.log(user);
	return (
			<Container>
				<Formik
					initialValues={{
							displayName: '',
							email: 'user.email',
							oldPassword: '',
							password: '',
						}}
				>
					
				</Formik>
			</Container>
		)
}