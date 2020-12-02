import { combineReducers } from "redux";
import { AuthReducer } from "../components/auth/state/AuthReducer";



export const RootReducer = combineReducers({
    auth: AuthReducer
})

export type RootState = ReturnType<typeof RootReducer>
