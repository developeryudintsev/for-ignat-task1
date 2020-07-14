import React, {useState} from 'react';
import './button.styles.css'

type ButtonsDeletePropsType = {
    value: string,
    delete: (id: string) => void,
    mId:string,
    buttonType?:string
}

let ButtonDelete = (props: ButtonsDeletePropsType) => {
    let ddd = () => {
        props.delete(props.mId)
    }
    return (<span>
    <input className={props.buttonType=='orange'? 'orangeButton': 'universalButton'} type={'button'} value={props.value}
           onClick={ddd}
    >
           </input>
</span>)
}

export default ButtonDelete
