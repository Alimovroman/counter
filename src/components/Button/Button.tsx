import React, {FC} from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    isDisabled: boolean
    callBack: () => void
    title: string
}
const Button: FC<ButtonPropsType> = ({title, isDisabled, callBack}) => {

    const onHandlerClick = () => {
        callBack()
    }
    return (
        <button className={style.button} disabled={isDisabled} onClick={onHandlerClick}>
            {title}
        </button>
    );
};

export default Button;