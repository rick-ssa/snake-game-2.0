import styled from "styled-components";
import { ISnakePiece } from "../../models/ISnakePiece";

const SnakeBody = styled.div <{ $snakePiece: ISnakePiece}> `
    position: absolute;
    background-color: blue;
    border-radius: 50%;
    width: ${props => props.$snakePiece.width + 'px'};
    height: ${props => props.$snakePiece.height + 'px'};
    left: ${props => props.$snakePiece.left + 'px'};
    top: ${props => props.$snakePiece.top + 'px'};
`

export default SnakeBody