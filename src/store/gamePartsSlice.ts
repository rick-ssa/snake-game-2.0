import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TSnake } from "../models/TSnake";
import { size } from "../enums/Size";
import IFood from "../models/IFood";
import IColider from "../models/IColiders";
import IBoardLength from "../models/IBoardLength";
import { colidersName } from "../enums/descriptions";

interface IGamePartsState {
    snake: TSnake
    food: IFood
    coliders: IColider[]
    board: IBoardLength
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

    coliders: [
        {
            left: 5 * size.SNAKE_BODY,
            top: 5 * size.SNAKE_BODY,
            name: colidersName.COLIDER_FOOD,
        },
        {
            left: (headInitialLeftFactor - 1) * size.SNAKE_BODY,
            top: initialTop,
            name: colidersName.COLIDER_SNAKE_BODY + "1"
        },
        {
            left: (headInitialLeftFactor - 2) * size.SNAKE_BODY,
            top: initialTop,
            name: colidersName.COLIDER_SNAKE_BODY + "2"
        }
    ],

    board: {
        width: 0,
        height: 0,
    }
}

export const gamePartsSlice = createSlice({
    name: 'gameParts',
    initialState,
    reducers: {
        setSnake: (state, action: PayloadAction<TSnake>) => {
            if(action.payload.length === state.snake.length) {
                state.snake = action.payload
            } else {
                state.snake = [...action.payload, {...state.snake[state.snake.length - 1]}]
            }
        },
        growSnake: (state) => {
            state.snake = [...state.snake, {...state.snake[state.snake.length - 1]}]
        },
        setFood: (state, action: PayloadAction<IFood>) => {
            state.food = action.payload
        },
        addColider: (state, action: PayloadAction<IColider>) => {
            const newColiders = state.coliders.filter(colider => colider.name !== action.payload.name)
            newColiders.push(action.payload)
            state.coliders = newColiders
        },
        setBoardLength: (state, action: PayloadAction<IBoardLength>) => {
            state.board = action.payload
        }
    }
})

export const {setSnake, growSnake, setFood, addColider, setBoardLength} = gamePartsSlice.actions

export const selectSnake = (state: RootState) => state.gameParts.snake

export const selectFood = (state: RootState) => state.gameParts.food

export const selectColiders = (state: RootState) => state.gameParts.coliders

export const selectBoardLength = (state: RootState) => state.gameParts.board

export default gamePartsSlice.reducer