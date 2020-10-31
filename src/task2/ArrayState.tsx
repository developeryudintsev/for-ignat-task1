import React, { useState} from 'react';
import {ACType, hwReducer, RSortUpAC, SortAGEAC, SortUpAC, StateType} from '../common/tests/homeWorkReducer';
import './../App.css';
import {Button} from "../common/Button";

type stateType = {
    state: Array<StateType>
    SortUpValueForAction: ACType
    SortDownValueForAction: ACType
    SortAGEAC: ACType
}

export const ArrayState = (props: stateType) => {
    const [state, setState] = useState(props.state)
    const sortFoo = () => {
        const state = hwReducer(props.state, SortUpAC(props.SortUpValueForAction))
        setState(state)
    }
    const RsortFoo = () => {
        const state = hwReducer(props.state, RSortUpAC(props.SortDownValueForAction))
        setState(state)
    }
    const AgeSortFoo = () => {
        const state = hwReducer(props.state, SortAGEAC(props.SortAGEAC))
        setState(state)
    }
    return (
        <div >
            <table className={'ArrayStateMap'}>
                <tr>
                    <th className={'th1'}>NAME</th>
                    <th className={'th2'}>AGE</th>
                </tr>
                {state.map(m =>
                    <tr>
                        <td>{m.name}</td>
                        <td>{m.age}</td>
                    </tr>
                )}
            </table>
            <div className={'buttons'}>
                <Button title={'SORT'} callback={() => sortFoo()}/>
                <Button title={'RSORT'} callback={() => RsortFoo()}/>
                <Button title={'AGE>18'} callback={() => AgeSortFoo()}/>
                {/*<button onClick={sortFoo} title={'SORT'}>SORT</button>*/}
                {/*<button onClick={RsortFoo} title={'RSORT'}>RSORT</button>*/}
                {/*<button onClick={AgeSortFoo} title={'AGE>18'}>AGE18</button>*/}
            </div>
        </div>
    )
}