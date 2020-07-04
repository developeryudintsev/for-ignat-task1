import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './TelegramStyles.module.css';
import {v1} from "uuid";

type ITelegram = {
    name: string,
    surName: string,
    arQualities: Array<InArray>
    Delete: (id: string) => void;
    changeFilter: (value: string) => void;
}

type InArray = {
    id: string,
    toDo: string,
    prioritet: string,
}

function Telegram(props: ITelegram) {
    let [sendName, setSendName] = useState('');
    let [names, setNames] = useState([
        {id: v1(), name: 'Sasha Yudintsev'}
    ])
    let counter = 1;
    let sum = 1;

    function clickEnter(sendName: string) {
        if (sendName.length >= 3) {
            alert('Hi USER ' + sendName);
            NamesFoo(sendName);
        }
        setSendName('')
    }
    function NamesFoo(sendName: string) {
        let recordName = {id: v1(), name: sendName};
        setNames([recordName, ...names]);
        console.log(names.length + 1)

    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSendName(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            clickEnter(sendName)
        }
    }
    const onAllClickHandler = () => {
        props.changeFilter('All')
    }
    const onHightPrioritetClickHandler = () => {
        props.changeFilter('HightPrioritet')
    }
    const onMiddlePrioritetClickHandler = () => {
        props.changeFilter('MiddlePrioritet')
    }
    const onLowPrioritetClickHandler = () => {
        props.changeFilter('LowPrioritet')
    }
    const onSendNameHandler=()=>{
        clickEnter(sendName)
    }
    let deleteHandler=(evId:string) =>{
        return  props.Delete(evId)
    }

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
                    {props.arQualities.map(m =>
                        <div key={m.id}
                             className={m.prioritet === 'hight' ? style.class1 : style.class2}>
                            <tr>
                                <td>{m.toDo}</td>
                                <td>{m.prioritet}</td>
                                <button onClick={()=>deleteHandler(m.id)}>delete</button>
                                {/*<button onClick={() => props.Delete(m.id)}>delete</button>*/}
                            </tr>
                        </div>)}
                </table>
                <p></p>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onHightPrioritetClickHandler}>Hight prioritet</button>
                <button onClick={onMiddlePrioritetClickHandler}>Middle prioritet</button>
                <button onClick={onLowPrioritetClickHandler}>Low prioritet</button>
                <p></p>
                <input type="text" value={sendName}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={onSendNameHandler}>send</button>
                {/*<button onClick={() => {clickEnter(sendName)}}>send</button>*/}
                <p></p>

                <span><h1>names count: {names.length}</h1></span>
            </div>
        </div>

    )
}

export default Telegram;

//--------------------------------------------------------------
// import React, {useState} from 'react';
// import style from './TelegramStyles.module.css';
// import {v1} from "uuid";
//
//
// type ITelegram = {
//     name: string,
//     surName: string,
//     arQualities: Array<InArray>
//     Delete: (id: string) => void;
//     changeFilter: (value: string) => void;
//
// }
//
// type InArray = {
//     id: string,
//     toDo: string,
//     prioritet: string,
// }
//
// function Telegram(props: ITelegram) {
//     let [sendName, setSendName] = useState('');
//     let [names, setNames] = useState([
//         {id: v1(), name: 'Sasha Yudintsev'}
//     ])
//     let counter = 1;
//     let sum=1;
//
//     function clickEnter(sendName: string) {
//         if (sendName.length >= 3) {
//             alert('Hi USER ' + sendName);
//             NamesFoo(sendName);
//         }
//         setSendName('')
//     }
//     function NamesFoo(sendName: string) {
//         let recordName = {id: v1(), name: sendName};
//         setNames([recordName, ...names]);
//         console.log(names.length+1)
//
//     }
//
//
//     return (
//         <div className={style.wrapper}>
//             <div className={style.telega}>
//                 <p></p>
//                 <div>{props.name}</div>
//                 <div>{props.surName}</div>
//                 <hr/>
//
//                 <table className={style.tt}>
//                     <th>TODO</th>
//                     <th>PRIORITET</th>
//                 </table>
//                 <table>
//                     {props.arQualities.map(m =>
//                         <div key={m.id}
//                              className={m.prioritet === 'hight' ? style.class1 : style.class2}> {/*//не работает из-за uuid*/}
//                             <tr>
//                                 <td>{m.toDo}</td>
//                                 <td>{m.prioritet}</td>
//                                 <button onClick={() => props.Delete(m.id)}>delete</button>
//                             </tr>
//                         </div>)}
//                 </table>
//                 <p></p>
//                 <button onClick={() => props.changeFilter('All')}>All</button>
//                 <button onClick={() => props.changeFilter('HightPrioritet')}>Hight prioritet</button>
//                 <button onClick={() => props.changeFilter('MiddlePrioritet')}>Middle prioritet</button>
//                 <button onClick={() => props.changeFilter('LowPrioritet')}>Low prioritet</button>
//                 <p></p>
//                 <input type="text" value={sendName} onChange={(event) => setSendName(event.currentTarget.value)}
//                        onKeyPress={(event) => {
//                            if (event.charCode === 13) {
//                                clickEnter(sendName)
//                            }
//                        }}/>
//                 <button onClick={() => {
//                     clickEnter(sendName)
//                 }}>send
//                 </button>
//                 <p></p>
//
//                 <span>
//                   <h1>names count:  {names.length}</h1>
//                 </span>
//             </div>
//         </div>
//
//     )
// }
//
// export default Telegram