import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCamera } from 'react-icons/fa';

import {  getUser, setAvatar } from '../../store/modules/user/actions';
import { Container } from './styles';
import Loading from '../Loading';
import FormUser from '../FormUser';

import { toastMessageError, toastMessageSuccess } from '../../functions/toastError';


export default function Profile(){
	const { user, success, fail, update } = useSelector(state=> state.user);
	const [imageView, setImageView] = useState(null);
	const [image, setImage] = useState(null);
	const [inputFile, setInputFile] = useState('');
	const [loadingImage, setLoadingImage] = useState(false);
	const dispatch = useDispatch();

	const saveFile = e => {
		dispatch(setAvatar(image));
	}
	const imageSubmit = event => {
		const file = event.target.files[0];
		const reader = new FileReader();
		if(file){
			reader.readAsDataURL(file);
			reader.onloadend = e => {
				setImageView(reader.result);
				setImage(file);
			}
		}
	}
	const changeImage= () => {
		if(imageView) return imageView;
		if(user.photoUrl) return user.photoUrl;
		return null;
	}
	const uploadClick = event=> {
		inputFile.click();
		event.preventDefault();
	}

	useEffect(()=> {
		 dispatch(getUser());
	},[]);

	useEffect(() => {
		if(fail) toastMessageError('Erro no Cadastro');
		if(update) toastMessageSuccess('Perfil atualizado com sucesso!');
	}, [fail, update]);

	return success ? (
			<Container
				image={changeImage()}
			>
				<h2>
					Atualizar cadastro
				</h2>
				<section>
					<div>
						<label htmlFor='file-selector'>
							{ !changeImage() && <FaCamera/> }
							{ !loadingImage && changeImage() && <Loading isImage /> }
							{changeImage() && <img 
												src={changeImage()} 
												onClick={uploadClick}
												onLoad={()=> setLoadingImage(true)}
											  />
							}
						</label>
						<button onClick={saveFile}>Salvar Foto</button>
					</div>
					<input 
						name="image"
						type='file' 
						id='file-selector' 
						onChange={imageSubmit} 
						ref={ input => setInputFile(input)}
					/>
					<FormUser  update user={user} />
				</section>	
			</Container>
		) : (
			<Loading width='50%'/>
		)
}