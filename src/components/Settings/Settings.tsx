import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import style from '../Counter/Counter.module.css'
import Button from "../Button/Button";

type SettingsPropsType = {
    setSettings: (max: number, start: number) => void
}

const Settings: FC<SettingsPropsType> = (props) => {
    const [maxValue, setMaxValue] = useState<string>('')
    const [startValue, setStartValue] = useState<string>('')
    const isDisabled = +startValue < 0 || maxValue === startValue

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
    }

    useEffect(() => {
        if (maxValue && startValue) {
            localStorage.setItem('maxValueCounter', maxValue)
            localStorage.setItem('startValueCounter', startValue)
        }
    },[maxValue, startValue])
    const setSettings = () => {
        props.setSettings(+maxValue, +startValue)
    }
    return (
        <div className={style.root}>
            <div className={style.screen}>
                <div>
                    <span>max Value</span>
                    <input className={isDisabled ? style.error : ''} type={"number"} value={maxValue} onChange={onChangeMaxValue}/>
                </div>
                <div>
                    <span>start Value</span>
                    <input className={isDisabled ? style.error : ''} type={"number"} value={startValue} onChange={onChangeStartValue}/>
                </div>
            </div>
            <div className={style.buttons}>
            <Button isDisabled={isDisabled} callBack={setSettings} title={'set'} />
            </div>
        </div>
    );
};

export default Settings;