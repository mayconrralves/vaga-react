import axios from 'axios';

const api = axios.create({
	baseURL: "http://127.0.0.1:3333",
});

export const getProducts =  async () => {
	try {
		const { data } = await api.get('/products');
		return { data };
	}
	catch(error){
		console.log(error)
		return error.response.data;
	}
}

export const getProduct = async id  => {
 	try {
 		const { data } = await api.get('/product', {
 			params: {
 				id,
 			}
 		});
 		return data;
 	}
 	catch(error){
 		return error.response.data;
 	}
}

export const register = async ({name, email, password, address}) => {
	try {
		const { data } = await api.post('/register', {
			name,
			email,
			password,
			address,
		});
		return data;
	} catch(error) {
		return error.response.data;
	}
}

export const signin = async (email, password) => {
	try {
		const { data } = await api.post('/login', {
			email,
			password
		});
		return data;
	} catch(error) {
		return error.response.data;
	}
}

export const getUser = async () => {
	try {
		const { data } = await api.get('/user');
		return data;
	}
	catch(error){
		return error.response.data;
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
		const { data } = await api.post('/user/update',{
			...user,
		});
		return data;
	}
	catch(error){
		return error.response.data;
	}
}

export const closeCart = async (products)=>{
	try {
		const { data } = await api.post('/cart/close', products);
		return data;
	}catch(error){
		return error.response.data;
	}
}

export const addPhoto = async(file) => {
	try {
		const formData = new FormData();
		formData.append('avatar',file);

		const { data } = await api.post('/user/photo/update', formData);
		return data;
	} catch(error) {
		return error.response.data;
	}
}
