import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {Dispatch} from "redux";
import {
    changeCounterValueAC,
    changeIsOpenSettingsAC,
    changeStartingCounterAC,
    resetCountValueAC
} from "./store/counter-reducer";

function App() {

    const {countStart, countEnd, count, isOpenSettings} = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch<Dispatch>()

    useEffect(() => {
        const localStartCount = localStorage.getItem('startValueCounter')
        const localEndCount = localStorage.getItem('maxValueCounter')
        const localState = JSON.parse(localStorage.getItem('counterValue')!)
        if (localState !== null && localEndCount !== null && localStartCount !== null) {
             dispatch(changeStartingCounterAC(+localStartCount, +localEndCount, +localState.todos.count))
        }
        //

     },[])

    const openSettings = () => {
        //setIsOpenSettings(true)
        dispatch(changeIsOpenSettingsAC(true))
    }

    const setSettings = (max: number, start: number) => {
        dispatch(changeStartingCounterAC(start, max, start))
        dispatch(changeIsOpenSettingsAC(false))
    }
    const increasingCount = () => {
            dispatch(changeCounterValueAC())
    }
    const resetCount = () => {
        dispatch(resetCountValueAC())
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
