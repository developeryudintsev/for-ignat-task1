import React from 'react';
import style from './TelegramStyles.module.css';

type ITelegram={
    name:string,
    surName:string,
    age:number
}

function Telegram(props:ITelegram) {
return(
    <div className={style.wrapper}>
        <div className={style.telega}>
            <p></p>
            <div>{props.name}</div>
            <div>{props.surName}</div>
            <hr/>
            <p></p>
            <div>{props.age}</div>
        </div>
    </div>

)
}

export default Telegram