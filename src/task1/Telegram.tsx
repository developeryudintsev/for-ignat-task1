import React, {useState} from 'react';
import style from './TelegramStyles.module.css';
import {v1} from "uuid";
import Buttons from "../common/buttons";
import ButtonDelete from '../common/buttonDelete';
import {Input} from "../common/Input";
import {Button} from "../common/Button";
import {CustomInput} from "../common/Custom-input";

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
export function Telegram(props: ITelegram) {
    let [sendName, setSendName] = useState('');
    let [names, setNames] = useState([
        {id: v1(), name: 'Sasha Yudintsev'}
    ])
    console.log(names)
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
    // function DeleteFoo(){
    //     props.Delete(m.id)
    // }



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
                                <Button title={"delete"} callback={()=> props.Delete(m.id)}/>
                                {/*<ButtonDelete  value={'delete'} delete={props.Delete} mId={m.id} buttonType={'orange'}/>*/}
                                {/*<Buttons value={'delete'} changeFilter={props.Delete} mId={m.id}/>*/}
                                {/*<button onClick={() => props.Delete(m.id)}>delete</button>*/}
                            </tr>
                        </div>)}
                </table>
                <p></p>
                {/*<Buttons value={'All'} changeFilter={props.changeFilter}/>*/}
                <Button title={"All"} callback={()=> props.changeFilter('All')}/>
                <Button title={"HightPrioritet"} callback={()=> props.changeFilter('HightPrioritet')}/>
                <Button title={"MiddlePrioritet"} callback={()=> props.changeFilter('MiddlePrioritet')}/>
                <Button title={"LowPrioritet"} callback={()=> props.changeFilter('LowPrioritet')}/>
                {/*<Buttons value={'HightPrioritet'} changeFilter={props.changeFilter}/>*/}
                {/*<Buttons value={'MiddlePrioritet'} changeFilter={props.changeFilter}/>
                <Buttons value={'LowPrioritet'} changeFilter={props.changeFilter}/>*/}
                <p></p>
                <p></p>
                <CustomInput sendName={sendName} setSendName={setSendName} clickEnter={clickEnter}/>
                {/*<Input clickEnter={clickEnter} sendName={sendName} setSendName={setSendName}/>*/}
                {/*<Button title={'SEND'} callback={}/>*/}

                <span>
                  <h1>names count: {names.length}</h1>
                </span>
            </div>
        </div>

    )
}

export default Telegram

//============================================================================================
// import React, {useState} from 'react';
// import style from './TelegramStyles.module.css';
// import {v1} from "uuid";
// import Buttons from "../common/buttons";
// import ButtonDelete from '../common/buttonDelete';
// import Input from "../common/input/input";
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
//     let sum = 1;
//
//     function clickEnter(sendName: string) {
//         if (sendName.length >= 3) {
//             alert('Hi USER ' + sendName);
//             NamesFoo(sendName);
//         }
//         setSendName('')
//     }
//
//     function NamesFoo(sendName: string) {
//         let recordName = {id: v1(), name: sendName};
//         setNames([recordName, ...names]);
//         console.log(names.length + 1)
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
//                              className={m.prioritet === 'hight' ? style.class1 : style.class2}>
//                             <tr>
//                                 <td>{m.toDo}</td>
//                                 <td>{m.prioritet}</td>
//                                 {/*<button onClick={() => props.Delete(m.id)}>delete</button>*/}
//                                 <ButtonDelete value={'delete'} delete={props.Delete} mId={m.id}/>
//                             </tr>
//                         </div>)}
//                 </table>
//                 <p></p>
//                 <Buttons value={'All'} changeFilter={props.changeFilter}/>
//                 <Buttons value={'HightPrioritet'} changeFilter={props.changeFilter}/>
//                 <Buttons value={'MiddlePrioritet'} changeFilter={props.changeFilter}/>
//                 <Buttons value={'LowPrioritet'} changeFilter={props.changeFilter}/>
//                 <p></p>
//                 {/*<input type="text" value={sendName} onChange={(event) => setSendName(event.currentTarget.value)}*/}
//                 {/*       onKeyPress={(event) => {*/}
//                 {/*           if (event.charCode === 13) {*/}
//                 {/*               clickEnter(sendName)*/}
//                 {/*           }*/}
//                 {/*       }}/>*/}
//                 <Input sendName={sendName} setSendName={setSendName} />
//                 <button onClick={() => {
//                     clickEnter(sendName)
//                 }}>send
//                 </button>
//                 <p></p>
//
//                 <span>
//                   <h1>names count: {names.length}</h1>
//                 </span>
//             </div>
//         </div>
//
//     )
// }
//
// export default Telegram