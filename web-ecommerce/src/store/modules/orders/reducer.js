import { produce } from 'immer';

const INTIAL_STATE= {
    success: false,
    fail: false,
    errors: null,
    loading: false,
    orders: [],
}

export default function ordersReducer(state=INTIAL_STATE, action){
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