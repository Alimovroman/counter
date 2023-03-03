import { combineReducers, createStore } from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../localStorage/localStorage";
import {throttle} from "lodash";



const reducers = combineReducers({
    counter: counterReducer
})

export type RootState = ReturnType<typeof reducers>

const persistedState = loadState()
export const store = createStore(reducers, persistedState);

// store.subscribe(() => {
//     saveState({
//         counter: store.getState().counter
//     })
// })
store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().counter
    });
}, 1000));