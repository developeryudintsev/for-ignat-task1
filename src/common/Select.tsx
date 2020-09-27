import React, {ChangeEvent, useState} from "react";

type SelectType = {
    // arraySkills:{value: number, skills: string}[]
    arraySkills:Array<{value: number, skills: string}>
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
               props.arraySkills.map(m => <option value={m.value}>{m.skills}</option>)
            }
        </select>
    )
}
