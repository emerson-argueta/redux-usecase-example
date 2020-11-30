import { compose, createStore } from "redux";
import { RootReducer } from "./RootReducer";

export const Store = createStore(
    RootReducer,
    compose(
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
)