import { roles } from "../../enums/Roles"
import { TSnake } from "../../models/TSnake"
import SnakeBody from "./SnakeBody"
import SnakeHead from "./SnakeHead"

const Snake = ({snake}:{snake:TSnake}) => {
    return (
        <>
            {snake.map((body, index) => {
                if(index === 0) {
                    return <SnakeHead 
                        key = {index}
                        role={roles.SNAKE_HEAD} 
                        $snakePiece={body}
                    />
                } 
                return <SnakeBody 
                    key = {index}
                    role={roles.SNAKE_BODY} 
                    $snakePiece={body}
                />
            })}
        </>
    )
}

export default Snake