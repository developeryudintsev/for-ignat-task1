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
                {props.arQualities.map(m => <div key={m.id} className={style.myQualities1}>My
                    qualities:+ {m.qualities}</div>)}
            </div>
        </div>

    )
}
// <div className={styles.tile + ' ' + this.props.color}>
export default Telegram