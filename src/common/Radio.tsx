import React, {ChangeEvent, useState} from "react";

type RadioType = {
    arraySkills: Array<{ id: number, skills: string, color?: string }>
    title: string
    arraySkillsFoo: (id: number) => void
    setColor?:boolean
}

export const Radio = (props: RadioType) => {
    let [Skill, SetSkill] = useState<string | undefined>('1');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        SetSkill(event.currentTarget.value)
        props.arraySkillsFoo(Number(event.currentTarget.value));
    }
    return (
        <div>
            <p>{props.title}</p>
            {props.arraySkills.map(m =>
                <p>
                    <label>
                        <input type="radio" name="gender" value={m.id} onChange={onChangeHandler}/>
                        {props.setColor?  m.color : m.skills}
                    </label>
                </p>
            )}
        </div>
    )
}




