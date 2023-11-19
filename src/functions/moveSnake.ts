import { keyboardArrows } from "../enums/KeyboardArrows";
import { size } from "../enums/Size";
import { ISnakePiece } from "../models/ISnakePiece";
import { TDirections } from "../models/TDirections";
import { TSnake } from "../models/TSnake";

const moveSnake = (direction:TDirections, snake:TSnake):TSnake => {
    let newSnakePiece:ISnakePiece
    let newSnake = snake.map(snakePiece => ({...snakePiece}))

    let left: number
    let top: number
    const positivePace = direction.arrow === keyboardArrows.ARROW_DOWN || direction.arrow === keyboardArrows.ARROW_LEFT
    
    const snakePiece = newSnake[0]

    if(direction.direction === 'horizontal') {
        left = positivePace ? snakePiece.left + size.SNAKE_BODY : snakePiece.left - size.SNAKE_BODY
        top = snakePiece.top
    } else {
        left = snakePiece.left
        top = positivePace ? snakePiece.top + size.SNAKE_BODY : snakePiece.top - size.SNAKE_BODY
    }

    newSnakePiece = {
        ...snakePiece,
        left,
        top,
    }

    newSnake.pop()
    newSnake.unshift(newSnakePiece)
    
    return newSnake
}

export default moveSnake