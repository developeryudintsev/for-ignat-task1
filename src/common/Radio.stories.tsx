import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {v1} from "uuid";
import {action} from "@storybook/addon-actions";
import {Radio} from "./Radio";

export default {
    title: 'Todolist/Radio',
    component: Radio,
   } as Meta;
const Template: Story<any> = (args) => <Radio {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    arraySkills:[
        {id: 1, skills: 'Junior', color: '  dimgray'},
        {id: 2, skills: 'Middle', color: '  deeppink'},
        {id: 3, skills: 'Senior', color: '  lightskyblue'}
    ],
     arraySkillsFoo: action('arraySkillsFoo')
};

