import React, {useState} from 'react';
import style from './Menu.module.css';
import {NavLink} from "react-router-dom";

type callBackType = {
    callBack: () => void;
    opacity: boolean
}

export const Menu = (props: callBackType) => {
    let[on,setOn]=useState<string|null>(null);
    const onOff=(OnValue:string|null)=>{
        setOn(OnValue)
    }

    function callBackHandler(){
        props.callBack();
        setOn(null)
    }

    return (
        <div>
            <NavLink exact to={'/'}>  <button  onClick={callBackHandler} className={style.Menu}>Menu</button></NavLink>
            {props.opacity && <NavLink to={'/monday'}>
                <button onClick={()=>onOff('Monday')} className={on==='Monday'? style.MondayACtive:style.Monday}>Monday</button>
            </NavLink>}
            {props.opacity && <button onClick={()=>onOff('Tuesday')} className={on==='Tuesday'?style.TuesdayActive:style.Tuesday}>Tuesday</button>}
        </div>
    )
}
