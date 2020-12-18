import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {TodoList} from "./TodoList";
import {v1} from "uuid";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Todolist/TodoList',
    component: TodoList,
} as Meta;
const Template: Story<any> = (args) => <TodoList {...args}/>

export const Primary = Template.bind({});
Primary.args = {
      Tasks:
        [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'React', isDone: false}
        ]
    ,
    addTask: action('addTask'),
    removeTask: action('removeTask'),
    changeFilterTodolist: action('changeFilterTodolist'),
    changeStatus: action('changeStatus'),
    RemoveTodolist: action('RemoveTodolist'),
    saveNewTitle: action('saveNewTitle'),
    saveNewTitleTodolist: action('saveNewTitleTodolist'),
};

