import React, {useState} from 'react';
import './Input.styles.css'

type clickEnterType = {
    clickEnter: (sendName: string) => void;
    sendName: string;
    setSendName: (sendName: string) => void
}

export let Input = (props: clickEnterType) => {
    let [error, setError] = useState<string | null>(null);

    function onAddTaskClick() {
        console.log('kkkkkkkkkkkkkkkkkk')
        if (props.sendName.trim() !== '') {
            props.clickEnter(props.sendName);
            setError('')
        } else {
            setError(' Title is required')
        }
    }

    return (
        <div>
            <input className={props.sendName ? 'universal' : 'error'} type="text" value={props.sendName}
                   onChange={(event) => props.setSendName(event.currentTarget.value)}
                   onKeyPress={(event) => {
                       if (event.charCode === 13) {
                           props.clickEnter(props.sendName)
                       }
                   }}/>
            {/*<button className={'universal'} onClick={() => {props.clickEnter(props.sendName)}}>send</button>*/}
            <button className={'universal'} onClick={onAddTaskClick}>send</button>
            {<div className="error-message">{error}</div>}
        </div>
    )
}

//=================================================
// import React, {useState} from 'react';
// import './Input.styles.css'
//
// type clickEnterType = {
//     clickEnter: (sendName: string) => void;
//     sendName: string;
//     setSendName: (sendName: string) => void
// }
//
// type sendNameType = {
//     id: string,
//     name: string
// }
// export let Input = (props: clickEnterType) => {
//     return (
//         <div>
//             <input className={'universal'} type="text" value={props.sendName} onChange={(event) => props.setSendName(event.currentTarget.value)}
//                    onKeyPress={(event) => {
//                        if (event.charCode === 13) {
//                            props.clickEnter(props.sendName)
//                        }
//                    }}/>
//             <button className={'universal'} onClick={() => {props.clickEnter(props.sendName)}}>send</button>
//         </div>
//     )
// }