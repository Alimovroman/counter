import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

function App() {
    const [countStart, setCountStart] = useState<number | null>(null)
    const [countEnd, setCountEnd] = useState<number | null>(null)
    const [count, setCounter] = useState<number | null>(null)

    useEffect(() => {
        const localCount = localStorage.getItem('counterValue')
        const localStartCount = localStorage.getItem('startValueCounter')
        const localEndCount = localStorage.getItem('maxValueCounter')

        if (localCount && localStartCount && localEndCount) {
            setCounter(JSON.parse(localCount))
            setCountStart(JSON.parse(localStartCount))
            setCountEnd(JSON.parse(localEndCount))
        }


    }, [])

    const setSettings = (max: number, start: number) => {
        setCountStart(start)
        setCountEnd(max)
        setCounter(start)
    }
    const increasingCount = () => {

        if (count !== null && count < 4) {
            setCounter(count + 1)
            // setIsDisabledReset(false)
        } else {
            setCounter(count! + 1)
            //setIsDisabledInc(true)
        }
        localStorage.setItem('counterValue', JSON.stringify(count!+1))
    }
    const resetCount = () => {
        setCounter(countStart)
        localStorage.setItem('counterValue', JSON.stringify(countStart))
        //setIsDisabledInc(false)
        //setIsDisabledReset(true)
    }
    return (
        <div className="App">
            <Settings setSettings={setSettings}/>
            <Counter count={count}
                     countStart={countStart}
                     countEnd={countEnd}
                     increasingCount={increasingCount}
                     resetCount={resetCount}/>
        </div>
    );
}

export default App;
