
export const signInRequest = (email, password)=>{
	return {
		type: '@auth/SIGNIN_REQUEST',
		payload: {
			email,
			password
		}
	}
}

export const successRequest = (token) => {
	return {
		type: '@auth/SUCCESS_REQUEST',
		payload: {
			token,
		}
	}
}

export const failedRequest = (msg) => {
	return {
		type: '@auth/FAILED_REQUEST',
		payload:{
			msg,
		}
	}
}

export const signOut = () => {
	return {
		type: '@auth/SIGN_OUT'
	}
}

export const clearAuth = () => {
	return {
		type: '@auth/CLEAR_AUTH'
	}
}