import { Reducer } from "react"
import * as LOGIN_ACTIONS from "./LoginActions"
import { ILoginState } from "./LoginState"

export const loginFieldChange: Reducer<ILoginState, LOGIN_ACTIONS.ILoginFieldChange> = (state, action) => {

    return {
        ...state,
        [action.fieldName]: action.payload
    }
}

export const loginLoading: Reducer<ILoginState, LOGIN_ACTIONS.ILoginLoading> = (state, action) => {

    return {
        ...state,
        isLoading: action.payload
    }
}


export const loginHandlers = {
    [LOGIN_ACTIONS.LOGIN_FIELD_CHANGE]: loginFieldChange,
    [LOGIN_ACTIONS.LOGIN_LOADING]: loginLoading
}