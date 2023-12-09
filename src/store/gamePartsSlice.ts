import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TSnake } from "../models/TSnake";
import { size } from "../enums/Size";
import IFood from "../models/IFood";
import IColider from "../models/IColiders";
import { colidersName } from "../enums/descriptions";

interface IGamePartsState {
    snake: TSnake
    food: IFood
    coliders: IColider[]
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
    ],

    food: {
        visible: true,
        left: 5 * size.SNAKE_BODY,
        top: 5 * size.SNAKE_BODY,
    },

    coliders: [{
        left: 5 * size.SNAKE_BODY,
        top: 5 * size.SNAKE_BODY,
        name: colidersName.COLIDER_FOOD,
    }],
}

export const gamePartsSlice = createSlice({
    name: 'gameParts',
    initialState,
    reducers: {
        setSnake: (state, action: PayloadAction<TSnake>) => {
            state.snake = action.payload
        },
        setFood: (state, action: PayloadAction<IFood>) => {
            state.food = action.payload
        },
        addColider: (state, action: PayloadAction<IColider>) => {
            const newColiders = state.coliders.filter(colider => colider.name !== action.payload.name)
            newColiders.push(action.payload)
            state.coliders = newColiders
        },
    }
})

export const {setSnake, setFood, addColider} = gamePartsSlice.actions

export const selectSnake = (state: RootState) => state.gameParts.snake

export const selectFood = (state: RootState) => state.gameParts.food

export const selectColiders = (state: RootState) => state.gameParts.coliders

export default gamePartsSlice.reducer