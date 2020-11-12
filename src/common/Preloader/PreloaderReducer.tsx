import {loadingType} from "../../App";

export const PreloaderReducer = (state: loadingType, action: loadingACType): loadingType => {
    switch (action.type) {
        case 'SET_PRELOADER':
            let copyState = state;
            copyState = action.loading
            return copyState;
        default:
            return state;
    }
}

type loadingACType = {
    type: 'SET_PRELOADER'
    loading: boolean
 }

export const LoadingAC = (loading: boolean): loadingACType => {
    return {
        type: 'SET_PRELOADER',
        loading:loading
    }
}