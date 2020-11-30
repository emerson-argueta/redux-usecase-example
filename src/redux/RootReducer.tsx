import { combineReducers } from "redux";
import { AppReducer } from "./app/AppReducer";


export const RootReducer = combineReducers({
    app: AppReducer
})

export type RootState = ReturnType<typeof RootReducer>
