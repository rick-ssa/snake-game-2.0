import React, { useEffect } from "react"
import "./styles.css"
import GameControll from "../GameControlls/GameControlls"
import ControllButton from "../GameControlls/controllButton/ControlButton"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { setGameStatus } from "../../store/gameControllerSlice"
import { FaPause, FaPlay, FaStop } from "react-icons/fa"
import { setBoardLength } from "../../store/gamePartsSlice"
import { size } from "../../enums/Size"

interface IBoardProps {
    children: React.ReactNode,
}

const Board = ({children}:IBoardProps) => {
    const dispatch = useAppDispatch()
    const gameStatus = useAppSelector(state => state.gameController.gameStatus)

    useEffect(() => {
        const gameBoard = document.querySelector('#game_board')
        const width = calcGameLength(gameBoard?.clientWidth)
        const height = calcGameLength(gameBoard?.clientHeight)

        dispatch(setBoardLength({width, height}))

        const resize = () => {
            const width = calcGameLength(gameBoard?.clientWidth)
            const height = calcGameLength(gameBoard?.clientHeight)
            dispatch(setBoardLength({width, height}))
            console.log(width, height)
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

    const buttons = [
        <ControllButton  
            key = "play" 
            icon = {() => FaPlay}
            disabled = {gameStatus === 'play' || gameStatus === 'over'} 
            onClick = {()=>dispatch(setGameStatus('play'))}
        />,

        <ControllButton  
            key = "pause" 
            icon = {() => FaPause}
            disabled = {gameStatus === 'pause' || gameStatus === 'over'} 
            onClick = {()=>dispatch(setGameStatus('pause'))}
        />,

        <ControllButton  
            key = "stop" 
            icon = {() => FaStop}
            disabled = {gameStatus === 'stop' || gameStatus === 'over'} 
            onClick = {()=>dispatch(setGameStatus('stop'))}
        />,
    ]

    return (
        <div id = "game_board" className="game_board">
            {children}
            <GameControll buttons={buttons}/>
        </div>
    )
}

export default Board