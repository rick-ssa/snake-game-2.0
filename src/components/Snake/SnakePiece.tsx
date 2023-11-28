import { ISnakePiece } from '../../models/ISnakePiece'
import './styles.css'

interface SnakePieceProps {
    isHead?: boolean
    role: string
    snakePiece: ISnakePiece
}

const SnakePiece = ({
    role,
    isHead = false,
    snakePiece,
}:SnakePieceProps) => {
    const {width, height, left, top} = snakePiece
    return (
        <div 
            className= {`snake_piece snake_${isHead ? 'head' : 'body'}`}
            role = {role}
            style = {{
                width: `${width}px`,
                height:`${height}px`,
                left:`${left}px`,
                top:`${top}px`,
            }}
        />
    )
}

export default SnakePiece