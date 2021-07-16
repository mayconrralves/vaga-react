import reducer,{INITIAL_STATE} from "../reducer";
import * as User from '../actions';

describe("User",()=>{
    const msgError = 'error';
    const user = {
        displayName: "user",
        address: "user",
        phone: "222",
        password: "222",
        birthDate: '12/12/2000',
        email: 'user@user.com',
    };
    test("Create User Request",()=>{
        const state = reducer(INITIAL_STATE, User.createUser({
            displayName: user.displayName,
            password: user.password,
            email: user.email,
        }));
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            loading: true,
        });
    });
    test("Update User Request",()=>{
        const state = reducer(INITIAL_STATE, User.updateUser({...user}));
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            loading: true,
        });
    });
    test("Get User Request",()=>{
        const state = reducer(INITIAL_STATE, User.getUser());
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            loading: true,
        });
    });
    test("Success Request", ()=>{
        const state = reducer(INITIAL_STATE, User.successRequest(user));
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            success: true,
            user,
        });
    });
    test("Success Update Request",()=>{
        const state = reducer(INITIAL_STATE, User.successUpdateRequest());
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            update: true,
        });
    });
    test("Failed Request",()=>{
        const state = reducer(INITIAL_STATE, User.failedRequest(msgError));
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            fail: true,
            msgError,
        });
    });
    test("Failed Get Request",()=>{
        const state = reducer(INITIAL_STATE, User.failedGetRequest(msgError));
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            getFail: true,
            msgError,
        });    
    });
    test("Clean User",()=>{
        const state = reducer(INITIAL_STATE, User.cleanUser());
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