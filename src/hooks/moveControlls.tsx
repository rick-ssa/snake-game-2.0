import { keyboardArrows } from "../enums/KeyboardArrows"
import { useAppDispatch } from "../hooks/redux"
import { TGameStatus } from "../models/TGameStatus"
import { setGameStatus, setPath } from "../store/gameControllerSlice"
import { setSnake, initialSnakePosition, resetSnakeColider } from "../store/gamePartsSlice"

const useMoveControls = () => {
    const dispatch = useAppDispatch()
    
    return (gameStatus:TGameStatus)=>{
        dispatch(setGameStatus(gameStatus))
    }
}

export const useRestart = () => {
    const dispatch = useAppDispatch()

    return () => {
        dispatch(setSnake({snake: initialSnakePosition, restart: true}))
        dispatch(setPath({arrow: keyboardArrows.ARROW_RIGHT, direction: 'horizontal'}))
        dispatch(resetSnakeColider())
        dispatch(setGameStatus('pause'))
    }
}

export default useMoveControls