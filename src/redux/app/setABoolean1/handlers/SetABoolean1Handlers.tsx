import { Reducer } from "redux"
import { IAppState } from "../../App"
import { ISetABoolean1, SETABOOLEAN1_FAIL, SETABOOLEAN1_SUCCESS } from "../actions/SetABoolean1Action"


const SetABoolean1Success: Reducer<IAppState, ISetABoolean1> = (state, action) => {
    console.log("Triggered succes action creator for setABoolean1");

    return {
        ...state,
        setABoolean1: action.payload,
        error: null
    }
}

const SetABoolean1Fail: Reducer<IAppState, ISetABoolean1> = (state, action) => {
    console.log("Triggered failed action creator for setABoolean1");

    return {
        ...state,
        setABoolean1: undefined,
        error: action.error
    }
}

export const SetABoolean1Handlers = {
    [SETABOOLEAN1_SUCCESS]: SetABoolean1Success,
    [SETABOOLEAN1_FAIL]: SetABoolean1Fail,
}