import React from 'react';
type callBackType={
    callBack:()=>void
    isDone:boolean
}

export const CheckBox=(props:callBackType)=>{
    return(
          <input onClick={props.callBack} type="checkbox" checked={props.isDone}/>
    )
}