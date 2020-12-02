import { reducerFactory } from "../../../../context/ReducerFactory";
import { TLogin } from "./LoginActions";
import { loginHandlers } from "./LoginHandlers";
import { ILoginState, initLoginState } from "./LoginState";


export const LoginReducer = reducerFactory<ILoginState, TLogin>(initLoginState, loginHandlers)