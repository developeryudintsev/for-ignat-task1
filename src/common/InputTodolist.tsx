import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import styles from './Input.module.css'

type callBackType = {
    callBack: (title: string) => void
}

export const InputTodolist=(props: callBackType)=>{
    let [title, setTitle] = useState('')

    const callBackHandler = () => {
        props.callBack(title)
        setTitle('')
    }

    const onKeyPressHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
        if(event.charCode === 13){
            callBackHandler()
        }
    }

    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input
                className={!title? styles.error:styles.normal}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button className={styles.universal} onClick={callBackHandler}>+</button>
            {!title&&<div className={styles.errorMessage}>This field is required</div>}
        </div>
    )
}