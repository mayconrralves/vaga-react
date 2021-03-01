
export const initialRequest = (email, password)=>{
	return {
		type: '@auth/INITIAL_REQUEST',
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

export const failedRequest = () => {
	return {
		type: '@auth/FAILED_REQUEST',
	}
}