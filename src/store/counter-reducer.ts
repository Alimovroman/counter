import {Dispatch} from "redux";
import {AppThunk, RootState} from "./store";

export type InitialStateCounterType = {
    countStart: number | null,
    countEnd: number | null,
    count: number | null,
    isOpenSettings: boolean
}
const initialState: InitialStateCounterType = {
    countStart: null,
    countEnd: null,
    count: null,
    isOpenSettings: false
}
export type CounterActionType = ChangeStartingCounterACType
    | ChangeIsOpenSettingsACType
    | ChangeCounterValueACType
    |ResetCountValueACType
export const counterReducer = (state= initialState, action: CounterActionType) => {
    switch (action.type) {
        case "CHANGE-START-COUNTER":
            return {
                ...state,
                countStart: action.payload.countStart,
                countEnd: action.payload.countEnd,
                count: action.payload.countValue
            }
        case "CHANGE-IS-OPEN-SETTINGS":
            return {
                ...state,
               isOpenSettings: action.payload.isOpen
            }
        case "CHANGE-COUNTER-VALUE":
            return {
                ...state,
                count: state.count! + 1
            }
        case "RESET-COUNT-VALUE":
            return {
                ...state,
                count: state.countStart
            }
        default:
            return state
    }
}

type ChangeStartingCounterACType = ReturnType<typeof changeStartingCounterAC>
export const changeStartingCounterAC = (countStart: number, countEnd: number, countValue: number) => {
    return {
        type: 'CHANGE-START-COUNTER',
        payload: {
            countStart,
            countEnd,
            countValue
        }
    } as const
}

type ChangeIsOpenSettingsACType = ReturnType<typeof changeIsOpenSettingsAC>
export const changeIsOpenSettingsAC = (isOpen: boolean) => ({type: 'CHANGE-IS-OPEN-SETTINGS', payload: {isOpen}}as const)

type ChangeCounterValueACType = ReturnType<typeof incCounterValueAC>
export const incCounterValueAC = () => ({type: 'CHANGE-COUNTER-VALUE'} as const)

type ResetCountValueACType = ReturnType<typeof resetCountValueAC>
export const resetCountValueAC = () => ({type: 'RESET-COUNT-VALUE'} as const)

export const getCountLocalStorage = (): AppThunk => (dispatch) => {
    const localStartCount = localStorage.getItem('startValueCounter')
    const localEndCount = localStorage.getItem('maxValueCounter')
    const localState = JSON.parse(localStorage.getItem('counterValue')!)

    if (localState !== null && localEndCount !== null && localStartCount !== null) {

        dispatch(changeStartingCounterAC(+localStartCount, +localEndCount, +localState))
    }
}

export const incValueCount = (count: number): AppThunk => (dispatch) => {
    localStorage.setItem('counterValue', JSON.stringify(count+1))
    dispatch(incCounterValueAC())
}
export const setSettingsCount = (startValue: number, maxValue: number): AppThunk => (dispatch) => {
    localStorage.setItem('counterValue', JSON.stringify(startValue))
    localStorage.setItem('maxValueCounter', JSON.stringify(maxValue))
    localStorage.setItem('startValueCounter', JSON.stringify(startValue))
    dispatch(changeStartingCounterAC(startValue, maxValue, startValue))
}
export const resetCountValue = (): AppThunk => (dispatch, getState: () => RootState) => {
    const startValue = getState().counter.countStart
    localStorage.setItem('counterValue', JSON.stringify(startValue))
    dispatch(resetCountValueAC())
}