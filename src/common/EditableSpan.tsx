import React, {useState, KeyboardEvent, ChangeEvent} from 'react';

type EditableType = {
    title: string
    callBack:(title:string)=>void
}

export const EditableSpan = (props: EditableType) => {
    let [on, setOn] = useState(false);
    let [title, setTitle] = useState(props.title);
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
        props.callBack(title)
    }
    const activate = () => {
        setOn(!on)
    }
    const deactivate = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode == 13) {
            setOn(false)
        }
    }
    const deactivateOnBlur = () => {
        setOn(false)
    }
    return !on ?
        <span onDoubleClick={activate}>{props.title}</span>
        :
        <input value={title} autoFocus={true} onKeyPress={deactivate} onBlur={deactivateOnBlur}
               onChange={onChangeHandler}/>
}