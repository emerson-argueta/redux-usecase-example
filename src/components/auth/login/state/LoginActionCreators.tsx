import * as ACTIONS from "./LoginActions"

export const loginFieldChange = (field: { [fieldName: string]: string }): ACTIONS.ILoginFieldChange => {
    const fieldName = Object.getOwnPropertyNames(field)[0]
    const fieldValue = field[fieldName]

    return { type: ACTIONS.LOGIN_FIELD_CHANGE, fieldName: fieldName, payload: fieldValue }
}
export const loginLoading = (isLoading: boolean): ACTIONS.ILoginLoading => {
    return { type: ACTIONS.LOGIN_LOADING, payload: isLoading }
}