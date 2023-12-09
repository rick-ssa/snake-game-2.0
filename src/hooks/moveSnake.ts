import { keyboardArrows } from "../enums/KeyboardArrows";
import { size } from "../enums/Size";
import { useAppSelector } from "./redux";
import { ISnakePiece } from "../models/ISnakePiece";
import { TPath } from "../models/TPath";
import { TSnake } from "../models/TSnake";
import IColider from "../models/IColiders";
import detectColision from "../functions/detectColision";

interface IMoveSnakeArgs {
    path: TPath
    snake: TSnake
    onColide?: (args:IColider) => void
}

const useMoveSnake = () => {
    const coliders = useAppSelector(state => state.gameParts.coliders)

    return ({path, snake, onColide}:IMoveSnakeArgs):TSnake => {

        let newSnakePiece:ISnakePiece
        let newSnake = snake.map(snakePiece => ({...snakePiece}))

        let left: number
        let top: number
        const positivePace = path.arrow === keyboardArrows.ARROW_DOWN || path.arrow === keyboardArrows.ARROW_RIGHT
        
        const snakePiece = newSnake[0]

        if(path.direction === 'horizontal') {
            left = positivePace ? snakePiece.left + size.SNAKE_BODY : snakePiece.left - size.SNAKE_BODY
            top = snakePiece.top
        } else {
            left = snakePiece.left
            top = positivePace ? snakePiece.top + size.SNAKE_BODY : snakePiece.top - size.SNAKE_BODY
        }

        coliders.forEach(colider => {
            const hasColision = detectColision({left, top}, colider)

            if(hasColision && onColide) {
                onColide(colider)
            }
        })

        newSnakePiece = {
            ...snakePiece,
            left,
            top,
        }

        newSnake.pop()
        newSnake.unshift(newSnakePiece)
        
        return newSnake
    }
}

export default useMoveSnake