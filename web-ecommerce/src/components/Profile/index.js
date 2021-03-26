import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { FaCamera } from 'react-icons/fa';

import { updateUser, getUser, setAvatar } from '../../store/modules/user/actions';
import { Container } from './styles';


export default function Profile(){
	const { user, success } = useSelector(state=> state.user);
	const [image, setImage] = useState(null);
	const [inputFile, setInputFile] = useState('');
	const dispatch = useDispatch();
	useEffect(()=> {
		 dispatch(getUser());
	},[]);
	const onFileChange = e => {
		const file = e.target.files[0];
		setImage(file);
	}
	const saveFile = e => {
		dispatch(setAvatar(image));
	}
	const imageSubmit = event => {
		const file = event.target.files[0];
		const reader = new FileReader();
		if(file){
			reader.readAsDataURL(file);
			reader.onloadend = e => {
				
				setImage(reader.result);
			}
		}
	}
	const uploadClick = event=> {
		inputFile.click();
		event.preventDefault();
	}
	return success ? (
			<Container
				image={  image ? true : false}
			>
				<h2>
					Atualizar cadastro
				</h2>
				<label htmlFor='file-selector'>
					<span><FaCamera/></span>
					{image && <img src={image} onClick={uploadClick} />}
				</label>
				<input 
					name="image"
					type='file' 
					id='file-selector' 
					onChange={imageSubmit} 
					ref={ input => setInputFile(input)}
				/>

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
						dispatch(updateUser({displayName, email, password, address}));
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