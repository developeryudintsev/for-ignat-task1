import React, {useReducer, useState} from 'react';
import './App.css';
import Telegram from "./task1/Telegram";
import {v1} from "uuid";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {Menu} from "./common/Menu";
import {TodoList} from "./task2/TodoList";
import {InputTodolist} from "./common/InputTodolist";
import {Select} from "./common/Select";
import {Radio} from "./common/Radio";
import {ACType, StateType} from "./common/tests/homeWorkReducer";
import {ArrayState} from "./task2/ArrayState";
import {Timer} from "./task2/Timer";
import styles from "./task2/TodoList.module.css";
import {Preloader} from "./common/Preloader/Preloader";
import {Button} from "./common/Button";
import {LoadingAC, PreloaderReducer} from "./common/Preloader/PreloaderReducer";
import {Range} from "./common/Range/Range";
import {RangeDouble} from "./common/RangeDouble/RangeDouble";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {setThemeAC} from "./reducers/ThemeReducer";

export type todolistsType = {
    id: string
    title: string
    filter: string
}
const Todolist1 = v1();
const Todolist2 = v1();

export type loadingType = boolean;

function App() {
    //for Preloader----------------------------------------------------
    let [show, setShow] = useState(false)
    let [loading, setDispatchLoading] = useReducer(PreloaderReducer, false);//по умолчанию не прказывает прелодер
    const setPreloader = () => {
        setShow(true)
        setDispatchLoading(LoadingAC(true))//показывай прелодер
        setTimeout(() => {
            setDispatchLoading(LoadingAC(false))//не показывай прелодер черех 3 сек.
        }, 3000);
    }

    //for TELEGRAM------------------------------------------------------
    let [arQualities, setarQualities] = useState(
        [
            {id: v1(), toDo: 'JS work', prioritet: 'hight'},
            {id: v1(), toDo: 'watch TV', prioritet: 'low'},
            {id: v1(), toDo: 'games', prioritet: 'middle'},
            {id: v1(), toDo: 'React', prioritet: 'hight'},
            {id: v1(), toDo: 'HTMl', prioritet: 'low'},
        ]
    )

    function Delete(id: string) {
        let newArQualities = arQualities.filter(f => f.id !== id)
        setarQualities(newArQualities)
    }

    let [filtered, setFiltered] = useState('All')
    let filteredarQualities = arQualities;
    if (filtered === 'HightPrioritet') {
        filteredarQualities = arQualities.filter(f => f.prioritet === 'hight');
    }
    if (filtered === 'MiddlePrioritet') {
        filteredarQualities = arQualities.filter(f => f.prioritet === 'middle');
    }
    if (filtered === 'LowPrioritet') {
        filteredarQualities = arQualities.filter(f => f.prioritet === 'low');
    }

    function changeFilter(value: string) {
        setFiltered(value)
    }

    let [opacity, setOpacity] = useState<boolean>(false)

    function MenuFoo(opacityValue: boolean) {
        setOpacity(opacityValue)
    }

    //for TODOLIST------------------------------------------------------
    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {
            id: Todolist1,
            title: 'What to learn',
            filter: 'All'
        },
        {
            id: Todolist2,
            title: 'What to buy',
            filter: 'All'
        },
    ])
    let [Tasks, setTasks] = useState(
        {
            [Todolist1]: [
                {id: v1(), title: 'HTML&CSS', isDone: true},
                {id: v1(), title: 'JS', isDone: false},
                {id: v1(), title: 'React', isDone: false}
            ],
            [Todolist2]: [
                {id: v1(), title: 'HTML&CSS', isDone: true},
                {id: v1(), title: 'JS', isDone: false},
                {id: v1(), title: 'React', isDone: false}
            ]
        });
    const addTodolist = (title: string) => {
        let newTodolistId = v1();
        let newTodolist: todolistsType = {id: newTodolistId, title: title, filter: 'All'};
        setTodolists([newTodolist, ...todolists])
        setTasks({...Tasks, [newTodolistId]: []})
    }
    const RemoveTodolist = (todolistsID: string) => {
        setTodolists(todolists.filter(f => f.id !== todolistsID))
    }
    const addTask = (title: string, todolistsID: string) => {
        let todolist = Tasks[todolistsID];
        if (title.trim() !== '') {
            let newTasks = {id: v1(), title: title, isDone: true}
            Tasks[todolistsID] = [newTasks, ...todolist]
            setTasks({...Tasks})
        }
    }
    let removeTask = (removeId: string, todolistsID: string) => {
        let todolist = Tasks[todolistsID];
        Tasks[todolistsID] = todolist.filter(f => f.id !== removeId)
        setTasks({...Tasks})
    }
    const changeFilterTodolist = (filterValue: string, todolistsId: string) => {
        let todolist = todolists.find(f => f.id == todolistsId);
        if (todolist) {
            todolist.filter = filterValue;
            setTodolists([...todolists])
        }
    }
    const changeStatus = (CheckBoxId: string, todolistsID: string) => {
        let todolist = Tasks[todolistsID];
        let changeStatusValue = Tasks[todolistsID].find(f => f.id === CheckBoxId);
        if (changeStatusValue) {
            changeStatusValue.isDone = !changeStatusValue.isDone
            setTasks({...Tasks})
        }
    }
    const saveNewTitleTodolist = (title: string, todolistsID: string) => {
        let todolist = todolists.find(f => f.id == todolistsID);
        if (todolist) {
            todolist.title = title;
            setTodolists([...todolists])
        }
    }
    const saveNewTitle = (title: string, todolistsID: string, TasksID: string) => {
        let todolist = Tasks[todolistsID];
        let task = todolist.find(f => f.id === TasksID);
        if (task) {
            task.title = title
            setTasks({...Tasks})
        }
    }
    //for TODOLIST------------selectComponent
    let arraySkills = [
        {
            id: 1,
            skills: 'Junior',
            color: '  dimgray'
        },
        {
            id: 2,
            skills: 'Middle',
            color: '  deeppink'
        },
        {
            id: 3,
            skills: 'Senior',
            color: '  lightskyblue'
        }
    ];
    let color=useSelector<AppRootStateType,string>(state => state.color);
    let dispatch=useDispatch();
       const arraySkillsFoo = (id: number) => {
        console.log(id);
        dispatch(setThemeAC(id));
           }

    //for STATEreducer----------------------
    const startState: Array<StateType> = [
        {id: v1(), name: "Igor", age: 41},
        {id: v1(), name: "Olga", age: 39},
        {id: v1(), name: "Sasha", age: 11},
        {id: v1(), name: "Nadka", age: 4},
    ]
    let SortUpValueForAction = {type: 'SORT', payload: 'up'};
    let SortDownValueForAction = {type: 'RSORT', payload: 'up'};
    const SortAGEAC = {type: 'AGESORT', payload: 18}

    return (
        <div className={color}>
            <div className="App">
                <BrowserRouter>
                    <div className={'RadioStylesForBackGround'}>
                        <Radio
                            arraySkills={arraySkills}
                            title={'Please select color theme: '}
                            arraySkillsFoo={arraySkillsFoo}
                            setColor={true}
                        />
                    </div>
                    <Menu callBack={() => MenuFoo(!opacity)} opacity={opacity}/>
                    <Route path={'/monday'} render={() =>
                        <div className={'general'}>
                            <Telegram
                                name='Sasha'
                                surName='Yudintsev'
                                arQualities={filteredarQualities}
                                Delete={Delete}
                                changeFilter={changeFilter}
                            />
                        </div>
                    }
                    />

                    <Route path={'/tuesday'} render={() => {
                        return (
                            <div className={'general'}>
                                <div className={'setPreloader'}>
                                    <Button title={'setPreloader'} callback={() => setPreloader()}/>
                                </div>
                                {loading && <Preloader/>}
                                {!loading && show && <div className={'lineTodolist'}>
                                    <div className={'InputTodolistStyle'}><InputTodolist callBack={addTodolist}/></div>
                                    {todolists.map(m => {
                                        let tasksLayer = Tasks[m.id];
                                        if (m.filter === 'Active') {
                                            tasksLayer = Tasks[m.id].filter(f => f.isDone === false)
                                        }
                                        if (m.filter === 'Completed') {
                                            tasksLayer = Tasks[m.id].filter(f => f.isDone === true)
                                        }
                                        return (
                                            <TodoList
                                                id={m.id}
                                                title={m.title}
                                                Tasks={tasksLayer}
                                                RemoveTodolist={RemoveTodolist}
                                                filter={m.filter}
                                                addTask={addTask}
                                                removeTask={removeTask}
                                                changeFilterTodolist={changeFilterTodolist}
                                                changeStatus={changeStatus}
                                                saveNewTitleTodolist={saveNewTitleTodolist}
                                                saveNewTitle={saveNewTitle}
                                            />
                                        )
                                    })}
                                </div>}
                                {!loading && show && <div className={'leftSide'}>
                                    <div className={'SelectStyles'}><Select arraySkills={arraySkills}/></div>
                                    <div className={'RadioStyles'}>
                                        <Radio
                                            arraySkills={arraySkills}
                                            title={'Please select your SKILL: '}
                                            arraySkillsFoo={arraySkillsFoo}
                                        />
                                    </div>
                                    <div className={'ArrayState'}>
                                        <ArrayState
                                        state={startState}
                                        SortUpValueForAction={SortUpValueForAction}
                                        SortDownValueForAction={SortDownValueForAction}
                                        SortAGEAC={SortAGEAC}
                                    /></div>
                                    <div className={'timerModule'}><Timer/></div>
                                </div>}
                                <Range min={200} max={300}/>
                                <RangeDouble min={200} max={1000}/>
                            </div>
                        )
                    }
                    }>
                    </Route>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App
