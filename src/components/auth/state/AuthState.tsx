export const initAuthState: IAuthState = {
    isLoggedIn: false,
    error: ''
}

export interface IAuthState {
    isLoggedIn: boolean,
    error: string
}