import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";

function App() {
    const [count, setCounter] = useState<number>(0)
    const [isDisabledInc, setIsDisabledInc] = useState<boolean>(false)
    const [isDisabledReset, setIsDisabledReset] = useState<boolean>(true)

    const increasingCount = () => {
       if(count < 4 ) {
           setCounter(count + 1)
           setIsDisabledReset(false)
       }  else {
           setCounter(count + 1)
           setIsDisabledInc(true)
       }
    }
    const resetCount = () => {
        setCounter(0)
        setIsDisabledInc(false)
        setIsDisabledReset(true)
    }
    return (
        <div className="App">
            <Counter count={count}
                     isDisabledInc={isDisabledInc}
                     isDisabledReset={isDisabledReset}
                     increasingCount={increasingCount}
                     resetCount={resetCount} />
        </div>
    );
}

export default App;
