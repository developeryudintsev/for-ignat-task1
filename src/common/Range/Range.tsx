import React, {ChangeEvent, useState} from 'react';
import styles from './Range.module.css';

export const Range = React.memo((props:{min:number,max:number}) => {

    const [value, setValue] = useState<number>(props.min);
    const onChangeCallback=(event:ChangeEvent<HTMLInputElement>)=>{
        setValue(Number(event.currentTarget.value) )
        console.log(value)
    }
    return (
        <div className={styles.case}>
            <span>{value}</span>
            <input
                type="range"
                min={props.min}
                max={props.max}
                onChange={onChangeCallback}
                value={value}
            />
        </div>
    )
})