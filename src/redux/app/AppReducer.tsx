import { reducerFactory } from "../ReducerFactory"
import { IAppState } from "./App"
import { ISetABoolean1 } from "./setABoolean1/actions/SetABoolean1Action"
import { SetABoolean1Handlers } from './setABoolean1/handlers/SetABoolean1Handlers'
import { ISetABoolean2 } from "./setABoolean2/actions/SetABoolean2Action"
import { SetABoolean2Handlers } from './setABoolean2/handlers/SetABoolean2Handlers'

const initialState = {}

const handlers = {
    ...SetABoolean1Handlers,
    ...SetABoolean2Handlers
}

export const AppReducer = reducerFactory<IAppState, ISetABoolean1 | ISetABoolean2>(initialState, handlers)
