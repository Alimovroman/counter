import style from './Counter.module.css'
import React, {FC, useState} from 'react';
import Button from "../Button/Button";

type CounterPropsType = {
    count: number | null
    countStart: number | null
    countEnd: number | null
    increasingCount: () => void
    resetCount: () => void
    openSettings: () => void

}
const Counter: FC<CounterPropsType> = ({count,
                                           countStart,
                                           countEnd,
                                           increasingCount,
                                           openSettings,
                                           resetCount}) => {
    const onIncreasingCount = () => {
        increasingCount()
    }
    const onResetCount = () => {
        resetCount()
    }
    const onOpenSettings = () => {
        openSettings()
    }
    const redScreenStyle = count === null
        ? ''
        : count === countEnd
            ? style.redCount
            : ''

    return (
        <div className={style.root}>
            <div className={style.screen}>
                <span className={redScreenStyle}>
                    {count === null ? `Enter values and press 'set'` : count}
                </span>
            </div>
            <div className={style.buttons}>
                <Button title={'inc'} isDisabled={count! > countEnd! - 1} callBack={onIncreasingCount}/>
                <Button title={'reset'} isDisabled={count == countStart} callBack={onResetCount}/>
                <Button title={'set'} isDisabled={false} callBack={onOpenSettings}/>
            </div>
        </div>
    );
};

export default Counter;