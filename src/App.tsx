import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {RootState, useAppDispatch} from "./store/store";
import {
    incCounterValueAC,
    changeIsOpenSettingsAC,
    changeStartingCounterAC, getCountLocalStorage,
    resetCountValueAC, incValueCount, setSettingsCount, resetCountValue
} from "./store/counter-reducer";
import {Dispatch} from "redux";

function App() {

    const {countStart, countEnd, count, isOpenSettings} = useSelector((state: RootState) => state.counter)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCountLocalStorage())
        //

     },[])

    const openSettings = () => {
        //setIsOpenSettings(true)
        dispatch(changeIsOpenSettingsAC(true))
    }

    const setSettings = (max: number, start: number) => {
        // dispatch(changeStartingCounterAC(start, max, start))
        dispatch(setSettingsCount(start, max))
        dispatch(changeIsOpenSettingsAC(false))
    }
    const increasingCount = () => {
          count && dispatch(incValueCount(count))
    }
    const resetCount = () => {
        dispatch(resetCountValue())
    }
    return (
        <div className="App">
            <Settings setSettings={setSettings}/>
            {!isOpenSettings
                ? <Counter count={count}
                           countStart={countStart}
                           countEnd={countEnd}
                           increasingCount={increasingCount}
                           resetCount={resetCount}
                           openSettings={openSettings}/>
                : <Settings setSettings={setSettings}/>
            }
        </div>
    );
}

export default App;
