import React, {useState} from 'react';
import './button.styles.css'

type ButtonsPropsType = {
    value: string,
    changeFilter: (value: string) => void,

}

function Buttons(props: ButtonsPropsType) {
    return (<span>
    <input className={'universalButton'} type={'button'} value={props.value}
           onClick={() => props.changeFilter(props.value)}
    >
           </input>
</span>)
}

export default Buttons

//=============================================================
// import React, {useState} from 'react';
// import './button.styles.css'
//
// type ButtonPropsType = {
//     value: string,
//     changeFilter: (value: string) => void;
// }
//
// function Button(props: ButtonPropsType) {
//     return(<span>
//     <input className={'universalButton'} type={'button'} value={props.value} onClick={() => props.changeFilter(props.value)} ></input>
// </span>)
// }
//
// export default Button