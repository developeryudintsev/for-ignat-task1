import React from 'react';
import style from './TelegramStyles.module.css';


type ITelegram = {
    name: string,
    surName: string,
    arQualities: Array<InArray>
    Delete:(id:number)=>void;
    changeFilter:(value:string)=>void;

}

type InArray = {
    id: number,
    toDo: string,
    prioritet: string,
}

function Telegram(props: ITelegram) {
    return (
        <div className={style.wrapper}>
            <div className={style.telega}>
                <p></p>
                <div>{props.name}</div>
                <div>{props.surName}</div>
                <hr/>

                <table className={style.tt}>
                    <th>TODO</th>
                    <th>PRIORITET</th>
                </table>
                <table>
                    {props.arQualities.map(m => <div key={m.id} className={m.id === 2 ? style.class1 : style.class2}>
                        <tr>
                            <td>{m.toDo}</td>
                            <td>{m.prioritet}</td>
                            <button onClick={()=>props.Delete(m.id)}>delete</button>
                        </tr>
                    </div>)}
                </table>
                <p></p>
                <button onClick={()=>props.changeFilter('All')}>All</button>
                <button onClick={()=>props.changeFilter('HightPrioritet')}>Hight prioritet</button>
                <button onClick={()=>props.changeFilter('MiddlePrioritet')}>Middle prioritet</button>
                <button onClick={()=>props.changeFilter('LowPrioritet')}>Low prioritet</button>
            </div>
        </div>

    )
}

export default Telegram

//==================================================================================================================
// import React from 'react';
// import style from './TelegramStyles.module.css';
//
//
// type ITelegram = {
//     name: string,
//     surName: string,
//     arQualities: Array<InArray>
// }
//
// type InArray = {
//     id: number,
//     toDo: string,
//     prioritet:string,
// }
//
// function Telegram(props: ITelegram) {
//     return (
//         <div className={style.wrapper}>
//             <div className={style.telega}>
//                 <p></p>
//                 <div>{props.name}</div>
//                 <div>{props.surName}</div>
//                 <hr/>
//                 {props.arQualities.map(m => <div key={m.id} className={m.id === 2 ? style.class1 : style.class2}>
//                     {m.toDo} - {m.prioritet}</div>)}
//             </div>
//         </div>
//
//     )
// }
// export default Telegram