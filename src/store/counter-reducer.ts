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
type ActionType = ChangeStartingCounterACType
    | ChangeIsOpenSettingsACType
    | ChangeCounterValueACType
    |ResetCountValueACType
export const counterReducer = (state= initialState, action: ActionType) => {
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

type ChangeCounterValueACType = ReturnType<typeof changeCounterValueAC>
export const changeCounterValueAC = () => ({type: 'CHANGE-COUNTER-VALUE'} as const)

type ResetCountValueACType = ReturnType<typeof resetCountValueAC>
export const resetCountValueAC = () => ({type: 'RESET-COUNT-VALUE'} as const)