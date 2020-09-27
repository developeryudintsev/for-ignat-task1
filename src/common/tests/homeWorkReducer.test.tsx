import {v1} from 'uuid';
import {hwReducer, RSortUpAC, SortAGEAC, SortUpAC, StateType} from "./homeWorkReducer";

const startState: Array<StateType> = [
    {id: v1(), name: "Igor", age: 41},
    {id: v1(), name: "Olga", age: 39},
    {id: v1(), name: "Sasha", age: 11},
    {id: v1(), name: "Nadka", age: 4},
]
test('sort up by name Array', () => {
    let SortUpValueForAction = {type: 'SORT', payload: 'up'};
    const endState = hwReducer(startState, SortUpAC(SortUpValueForAction))
    expect(endState[3].name).toBe('Sasha')
});

test('Rsort up by name Array', () => {
    let SortDownValueForAction = {type: 'RSORT', payload: 'up'};
    const endState = hwReducer(startState, RSortUpAC(SortDownValueForAction))
       expect(endState[3].name).toBe('Igor')
});

test('sort up by age >18', () => {
    let SortUpValueForAction = {type: 'AGESORT', payload: 18};
    const endState = hwReducer(startState, SortAGEAC(SortUpValueForAction))
    expect(endState.length).toBe(2)
});