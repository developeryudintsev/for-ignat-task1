export let initialState = 'lightskyblue';

export const ThemeReducer = (state = initialState, action: setThemeACType): string => {
    switch (action.type) {
        case 'SET-THEME':
        {
            if (action.mId== 1) {
                state='  dimgray'
            }
            if (action.mId==2) {
                state='  deeppink'
            }
            if (action.mId == 3) {
                state='  lightskyblue'
            }
            return state;
        }

        default:
            return state;
    }
}

export type setThemeACType = {
    type: 'SET-THEME',
    mId: number
}
export const setThemeAC = (mId: number): setThemeACType => {
    return {
        type: 'SET-THEME',
        mId: mId
    }
}