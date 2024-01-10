import { FaPause, FaPlay, FaStop, FaSync } from "react-icons/fa"
import ControllButton from "../components/GameControlls/controllButton/ControlButton"
import { useAppDispatch, useAppSelector } from "./redux"
import { setGameStatus } from "../store/gameControllerSlice"
import { useRestart } from "./moveControlls"

export const useButtonsController = () => {
    const dispatch = useAppDispatch()
    const gameStatus = useAppSelector(state => state.gameController.gameStatus)
    const restart = useRestart()

    return [
        <ControllButton  
            key = "play" 
            icon = {() => FaPlay}
            disabled = {gameStatus === 'play' || gameStatus === 'over' || gameStatus === 'stop'} 
            onClick = {()=>dispatch(setGameStatus('play'))}
        />,

        <ControllButton  
            key = "pause" 
            icon = {() => FaPause}
            disabled = {gameStatus === 'pause' || gameStatus === 'over' || gameStatus === 'stop'} 
            onClick = {()=>dispatch(setGameStatus('pause'))}
        />,

        <ControllButton  
            key = "stop" 
            icon = {() => FaStop}
            disabled = {gameStatus === 'stop' || gameStatus === 'over'} 
            onClick = {()=>dispatch(setGameStatus('stop'))}
        />,
        <ControllButton 
            key = "restart"
            icon = {() => FaSync}
            onClick = {restart}
        />
    ]
}