
import { TAuth } from "./actions/AuthActions"
import { AuthHandlers } from "./handlers/AuthHandlers"
import { IAuthState, initAuthState } from "./AuthState"
import { reducerFactory } from "../../../context/ReducerFactory"


const handlers = {
    ...AuthHandlers
}

export const AuthReducer = reducerFactory<IAuthState, TAuth>(initAuthState, handlers)
