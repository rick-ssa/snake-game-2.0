import { roles } from "../../enums/Roles"
import { TSnake } from "../../models/TSnake"
import SnakePiece from "./SnakePiece"

const Snake = ({snake}:{snake:TSnake}) => {
    return (
        <>
            {snake.map((body, index) => {
                if(index === 0) {
                    return <SnakePiece 
                        key = {index}
                        role={roles.SNAKE_HEAD} 
                        snakePiece={body}
                        isHead
                    />
                } 
                return <SnakePiece 
                    key = {index}
                    role={roles.SNAKE_BODY} 
                    snakePiece={body}
                />
            })}
        </>
    )
}

export default Snake