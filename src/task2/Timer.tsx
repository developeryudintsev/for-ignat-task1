import React, {useEffect, useState} from 'react';
import styles from './../task2/TodoList.module.css'
import {Button} from "../common/Button";


export const Timer = () => {
    let [opasityus, setOpasityus] = useState(0)
    let [timerID, setTimerID] = useState<any>(new Date())
    let [intervalValue, setIntervalValue] = useState<any>(null)

    let setIntervalFoo = (value: string): any => {
        if (value === 'stop') {
            clearInterval(intervalValue)
        }else{
            clearInterval(intervalValue)
            setIntervalValue(setInterval(() => setTimerID(new Date()), 1000));
        }
    }

    const mouseEnter = () => {
        console.log('mouse enter');
        setOpasityus(1)
    }

    const mouseLeave = () => {
        console.log('mouse leave');
        setOpasityus(0)
    }

    const dateStyle = {
        margin: '80px',
        width: '150px',
        height: '50px',
        backgroundColor: 'white',
        opacity: opasityus
    }

    return (
        <div className={styles.border}>
            <span
                style={dateStyle}>{new Date().getDate()}:{new Date().getUTCMonth() + 1}:{new Date().getFullYear()}</span>
            <div className={styles.timer} onMouseEnter={mouseEnter}
                 onMouseLeave={mouseLeave}>{timerID.toLocaleTimeString()}</div>
            <div className={styles.buttons}>
                <Button title={'start time'} callback={() => setIntervalFoo('start')}/>
                <Button title={'stop time'} callback={() => setIntervalFoo('stop')}/>
            </div>
        </div>
    )
}

//=================================================================================
// import React, {useEffect, useState} from 'react';
// import styles from './../task2/TodoList.module.css'
// import {Button} from "../common/Button";
//
// export const Timer = () => {
//     let setIntervalValue=null;
//     let [timerID, setTimerID] = useState<any>(new Date())
//
//
//     let setIntervalFoo = ():any=>{
//         setIntervalValue=  setInterval(() => setTimerID(new Date()), 1000);
//     }
//     const clearIntervalFoo =():any=>{
//         clearInterval(timerID);
//     }
//
//     return (
//         <div className={styles.border}>
//             <div className={styles.timer}>{timerID.toLocaleTimeString()}</div>
//
//             <div className={styles.buttons}>
//                 {/*<button onClick={() => setIntervalFoo}>start time</button>*/}
//                 {/*<button onClick={() => clearIntervalFoo}>stop time</button>*/}
//                 <Button title={'start time'} callback={setIntervalFoo}/>
//                 <Button title={'stop time'} callback={clearIntervalFoo}/>
//             </div>
//         </div>
//     )
// }

//================================================================
