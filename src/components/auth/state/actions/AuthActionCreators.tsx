import * as AUTH_ACTIONS from "./AuthActions"

export const login = (isSuccessful: boolean): AUTH_ACTIONS.ILogin => {
    console.log("triggered login action creator");

    if (isSuccessful) {
        return {
            type: AUTH_ACTIONS.LOGIN_SUCCESS
        }
    }
    return {
        type: AUTH_ACTIONS.LOGIN_FAIL,
        error: 'Incorrect credentials'
    }


}

export const logout = (): AUTH_ACTIONS.ILogout => {
    console.log("triggered logout action creator");

    return {
        type: AUTH_ACTIONS.LOGOUT,
    }


}