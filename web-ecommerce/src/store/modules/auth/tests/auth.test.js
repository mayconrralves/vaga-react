import reducer, { INITIAL_STATE } from '../reducer';
import  * as Auth from '../actions';

describe('Auth reducer', ()=>{
    test('SIGNIN REQUEST', ()=>{
        const state = reducer(INITIAL_STATE, Auth.signInRequest());
        expect(state).toStrictEqual({
                                     token: '',
                                     fail: false, 
                                     msgError: '',
                                     loading: true,
                                     success: false, 
                                    });
    });
    test('SUCCESS REQUEST', ()=>{
        const state = reducer(INITIAL_STATE, Auth.successRequest('token'));
        expect(state).toStrictEqual({
                                     token: 'token',
                                     fail: false, 
                                     msgError: '',
                                     loading: false,
                                     success: true, 
                                    });
    });
    test('FAILED REQUEST', ()=>{
        const state = reducer(INITIAL_STATE, Auth.failedRequest('error'));
        expect(state).toStrictEqual({
                                     token: '',
                                     fail: true, 
                                     msgError: 'error',
                                     loading: false,
                                     success: false, 
                                    });
    });
    test('SIGN OUT REQUEST', ()=>{
        const state = reducer(INITIAL_STATE, Auth.signOut());
        expect(state).toStrictEqual({
                                     token: '',
                                     fail: false, 
                                     msgError: '',
                                     loading: false,
                                     success: false, 
                                    });
    });
    test('CLEAR REQUEST', ()=>{
        const state = reducer(INITIAL_STATE, Auth.clearAuth());
        expect(state).toStrictEqual({
                                     token: '',
                                     fail: false, 
                                     msgError: '',
                                     loading: false,
                                     success: false, 
                                    });
    });
});
