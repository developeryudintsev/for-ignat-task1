import {combineReducers, createStore} from "redux";
import {ThemeReducer} from "../reducers/ThemeReducer";

const rootReducer=combineReducers({
    color:ThemeReducer
})

export const store=createStore(rootReducer);
export type AppRootStateType=ReturnType<typeof rootReducer>