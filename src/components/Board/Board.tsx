import React, { useEffect } from "react"
import "./styles.css"
import GameControll from "../GameControlls/GameControlls"
import { useAppDispatch } from "../../hooks/redux"
import { setBoardLength } from "../../store/gamePartsSlice"
import { size } from "../../enums/Size"
import HitFoodReactFace from "../HitFood/HitFoodReactionFace"
import { useButtonsController } from "../../hooks/ControllButtons"

interface IBoardProps {
    children: React.ReactNode,
}

const Board = ({children}:IBoardProps) => {
    const dispatch = useAppDispatch()
    const buttons = useButtonsController()

    useEffect(() => {
        const gameBoard = document.querySelector('#game_board')
        const width = calcGameLength(gameBoard?.clientWidth)
        const height = calcGameLength(gameBoard?.clientHeight)

        dispatch(setBoardLength({width, height}))

        const resize = () => {
            const width = calcGameLength(gameBoard?.clientWidth)
            const height = calcGameLength(gameBoard?.clientHeight)
            dispatch(setBoardLength({width, height}))
        }

        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    },[])

    const calcGameLength = (length:number | undefined) => {
        if(length) {
            return Math.floor(length / size.SNAKE_BODY) * size.SNAKE_BODY
        }

        return 0
    }

    return (
        <div id = "game_board" className="game_board">
            {children}
            <HitFoodReactFace />
            <GameControll buttons={buttons}/>
        </div>
    )
}

export default Board