import axios from 'axios';
import { authStorage, uploadImage } from './storage';

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
/*Configure string to be  able  to use as a user key*/
const transformKeyUser = (s) => {
	return s.replaceAll('.', '_')
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
		configToken.token = data.idToken;

		await authStorage(email, password);

		const dataUser  = await api.put(urlRealtimeDatabase + '/users/'+transformKeyUser(email)+'.json', 
			{
				address: '',
			},
			{
			params: {
				auth: data.idToken,
			}
		});
		return {
			address: dataUser.address,
			email: data.email,
			displayName: data.displayName,
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

		await authStorage(email, password);

		const dataUser  = await api.get(urlRealtimeDatabase + '/users.json',
			{
			params: {
				auth: data.idToken,
				print: 'pretty',
			}
		});
		return {
			email,
			displayName: data.displayName,
			idToken: data.idToken,
			address: dataUser.data.address,
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
		const {displayName, email, photoUrl } = data.users[0];

		const otherData = await api.get(urlRealtimeDatabase + '/users/'+transformKeyUser(email)+'.json', {
			params: {
				auth: token,
			}
		});
		const { address, birthDate, phone } = otherData.data;
		return {
				displayName,
				email,
				address,
				photoUrl,
				birthDate,
				phone,
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
export const updateUser = async ({ address, phone, birthDate, email, displayName, password}) => {
	const user = {};
	if(email) user.email = email;
	if(displayName) user.displayName = displayName;
	if(password) user.password = password;
	try{
		const { data } = await api.post(baseUrlGlobal + '/accounts:update'
				,{
					...user,
					idToken: configToken.token,
					returnSecureToken: true
				}, {
					params: { key }
				});

		if (password) configToken.token = data.idToken;
		const dataUser = {
			idToken: data.idToken,
		};
		await authStorage(email, password);

		if(!(address || phone || birthDate )) return dataUser;
		const otherData  = await api.patch(urlRealtimeDatabase + '/users/' +  transformKeyUser(email) +'.json', 
			{
				address: address ? address : ' ',
				birthDate: birthDate ? birthDate : ' ',
				phone: phone ? phone : ' '
			},
			{
				params: {
					auth: configToken.token,
				}
			}
		);
		data.address = otherData.data.address;
		return dataUser;
	}
	catch(error){
		return errorMsg(error);
	}
}

export const closeCart = async (products) => {
	try {
		const { data } = await api.post('/closeCart', products);
		return data;
	}catch(error){
		return errorMsg(error);
	}
}

export const addPhoto = async(file) => {
	try {
		const url = await uploadImage(file);
		const { data } = await api.post( baseUrlGlobal + '/accounts:update',
			 {
			 	photoUrl: url,
			 	idToken: configToken.token,
			 },
			{
				params: { key }
			},
		);
		return data;
	} catch(error) {
		return errorMsg(error);
	}
}

export const updateProducts = async (id, quantity) => {
	try {
		const data  = await api.patch(urlRealtimeDatabase + '/products/' + id + '.json', 
			{
				quantity,
			},
			{
				params: {
					auth: configToken.token,
				}
			}
		);
	return data;
	}catch(error){
		return errorMsg(error);
	}
	
}
export const createOrder = async ( email, orders ) => {
	try {	
		const { data }  = await api.post(
			urlRealtimeDatabase + 
			'/orders/' + 
			transformKeyUser(email)+
			'.json', 
			{
				...orders,
			},
			{
				params: {
					auth: configToken.token,
				}
			}
		);
		return data;
	}catch(error){
		return errorMsg(error);
	}
	
}

export const getOrders =  async email => {
	try {
		const { data } = await api.get(
			urlRealtimeDatabase + 
			'/orders/'+
			transformKeyUser(email)+
			'.json', {
				params: {
					auth: configToken.token,
				}
			}
		);
		return  data ;
	}
	catch(error){
		return errorMsg(error);
	}
}