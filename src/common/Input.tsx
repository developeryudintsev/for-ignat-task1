import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import styles from './Input.module.css'
import {Button} from "../common/Button";

type InputPropsType = {
    sendName: string
    setSendName: (value: string) => void
    clickEnter: (value: string) => void
}

export const Input = (props: InputPropsType) => {
    let [error, setError] = useState<string | null>(null);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setError('');
                props.setSendName(event.currentTarget.value)
    };

    const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            props.clickEnter(props.sendName);
            onAddTaskClick();
        }
    };

    function onAddTaskClick() {
        if (props.sendName.trim() !== '') {
            props.clickEnter(props.sendName);
            setError('')
        } else {
            setError(' Title is required')
        }
    }

    return (
        <div>
            <input className={props.sendName ? styles.universal : styles.error} type="text" value={props.sendName}
                   onChange={onChange}
                   onKeyPress={onKeyPress}
            />

            <Button title={'SEND'} callback={() => {
                onAddTaskClick()
            }}/>
            {<div className="error-message">{error}</div>}
        </div>
    )
}