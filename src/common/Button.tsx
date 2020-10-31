import React from "react";
import styles from './Button.module.css'

type ButtonPropsType = {
    title: string
    callback?: () => void
    Filter?:string
}

export const Button = (props:ButtonPropsType) => {
    return (
        <button className={props.Filter==props.title? styles.colorFilter:styles.universalButton}
                onClick={props.callback}>{props.title}</button>
    )
}
