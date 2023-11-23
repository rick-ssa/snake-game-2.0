import { configureStore } from "@reduxjs/toolkit";
import gameControllerReducer from "./gameControllerSlice";

const store = configureStore({
    reducer: {
        gameController: gameControllerReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store