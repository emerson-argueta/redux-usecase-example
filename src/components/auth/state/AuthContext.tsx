import { createContext, Dispatch, useContext, useReducer } from "react"
import { TAuth } from "./actions/AuthActions";
import { AuthReducer } from "./AuthReducer";
import { IAuthState, initAuthState } from "./AuthState";

export const AuthDispatchContext = createContext<Dispatch<TAuth>>({} as Dispatch<TAuth>);
export const AuthStateContext = createContext(initAuthState);

export const useAuthContext = (): [IAuthState, Dispatch<TAuth>] => {
    const authState = useContext(AuthStateContext)
    const authDispatch = useContext(AuthDispatchContext)
    return [authState, authDispatch]
}

export const AuthProvider = ({ children }: any) => {
    const [authstate, authDispatch] = useReducer(AuthReducer, initAuthState);

    return (
        <AuthStateContext.Provider value={authstate}>
            <AuthDispatchContext.Provider value={authDispatch}>{children}</AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}