import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import {CounterActionType, counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../localStorage/localStorage";
import {throttle} from "lodash";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";



const reducers = combineReducers({
    counter: counterReducer
})

export type RootState = ReturnType<typeof reducers>

const persistedState = loadState()
export const store = legacy_createStore(reducers, applyMiddleware(thunk));
export type ThunkDispatchType = ThunkDispatch<RootState, unknown, AppActionsType>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>()
export type AppDispatch = typeof store.dispatch
export type AppActionsType = CounterActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>
// store.subscribe(throttle(() => {
//     saveState({
//         todos: store.getState().counter
//     });
// }, 1000));