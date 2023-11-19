import { roles } from "../../enums/Roles"
import { TSnake } from "../../models/TSnake"
import SnakeBody from "./SnakeBody"

const Snake = ({snake}:{snake:TSnake}) => {
    return (
        <>
            {snake.map((body, index) => <SnakeBody 
                key = {index}
                role={roles.SNAKE_BODY} 
                $snakePiece={body}
            />)}
        </>
    )
}

export default Snake