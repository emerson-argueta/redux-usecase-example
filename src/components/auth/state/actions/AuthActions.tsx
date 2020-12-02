export const LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS"
export const LOGIN_FAIL = "AUTH_LOGIN_FAIL"
export const LOGOUT = "AUTH_LOGOUT"

export interface ILogin {
    type: typeof LOGIN_SUCCESS | typeof LOGIN_FAIL
    payload?: boolean
    error?: any
}
export interface ILogout {
    type: typeof LOGOUT
}


export type TAuth = ILogin | ILogout
