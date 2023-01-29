import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ReposReducer from "./repos-reducer";

const rootReducer = combineReducers({
    repos: ReposReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];