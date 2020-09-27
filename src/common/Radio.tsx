import React, {ChangeEvent, useState} from "react";

type RadioType = {
    arraySkills: Array<{ value: number, skills: string }>
}

export const Radio = (props: RadioType) => {
    let [Skill,SetSkill]=useState<string|undefined>('1');
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        SetSkill(event.currentTarget.value)
    }
    return (
        <div>
            <p>Please select your SKILL:</p>
            {props.arraySkills.map(m =>
                <p>
                    <label>
                        <input type="radio" name="gender" value={Skill} onChange={onChangeHandler}/>
                        {m.skills}
                    </label>
                </p>
            )}
        </div>
    )
}




