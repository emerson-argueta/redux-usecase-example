
import * as ACTIONS from "./SetABoolean2Action";

export const SetABoolean2ActionCreator = (test2?: boolean): ACTIONS.ISetABoolean2 => {

    if (test2) {

        return {
            type: ACTIONS.SETABOOLEAN2_SUCCESS,
            payload: true
        }
    }

    return {
        type: ACTIONS.SETABOOLEAN2_FAIL,
        error: ACTIONS.SETABOOLEAN2_FAIL
    }
}