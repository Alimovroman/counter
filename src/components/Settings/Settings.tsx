import React, {ChangeEvent, FC, useState} from 'react';
import style from '../Counter/Counter.module.css'
import Button from "../Button/Button";

type SettingsPropsType = {
    setSettings: (max: number, start: number) => void
}

const Settings: FC<SettingsPropsType> = (props) => {
    const [maxValue, setMaxValue] = useState<string>('')
    const [startValue, setStartValue] = useState<string>('')
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
    }
    const setSettings = () => {
        props.setSettings(+maxValue, +startValue)
        localStorage.setItem('maxValueCounter', maxValue)
        localStorage.setItem('startValueCounter', startValue)
    }
    return (
        <div className={style.root}>
            <div className={style.screen}>
                <div>
                    <span>max Value</span>
                    <input type={"number"} value={maxValue} onChange={onChangeMaxValue}/>
                </div>
                <div>
                    <span>start Value</span>
                    <input type={"number"} value={startValue} onChange={onChangeStartValue}/>
                </div>
            </div>
            <div className={style.buttons}>
            <Button isDisabled={+startValue < 0 || maxValue === startValue} callBack={setSettings} title={'set'} />
            </div>
        </div>
    );
};

export default Settings;