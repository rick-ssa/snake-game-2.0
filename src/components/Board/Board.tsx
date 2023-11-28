import React from "react"
import "./styles.css"

interface IBoardProps {
    children: React.ReactNode,
}


const Board = ({children}:IBoardProps) => {
    return (
        <div className="game_board">
            {children}
        </div>
    )
}

export default Board