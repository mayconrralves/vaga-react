import axios from 'axios';

const api = axios.create({});

export const configToken = {
	token: ''
};

const key = 'AIzaSyCYks1I9N7xTxslbkF3-JiP_nypFhO3D7w';
const baseUrlGlobal = 'https://identitytoolkit.googleapis.com/v1';
const urlRealtimeDatabase = 'https://e-commerce-44c28-default-rtdb.firebaseio.com';

const errorMsg = (error) => {
	return error.message === 'Network Error' ?
		 { error: 'Problema no servidor' } :
		 error.response.data; 
}
export const getProducts =  async () => {
	const { token } = configToken;
	const params = token ? { auth: token } : null;
	try {
		const { data } = await api.get(urlRealtimeDatabase + '/products.json', params);
		return  data ;
	}
	catch(error){
		return errorMsg(error);
	}
}


export const register = async ( { displayName, email, password} ) => {
	try {
		const { data } = await api.post( baseUrlGlobal + '/accounts:signUp',
			 {
			 	displayName,
				email,
				password,
				returnSecureToken: true
			 },
			{
				params: { key }
			},
		);
		const database = {};
		database[data.localId] = {
			address: '',
		}
		const dataUser  = await api.put(urlRealtimeDatabase + '/users.json', 
			database,
			{
			params: {
				auth: data.idToken,
			}
		});
		configToken.token = data.idToken;
		return {
			address: dataUser.address,
			email: data.email,
			displayName: data.displayName,
			localId: data.localId,
			idToken: data.idToken,
		};
	} catch(error) {
		return errorMsg(error);
	}
}

export const signin = async (email, password) => {
	try {
		const { data } = await api.post( baseUrlGlobal + '/accounts:signInWithPassword', 
			{
				email,
				password,
				returnSecureToken: true
			},
			{
				params: { key }
			},
		);
		configToken.token = data.idToken;
		return {
			email,
			idLocal: data.idLocal,
			displayName: data.displayName,
			idToken: data.idToken,
		};
	} catch(error) {
		return errorMsg(error);
	}
}

export const getUser = async () => {
	const { token } = configToken;
	try {
		const { data } = await api.post(baseUrlGlobal + '/accounts:lookup', {
			idToken: token,
		},{
			params: { key }
		});
		const otherData = await api.get(urlRealtimeDatabase + '/users.json', {
			params: {
				auth: token,
			}
		});
		const {displayName, localId, email} = data.users[0];
		const { address } = Object.values(otherData.data)[0];
		return {
				displayName,
				localId,
				email,
				address
			}
			;
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
export const updateUser = async ({ address, email, displayName, password})=>{
	const user = {};
	if(email) user.email = email;
	if(displayName) user.displayName = displayName;
	if(password) user.password = password;
	try{
		const { data } = await api.post(baseUrlGlobal + '/accounts:update'
				,{
					...user,
					idToken: configToken.token,
					//returnSecureToken: true
				}, {
					params: { key }
				});

		if (password) configToken.token = data.idToken;

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