import React from 'react';

type recordNameType = {
    id: number
    name: string
}
let Arr=[];
let counter = 0;
export const saveState = (recordName: recordNameType) => {
    counter++;
    Arr.push(counter)
    localStorage.setItem(counter.toString(), recordName.name)
}

export const restoreState=()=>{
 for(let i=1;i<=Arr.length;i++){
     console.log(localStorage.getItem(i.toString()))
 }


}

