export const SETABOOLEAN1_SUCCESS = "APP_SETABOOLEAN1_SUCCESS"
export const SETABOOLEAN1_FAIL = "APP_SETABOOLEAN1_FAIL"

export interface ISetABoolean1 {
    type: typeof SETABOOLEAN1_SUCCESS | typeof SETABOOLEAN1_FAIL
    payload?: boolean
    error?: any
}
