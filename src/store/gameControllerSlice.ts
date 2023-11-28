import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { keyboardArrows } from "../enums/KeyboardArrows";
import { TPath } from "../models/TPath";
import { RootState } from "./store";
import { TGameStatus } from "../models/TGameStatus";

interface IGameControllerState {
    path: TPath
    gameStatus: TGameStatus
    velocity: number
}

const initialState: IGameControllerState = {
    path: {
        arrow: keyboardArrows.ARROW_RIGHT,
        direction: 'horizontal'
    },
    gameStatus: 'stop',
    velocity: 120,
}

export const gameControllerSlice = createSlice({
    name: 'gameController',
    initialState,
    reducers: {
        setPath: (state, action: PayloadAction<TPath>) => {
            state.path = action.payload
        },
        setGameStatus: (state, action: PayloadAction<TGameStatus>) => {
            state.gameStatus = action.payload
        },
        setVelocity: (state, action: PayloadAction<number>) => {
            state.velocity = action.payload
        }
    }
})

export const {setPath, setGameStatus, setVelocity} = gameControllerSlice.actions

export const selectDirection = (state: RootState) => state.gameController.path

export const selectGameStatus = (state:RootState) => state.gameController.gameStatus

export const selectVelocity = (state:RootState) => state.gameController.velocity

export default gameControllerSlice.reducer