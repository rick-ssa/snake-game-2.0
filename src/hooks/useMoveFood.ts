import { size } from "../enums/Size";
import { useAppDispatch, useAppSelector } from "./redux";
import IFood from "../models/IFood";
import { addColider } from "../store/gamePartsSlice";
import { colidersName } from "../enums/descriptions";

const useMoveFood = () => {
    const snake = useAppSelector(state => state.gameParts.snake)
    const dispatch = useAppDispatch()
    const snakeHead = snake[0]
    const boardLength = useAppSelector(state => state.gameParts.board)

    return (food:IFood):IFood => {

        if(food.visible) {
            return {...food, visible: false }
        } 

        const left = calculePosition(snakeHead.left, boardLength.width)
        const top = calculePosition(snakeHead.top, boardLength.height)
        dispatch(addColider({left, top, name: colidersName.COLIDER_FOOD}))
        return { left, top, visible: true}
    }
}

const calculePosition = (actualPosition:number, maxPosition: number) => {
    const factor = Boolean(Math.floor(Math.random() * 2)) ? 1 : -1

    let position = Math.abs((actualPosition * factor) + Math.floor(Math.random() * 40) * size.SNAKE_BODY)

    if(position > maxPosition) {
        position = Math.floor(position / maxPosition + 1) * maxPosition - position
    }

    return position
}

export default useMoveFood