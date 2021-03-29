export const addCart = () => {
	return {
		type: "@cart/ADD_CART"
	}
}

export const successCart =  product  => {
	return {
		type: "@cart/SUCCESS_ADD_CART",
		payload: {
			product,
		}
	}
}

export const failedCart = () => {
	return {
		type: "@cart/FAILED_ADD_CART"
	}
}

export const updateCartSum = quantidade => {
	return {
		type: "@cart/UPDATE_CART_SUM",
		payload: {
			quantity,
		}
	}
}


export const updateCartSub = quantidade => {
	return {
		type: "@cart/UPDATE_CART_SUB",
		payload: {
			quantity,
		}
	}
}

export const deleteCart = () => {
	return {
		type: "@cart/DELETE_CART",
	}
}

export const deleteProductInCart = id => {
	return {
		type: "@cart/DELETE_PRODUCT_IN_CART",
		payload: {
			id,
		}
	}
}