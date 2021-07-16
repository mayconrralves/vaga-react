import { produce } from 'immer';

export const INITIAL_STATE= {
    success: false,
    fail: false,
    errors: null,
    loading: false,
    orders: [],
    msgError: '',
}

export default function ordersReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case '@orders/REQUEST_CLOSE_CART':
            return produce(state,draft=>{
                draft.loading = true;
                draft.fail = false;
                draft.success = false;
                draft.errors = null;
                draft.msgError = '';
                draft.orders = [];
            });
        case '@orders/SUCCESS_REQUEST':
            return produce(state, draft=>{
                draft.loading = false;
                draft.success = true;
                draft.orders = action.payload.orders;
            });
        case '@orders/FAILED_REQUEST': {
            return produce(state, draft=>{
                draft.loading = false;
                draft.fail = true;
                draft.errors = action.payload.errors;
            });
        }
        default:
            return state;
    }
} 