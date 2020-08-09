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

    return (
        <div>
            <NavLink exact to={'/'}>  <button onClick={props.callBack} className={style.Menu}>Menu</button></NavLink>
            {props.opacity && <div> <NavLink to={'/monday'}>
                <button onClick={()=>onOff('Monday')} className={on==='Monday'? style.MondayACtive:style.Monday}>Monday</button>
            </NavLink> <NavLink to={'/Tuesday'}><button onClick={()=>onOff('Tuesday')} className={on==='Tuesday'?style.TuesdayActive:style.Tuesday}>Tuesday</button></NavLink></div>}
        </div>

    )
}