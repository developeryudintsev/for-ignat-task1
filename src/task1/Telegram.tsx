import React from 'react';
import style from './TelegramStyles.module.css';

type ITelegram = {
    name: string,
    surName: string,
    arQualities: Array<InArray>
}

type InArray = {
    id: number,
    qualities: string,
    className:string,
}

function Telegram(props: ITelegram) {
    return (
        <div className={style.wrapper}>
            <div className={style.telega}>
                <p></p>
                <div>{props.name}</div>
                <div>{props.surName}</div>
                <hr/>
                {props.arQualities.map(m => <div key={m.id} className={m.id === 2 ? style.class1 : style.class2}>My
                    qualities:+ {m.qualities}</div>)}
            </div>
        </div>

    )
}
export default Telegram