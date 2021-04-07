export const addProductInCart = product => {
	return {
		type: "@cart/ADD_CART",
		payload: {
			product,
		}
	}
}

export const updateCartSum = index => {
	return {
		type: "@cart/UPDATE_CART_SUM",
		payload: {
			index,
		}
	}
}


export const updateCartSub = index => {
	return {
		type: "@cart/UPDATE_CART_SUB",
		payload: {
			index,
		}
	}
}

export const deleteCart = () => {
	return {
		type: "@cart/DELETE_CART",
	}
}

export const deleteProductInCart = index => {
	return {
		type: "@cart/DELETE_PRODUCT_IN_CART",
		payload: {
			index,
		}
	}
}

export const  setCartProducts = products => {
	return {
		type: '@cart/SET_PRODUCTS_IN_CART',
		payload: {
			products,
		}
	}
}

export const closeCart = () => {
	return {
	type: '@cart/CLOSE_CART_REQUEST',
	}
}