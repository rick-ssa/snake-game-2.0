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
    board: IBoardLength,
    face: boolean,
}

interface ISetState {
    snake: TSnake,
    restart?: boolean,
}

const headInitialLeftFactor = 3
const initialLeft = size.SNAKE_BODY * headInitialLeftFactor
const initialTop = size.SNAKE_BODY
export const initialSnakePosition = [
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

const initialState: IGamePartsState = {
    snake: initialSnakePosition,

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
    },

    face: false
}

export const gamePartsSlice = createSlice({
    name: 'gameParts',
    initialState,
    reducers: {
        setSnake: (state, action: PayloadAction<ISetState>) => {
            if(action.payload.snake.length === state.snake.length || action.payload.restart) {
                state.snake = action.payload.snake
            } else {
                state.snake = [...action.payload.snake, {...state.snake[state.snake.length - 1]}]
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
        resetSnakeColider: (state) => {
            const regex = new RegExp(colidersName.COLIDER_SNAKE_BODY + '\d*')
            const newColiders = state.coliders.filter(colider => !regex.test(colider.name))
            state.coliders = newColiders
        },
        setBoardLength: (state, action: PayloadAction<IBoardLength>) => {
            state.board = action.payload
        },

        setFace: (state, action: PayloadAction<boolean> ) => {
            state.face = action.payload
        }
    }
})

export const {
    setSnake, 
    growSnake, 
    setFood, 
    addColider, 
    setBoardLength, 
    setFace,
    resetSnakeColider,
} = gamePartsSlice.actions

export const selectSnake = (state: RootState) => state.gameParts.snake

export const selectFood = (state: RootState) => state.gameParts.food

export const selectColiders = (state: RootState) => state.gameParts.coliders

export const selectBoardLength = (state: RootState) => state.gameParts.board

export const selectFace = (state: RootState) => state.gameParts.face

export default gamePartsSlice.reducer