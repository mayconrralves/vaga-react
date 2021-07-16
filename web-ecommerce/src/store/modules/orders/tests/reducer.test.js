import reducer, { INITIAL_STATE } from '../reducer';
import * as Orders from '../actions';


describe("Orders",()=>{
    const product = {
        id:1,
        quantityPurchase: 2,
    };
    const product2 = {
        id:2,
        quantityPurchase: 3,
    };
    test("Success Request", ()=>{
        const state = reducer(INITIAL_STATE, Orders.successRequest([product, product2]));
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            orders: [
                product, product2,
            ],
            success: true,
        });
    });
    test('Failed Request',()=>{
        const error = 'error';
        const state = reducer(INITIAL_STATE, Orders.failedRequest(error));
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            errors: error,
            fail: true,
        });
    });
    test("RequestClose Cart", ()=>{
        const state = reducer(INITIAL_STATE, Orders.closeCartRequest());
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            loading: true,
        });     
    });
    test("return State", ()=>{
        const state = reducer(INITIAL_STATE, ()=>{
            type: "state"
        });
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
        });
    });
});