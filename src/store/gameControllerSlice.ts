import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { keyboardArrows } from "../enums/KeyboardArrows";
import { TDirections } from "../models/TDirections";
import { RootState } from "./store";

interface IGameControllerState {
    direction: TDirections

}

const initialState: IGameControllerState = {
    direction: {
        arrow: keyboardArrows.ARROW_LEFT,
        direction: 'horizontal'
    }
}

export const gameControllerSlice = createSlice({
    name: 'gameController',
    initialState,
    reducers: {
        setDirection: (state, action: PayloadAction<TDirections>) => {
            state.direction = action.payload
        }
    }
})

export const {setDirection} = gameControllerSlice.actions

export const selectDirection = (state: RootState) => state.gameController.direction

export default gameControllerSlice.reducer