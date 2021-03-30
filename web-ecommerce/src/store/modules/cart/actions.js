export const addProductInCart = product => {
	return {
		type: "@cart/ADD_CART",
		payload: {
			product,
		}
	}
}

export const updateCartSum = quantityPurchase => {
	return {
		type: "@cart/UPDATE_CART_SUM",
		payload: {
			quantityPurchase,
		}
	}
}


export const updateCartSub = quantityPurchase => {
	return {
		type: "@cart/UPDATE_CART_SUB",
		payload: {
			quantityPurchase,
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

export const  setCartProducts = products => {
	return {
		type: '@cart/SET_PRODUCTS_IN_CART',
		payload: {
			products,
		}
	}
}