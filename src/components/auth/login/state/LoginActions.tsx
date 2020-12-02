export const LOGIN_FIELD_CHANGE = "LOGIN_FIELD_CHANGE"
export const LOGIN_LOADING = "LOGIN_LOADING"

export interface ILoginFieldChange {
    type: typeof LOGIN_FIELD_CHANGE,
    fieldName: string,
    payload: string
}
export interface ILoginLoading {
    type: typeof LOGIN_LOADING
    payload: boolean
}

export type TLogin = ILoginFieldChange | ILoginLoading;