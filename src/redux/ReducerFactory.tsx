import { Action, Reducer } from "redux"

export const reducerFactory = <S, A>(initialState: S, handlers: { [key: string]: Reducer }) => {

    const reducer: Reducer<S, Action<A>> = (state = initialState, action) => {

        const handler = handlers[action.type as unknown as string]
        if (handler) {
            return handler(state, action)
        }

        return state
    }

    return reducer
}