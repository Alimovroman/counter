import style from './Counter.module.css'
import React, {FC, useState} from 'react';

type CounterPropsType = {
    count: number
    isDisabledInc: boolean
    isDisabledReset: boolean
    increasingCount: () => void
    resetCount: () => void

}
const Counter: FC<CounterPropsType> = ({count, increasingCount, resetCount, isDisabledInc, isDisabledReset}) => {
    const onIncreasingCount = () => {
        increasingCount()
    }
    const onResetCount = () => {
        resetCount()
    }
    const redScreenStyle = count === 5 ? style.redCount : ''

    return (
        <div className={style.counter}>
            <div className={style.screen}>
                <span className={redScreenStyle}>{count}</span>
            </div>
            <div className={style.buttons}>
                <button className={style.button} disabled={isDisabledInc} onClick={onIncreasingCount}>
                    inc
                </button>
                <button className={style.button} disabled={isDisabledReset} onClick={onResetCount}>
                    reset
                </button>
            </div>
        </div>
    );
};

export default Counter;