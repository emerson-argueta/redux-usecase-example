import { Reducer } from "react";
import { IAuthState } from "../AuthState"
import * as AUTH_ACTIONS from "../actions/AuthActions"

const loginSuccess: Reducer<IAuthState, AUTH_ACTIONS.ILogin> = (state, action): IAuthState => {
    console.log('Reducer for login success');

    return {
        ...state,
        isLoggedIn: true,
        error: ''
    }
}

const loginFail: Reducer<IAuthState, AUTH_ACTIONS.ILogin> = (state, action): IAuthState => {
    console.log('Reducer for login fail');

    return {
        ...state,
        isLoggedIn: false,
        error: action.error
    }
}

const logout: Reducer<IAuthState, AUTH_ACTIONS.ILogout> = (state, action): IAuthState => {
    console.log('Reducer for logout');

    return {
        ...state,
        isLoggedIn: false,
        error: ''
    }
}

export const AuthHandlers = {
    [AUTH_ACTIONS.LOGIN_SUCCESS]: loginSuccess,
    [AUTH_ACTIONS.LOGIN_FAIL]: loginFail,
    [AUTH_ACTIONS.LOGOUT]: logout,

}