export type StateType = {
    id: string
    name: string
    age: number
}
export type ACType = {
    type: string,
    payload: string | number
}

export const SortUpAC = (SortUpValue: ACType): ACType => {
    return {type: 'SORT', payload: 'up'}
}
export const RSortUpAC = (SortUpValue: ACType): ACType => {
    return {type: 'RSORT', payload: 'up'}
}
export const SortAGEAC = (SortUpValue: ACType): ACType => {
    return {type: 'AGESORT', payload: 18}
}

export const hwReducer = (state: Array<StateType>, action: ACType) => {
    debugger
    switch (action.type) {
        case 'SORT':
            state.sort((a, b) => {
                    switch (a.name > b.name) {
                        case true:
                            return 1
                        case false:
                            return -1
                        default:
                            return 0
                    }
                }
            );
            return [...state];

        case 'RSORT':
            return [...state.sort((a, b) => {
                    switch (a.name > b.name) {
                        case true:
                            return -1
                        case false:
                            return 1
                        default:
                            return 0
                    }
                }
            )]
        case 'AGESORT':
            return [...state.filter(f => f.age > action.payload)]
        default:
            throw new Error('I dont know this comand');
    }
};