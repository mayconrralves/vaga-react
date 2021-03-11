export const successRequest = (products)=>{
	return {
		type: "@products/SUCCESS_REQUEST",
		payload: {
			products
		}
	}
}

export const failedRequest = (msg) => {
	return {
		type: "@products/FAILED_REQUEST",
		payload: {
			msg,
		}
	}
}

export const getProducts = () => {
	return {
		type:  "@products/GET_REQUEST",
	}
}


