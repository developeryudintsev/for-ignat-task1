import React from 'react';
import './../App.css';
import {Meta, Story} from "@storybook/react";
import {ArrayState} from './ArrayState';
import {v1} from "uuid";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Todolist/ArrayState',
    component: ArrayState,
} as Meta;
const Template: Story<any> = (args) => <ArrayState {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    state: [
    {id: v1(), name: "Igor", age: 41},
    {id: v1(), name: "Olga", age: 39},
    {id: v1(), name: "Sasha", age: 11},
    {id: v1(), name: "Nadka", age: 4},
],
    SortUpValueForAction:action('SortUpValueForAction'),
    SortDownValueForAction:action('SortDownValueForAction'),
    SortAGEAC:action('SortAGEAC')
};