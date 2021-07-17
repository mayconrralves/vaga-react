import reducer, { INITIAL_STATE } from '../reducer';
import * as Products from '../actions';


describe('Products',()=>{
    const product = {
        id:1,
        quantityPurchase: 2,
    };
    const product2 = {
        id:2,
        quantityPurchase: 3,
    };
    const error = 'error';
    test("Get Request", ()=>{
        const state = reducer(INITIAL_STATE,Products.getProducts());
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            loading: true,
        });
    });
    test("Success Request", ()=>{
        const state = reducer(INITIAL_STATE, Products.successRequest([product, product2]));
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            success: true,
            products:[
                product,
                product2,
            ],
        });
    });
    test("Failed Request", ()=>{
        const state = reducer(INITIAL_STATE, Products.failedRequest(error));
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            fail: true,
            msgError: error,
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