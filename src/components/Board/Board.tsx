import React from "react"
import "./styles.css"
import GameControll from "../GameControlls/GameControlls"
import ControllButton from "../GameControlls/controllButton/ControlButton"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { setGameStatus } from "../../store/gameControllerSlice"
import { FaPause, FaPlay, FaStop } from "react-icons/fa"

interface IBoardProps {
    children: React.ReactNode,
}

const Board = ({children}:IBoardProps) => {
    const dispatch = useAppDispatch()
    const gameStatus = useAppSelector(state => state.gameController.gameStatus)

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
        <div className="game_board">
            {children}
            <GameControll buttons={buttons}/>
        </div>
    )
}

export default Board