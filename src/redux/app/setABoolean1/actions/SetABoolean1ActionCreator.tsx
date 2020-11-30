
import * as ACTIONS from "./SetABoolean1Action";

export const SetABoolean1ActionCreator = (test1?: boolean): ACTIONS.ISetABoolean1 => {
    console.log("trigger action for boolean1");

    if (test1) {

        return {
            type: ACTIONS.SETABOOLEAN1_SUCCESS,
            payload: true
        }
    }

    return {
        type: ACTIONS.SETABOOLEAN1_FAIL,
        error: ACTIONS.SETABOOLEAN1_FAIL
    }
}