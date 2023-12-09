import { size } from "../enums/Size";
import { useAppSelector } from "./redux";
import IFood from "../models/IFood";

const useMoveFood = () => {
    const snake = useAppSelector(state => state.gameParts.snake)
    const snakeHead = snake[0]

    return (food:IFood):IFood => {

        if(food.visible) {
            return {...food, visible: false }
        } 

        const left = calculePosition(snakeHead.left, 1000)
        const top = calculePosition(snakeHead.top, 1000)
        console.log(left, top)
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