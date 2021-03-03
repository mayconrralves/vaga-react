
export  const  updateUsers = () =>{
	return {
		type: '@user/UPDATE_USER_REQUEST',
	}
}

export const getUsers = () => {
	return {
		type: '@user/CREATE_USER_REQUEST',
	}
}

export const createUser = ({name, email, password}) => {
	return {
		type: '@user/CREATE_USER_REQUEST',
		payload: {
			name,
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

export const failedRequest = (msg) => {
	return {
		type: '@user/FAILED_REQUEST',
		payload : {
			msg,
		}
	}
}