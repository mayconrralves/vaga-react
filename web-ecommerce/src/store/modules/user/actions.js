
export  const  updateUser = ({displayName, email, password, address, phone, birthDate }) =>{
	return {
		type: '@user/UPDATE_USER_REQUEST',
		payload: {
			displayName,
			email,
			password,
			address,
			phone,
			birthDate,
		}
	}
}

export const getUser = () => {
	return {
		type: '@user/GET_USER_REQUEST',
	}
}

export const createUser = ({displayName, email, password}) => {
	return {
		type: '@user/CREATE_USER_REQUEST',
		payload: {
			displayName,
			email,
			password,
		}
	}
}

export const successRequest = (user) => {
	return {
		type: '@user/SUCCESS_REQUEST',
		payload: {
			user
		}
	}
}
export const successUpdateRequest = () => {
	return {
		type: '@user/SUCCESS_UPDATE_REQUEST',
	}
}
export const failedRequest = (msg) => {
	return {
		type: '@user/FAILED_REQUEST',
		payload : {
			msg,
		}
	}
}

export const cleanUser = () => {
	return {
		type: '@user/CLEAN_USER',
	}
}

export const setAvatar = (file) => {
	return {
		type: '@user/SET_AVATAR',
		payload : {
			file,
		}
	}
}