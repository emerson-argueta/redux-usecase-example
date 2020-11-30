import { Reducer } from "redux"
import { IAppState } from "../../App"
import { ISetABoolean2, SETABOOLEAN2_FAIL, SETABOOLEAN2_SUCCESS } from "../actions/SetABoolean2Action"

const SetABoolean2Success: Reducer<IAppState, ISetABoolean2> = (state, action) => {
    return {
        ...state,
        setABoolean2: action.payload,
        error: null
    }
}

const SetABoolean2Fail: Reducer<IAppState, ISetABoolean2> = (state, action) => {
    return {
        ...state,
        setABoolean2: undefined,
        error: action.error
    }
}

export const SetABoolean2Handlers = {
    [SETABOOLEAN2_SUCCESS]: SetABoolean2Success,
    [SETABOOLEAN2_FAIL]: SetABoolean2Fail,
}