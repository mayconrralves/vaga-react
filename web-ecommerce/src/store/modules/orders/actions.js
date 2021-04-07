export const closeCartRequest = ( email, products) => {
    return {
        type: '@orders/REQUEST_CLOSE_CART',
        payload: {
            products,
            email,
        }
    }
}

export const successRequest = orders => {
    return {
        type : '@orders/SUCCESS_REQUEST',
        payload : {
            orders,
        }
    }
}

export const failedRequest = errors => {
    return {
        type: '@orders/FAILED_REQUEST',
        payload: {
            errors,
        }
    }
}

export const getOrders = email => {
    return {
        type: '@orders/GET_REQUEST',
        payload: {
            email,
        }
    }
}