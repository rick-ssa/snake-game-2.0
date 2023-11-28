import { keyboardArrows } from "../enums/KeyboardArrows";
import { size } from "../enums/Size";
import { ISnakePiece } from "../models/ISnakePiece";
import { TPath } from "../models/TPath";
import { TSnake } from "../models/TSnake";

const moveSnake = (path:TPath, snake:TSnake):TSnake => {
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