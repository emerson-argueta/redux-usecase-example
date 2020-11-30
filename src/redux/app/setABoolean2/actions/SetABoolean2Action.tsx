export const SETABOOLEAN2_SUCCESS = "APP_SETABOOLEAN2_SUCCESS"
export const SETABOOLEAN2_FAIL = "APP_SETABOOLEAN2_FAIL"

export interface ISetABoolean2 {
    type: typeof SETABOOLEAN2_SUCCESS | typeof SETABOOLEAN2_FAIL
    payload?: any
    error?: any
}
