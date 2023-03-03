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
    // useEffect(() => {
    //     if (count) {
    //         localStorage.setItem('counterValue', JSON.stringify(count))
    //     }
    //
    // }, [count])
    //
    // useEffect(() => {
    //     const localCount = localStorage.getItem('counterValue')
    //     const localStartCount = localStorage.getItem('startValueCounter')
    //     const localEndCount = localStorage.getItem('maxValueCounter')
    //
    //     if (localCount && localStartCount && localEndCount) {
    //         setCounter(JSON.parse(localCount))
    //         setCountStart(JSON.parse(localStartCount))
    //         setCountEnd(JSON.parse(localEndCount))
    //     }
    //
    //
    // }, [])

    const openSettings = () => {
        //setIsOpenSettings(true)
        dispatch(changeIsOpenSettingsAC(true))
    }

    const setSettings = (max: number, start: number) => {
        // setCountStart(start)
        //setCountEnd(max)
        // setCounter(start)
        // setIsOpenSettings(false)
        dispatch(changeStartingCounterAC(start, max))
        dispatch(changeIsOpenSettingsAC(false))
    }
    const increasingCount = () => {

        // if (count !== null && count < 4) {
            // setCounter(count + 1)
            // setIsDisabledReset(false)
            dispatch(changeCounterValueAC())
        // } else {
        //     dispatch(changeCounterValueAC())
            // setCounter(count! + 1)
            //setIsDisabledInc(true)
        // }
        console.log(count)
    }
    const resetCount = () => {
        dispatch(resetCountValueAC())
        // setCounter(countStart)
        // localStorage.setItem('counterValue', JSON.stringify(countStart))
        //setIsDisabledInc(false)
        //setIsDisabledReset(true)
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
