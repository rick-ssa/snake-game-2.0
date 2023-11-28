import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TSnake } from "../models/TSnake";
import { size } from "../enums/Size";

interface IGamePartsState {
    snake: TSnake
}
const headInitialLeftFactor = 3
const initialLeft = size.SNAKE_BODY * headInitialLeftFactor
const initialTop = size.SNAKE_BODY

const initialState: IGamePartsState = {
    snake: [
        {
            left: initialLeft,
            top: initialTop,
            height: size.SNAKE_BODY,
            width: size.SNAKE_BODY,
        },
        {
            left: (headInitialLeftFactor - 1) * size.SNAKE_BODY,
            top: initialTop,
            height: size.SNAKE_BODY,
            width: size.SNAKE_BODY,
        },
        {
            left: (headInitialLeftFactor - 2) * size.SNAKE_BODY,
            top: initialTop,
            height: size.SNAKE_BODY,
            width: size.SNAKE_BODY,
        }
    ]
}

export const gamePartsSlice = createSlice({
    name: 'gameParts',
    initialState,
    reducers: {
        setSnake: (state, action: PayloadAction<TSnake>) => {
            state.snake = action.payload
        }
    }
})

export const {setSnake} = gamePartsSlice.actions

export const selectSnake = (state: RootState) => state.gameParts.snake

export default gamePartsSlice.reducer