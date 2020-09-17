import React, {useState} from 'react';
import styles from './TodoList.module.css'
import {Button} from './../common/Button'
import {InputTodolist} from "../common/InputTodolist";
import {CheckBox} from "../common/CheckBox";
import {EditableSpan} from "../common/EditableSpan";


type titleType = {
    id: string
    title: string
    filter: string
    Tasks: Array<arrayType>
    addTask: (title: string, todolistsID: string) => void
    removeTask: (removeId: string, todolistsID: string) => void
    changeFilterTodolist: (filterValue: string, todolistsId: string) => void
    changeStatus: (CheckBoxId: string, todolistsID: string) => void
    RemoveTodolist: (todolistsID: string) => void;
    saveNewTitle: (title: string, todolistsID: string, TasksID: string) => void
    saveNewTitleTodolist: (title: string, todolistsID: string) => void
}

type arrayType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoList = (props: titleType) => {
    const addTaskHandler = (title: string) => {
        props.addTask(title, props.id)
    }
    let saveNewTitleTodolistHandler = (title: string) => {
        props.saveNewTitleTodolist(title, props.id)
    }
    return (
        <div className={styles.TodoList}>
            <Button callback={() => props.RemoveTodolist(props.id)} title={'delete'}/>
            <EditableSpan callBack={saveNewTitleTodolistHandler} title={props.title}/>
            <div>
                <InputTodolist callBack={addTaskHandler}/>
            </div>
            <ul>
                {
                    props.Tasks.map(m => {
                            const saveNewTitleHandler = (title: string) => {
                                props.saveNewTitle(title, props.id, m.id)
                            }
                            return (
                                <li key={m.id}>
                                    <Button callback={() => props.removeTask(m.id, props.id)} title={'X'}/>
                                    <CheckBox callBack={() => props.changeStatus(m.id, props.id)} isDone={m.isDone}/>
                                    <EditableSpan callBack={saveNewTitleHandler} title={m.title}/>
                                </li>
                            )
                        }
                    )}
            </ul>
            <div>
                <Button callback={() => props.changeFilterTodolist('All', props.id)} title={'All'}
                        Filter={props.filter}/>
                <Button callback={() => props.changeFilterTodolist('Active', props.id)} title={'Active'}
                        Filter={props.filter}/>
                <Button callback={() => props.changeFilterTodolist('Completed', props.id)} title={'Completed'}
                        Filter={props.filter}/>
            </div>
        </div>
    )
}

//======================================================================
// import React, {useState} from 'react';
// import styles from './TodoList.module.css'
// import {Button} from './../common/Button'
//
// import {InputTodolist} from "../common/InputTodolist";
// import {CheckBox} from "../common/CheckBox";
// import {EditableSpan} from "../common/EditableSpan";
//
// type titleType = {
//     id: string
//     title: string
//     filter: string
//     Tasks: Array<arrayType>
//     addTask: (title: string, todolistsID: string) => void
//     removeTask: (removeId: string, todolistsID: string) => void
//     changeFilterTodolist: (filterValue: string, todolistsId: string) => void
//     changeStatus: (CheckBoxId: string, todolistsID: string) => void
//     RemoveTodolist: (todolistsID: string) => void;
//     saveNewTitle: (title: string, todolistsID: string, TasksID: string) => void
//     saveNewTitleTodolist: (title: string, todolistsID: string) => void
// }
//
// type arrayType = {
//     id: string
//     title: string
//     isDone: boolean
// }
//
// export const TodoList = (props: titleType) => {
//     const addTaskHandler = (title: string) => {
//         props.addTask(title, props.id)
//     }
//
//     let saveNewTitleTodolistHandler = (title: string) => {
//         props.saveNewTitleTodolist(title, props.id)
//     }
//     return (
//         <div className={styles.TodoList}>
//             <Button callback={() => props.RemoveTodolist(props.id)} title={'delete'}/>
//             <EditableSpan callBack={saveNewTitleTodolistHandler} title={props.title}/>
//             <div>
//                 <InputTodolist callBack={addTaskHandler}/>
//             </div>
//             <ul>
//                 {
//                     props.Tasks.map(m =>
//                         {
//                             const saveNewTitleHandler = (title: string) => {
//                                 props.saveNewTitle(title, props.id, m.id)
//                             }
//                             return(
//                                 <li key={m.id}>
//                                     <Button callback={() => props.removeTask(m.id, props.id)} title={'X'}/>
//                                     <CheckBox callBack={() => props.changeStatus(m.id, props.id)} isDone={m.isDone}/>
//                                     <EditableSpan callBack={saveNewTitleHandler} title={m.title}/>
//                                 </li>
//                             )
//                         }
//                     )}
//             </ul>
//             <div>
//                 <Button callback={() => props.changeFilterTodolist('All', props.id)} title={'All'}
//                         Filter={props.filter}/>
//                 <Button callback={() => props.changeFilterTodolist('Active', props.id)} title={'Active'}
//                         Filter={props.filter}/>
//                 <Button callback={() => props.changeFilterTodolist('Completed', props.id)} title={'Completed'}
//                         Filter={props.filter}/>
//             </div>
//         </div>
//     )
// }