import React, {ChangeEvent, useState} from "react";

type SelectType = {
    // arraySkills:{value: number, skills: string}[]
    arraySkills:Array<{id: number, skills: string, color?:string}>
}

export const Select = (props:SelectType) => {
    let [Skill,SetSkill]=useState<string|undefined>('1');
    const onChangeHandler=(event:ChangeEvent<HTMLSelectElement>)=>{
        SetSkill(event.currentTarget.value)
    }
      return (
        <select value={Skill} onChange={onChangeHandler}>
            <option>none</option>
            {
               props.arraySkills.map(m => <option value={m.id}>{m.skills}</option>)
            }
        </select>
    )
}
