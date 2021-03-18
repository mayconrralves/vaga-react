import axios from 'axios';

const api = axios.create({});

export const configToken = {
	token: ''
};

const errorMsg = (error) => {
	return error.message === 'Network Error' ?
		 { error: 'Problema no servidor' } :
		 error.response.data; 
}
export const getProducts =  async () => {
	const { token } = configToken;
	const params = token ? { auth: token } : null;
	try {
		const { data } = await api.get('https://e-commerce-44c28-default-rtdb.firebaseio.com/products.json', params);
		return  data ;
	}
	catch(error){
		return errorMsg(error);
	}
}


export const register = async ( { name, email, password} ) => {
	try {
		const { data } = await api.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp',
			 {
				email,
				password,
				returnSecureToken: true
			 },
			{
				params: {
					key: "AIzaSyCYks1I9N7xTxslbkF3-JiP_nypFhO3D7w"
				}
			},
		);
		return data;
	} catch(error) {
		return errorMsg(error);
	}
}

export const signin = async (email, password) => {
	try {
		const { data } = await api.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword', 
			{
				email,
				password,
				returnSecureToken: true
			},
			{
				params: {
					key: "AIzaSyCYks1I9N7xTxslbkF3-JiP_nypFhO3D7w"
				}
			},
		);
		return data;
	} catch(error) {
		return errorMsg(error);
	}
}

export const getUser = async () => {
	try {
		const { data } = await api.get('/user');
		return data;
	}
	catch(error){
		return errorMsg(error);
	}
}

/*
	name,
	email,
	password,
	address,
	urlAvatar
*/
export const updateUser = async (user)=>{
	try{
		const { data } = await api.put('/user/update',{
			...user,
		});
		return data;
	}
	catch(error){
		return errorMsg(error);
	}
}

export const closeCart = async (products)=>{
	try {
		const { data } = await api.post('/cart/close', products);
		return data;
	}catch(error){
		return errorMsg(error);
	}
}

export const addPhoto = async(file) => {
	try {
		const formData = new FormData();
		formData.append('avatar',file);

		const { data } = await api.post('/user/photo/update', formData);
		return data;
	} catch(error) {
		return errorMsg(error);
	}
}