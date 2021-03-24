import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, getUser } from '../../store/modules/user/actions';
import { Container } from './styles';


export default function Profile(){
	const { user, success } = useSelector(state=> state.user);
	const dispatch = useDispatch();
	useEffect(()=> {
		 dispatch(getUser());
	},[]);
	return success ? (
			<Container>
				<h2>
					Atualizar cadastro
				</h2>
				<Formik
					initialValues={{
							displayName: user.displayName,
							email: user.email,
							address: user.address,
							oldPassword: '',
							password: '',
						}}
					onSubmit={ ( values ) => {
						const {email, password, displayName, address } = values;
						dispatch(updateUser({displayName, email, password}));
						}}
				>
					<Form>
						<Field name='displayName' type='text'  placeholder="Seu Nome ..."/>
						<Field name='email' type='email' placeholder="Seu Email ..."  />				
						<Field name='address' type='text' placeholder='Seu endereço ...' />
						<Field name='oldPassword' type='password' placeholder='Sua senha antiga ...' />				
						<Field name='password' type='password' placeholder='Sua senha ...' />
						<Field name='confirmPassword' type='password' placeholder='Confirme sua senha ...' />				
						<Field name='update' type='submit' value='Atualizar' />				
					</Form>
				</Formik>
			</Container>
		) : (
			<h2>Loading</h2>
		)
}