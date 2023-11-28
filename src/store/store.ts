import { configureStore } from "@reduxjs/toolkit";
import gameControllerReducer from "./gameControllerSlice";
import gamePartsReducer from "./gamePartsSlice";

const store = configureStore({
    reducer: {
        gameController: gameControllerReducer,
        gameParts: gamePartsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store