import reducer, { INITIAL_STATE } from '../reducer';
import  * as Auth from '../actions';

describe('Auth reducer', ()=>{
    test('SIGNIN REQUEST', ()=>{
        const state = reducer(INITIAL_STATE, Auth.signInRequest());
        expect(state).toStrictEqual({
                                     ...INITIAL_STATE,
                                     loading: true,
                                    });
    });
    test('SUCCESS REQUEST', ()=>{
        const state = reducer(INITIAL_STATE, Auth.successRequest('token'));
        expect(state).toStrictEqual({
                                        ...INITIAL_STATE,
                                        token: 'token',
                                        success: true, 
                                    });
    });
    test('FAILED REQUEST', ()=>{
        const state = reducer(INITIAL_STATE, Auth.failedRequest('error'));
        expect(state).toStrictEqual({
                                        ...INITIAL_STATE,
                                        fail: true, 
                                        msgError: 'error',
                                    });
    });
    test('SIGN OUT REQUEST', ()=>{
        const state = reducer(INITIAL_STATE, Auth.signOut());
        expect(state).toStrictEqual({
                                        ...INITIAL_STATE,
                                    });
    });
    test('CLEAR REQUEST', ()=>{
        const state = reducer(INITIAL_STATE, Auth.clearAuth());
        expect(state).toStrictEqual({
                                        ...INITIAL_STATE,
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
