import { useAppDispatch } from "../hooks/redux"
import { TGameStatus } from "../models/TGameStatus"
import { setGameStatus } from "../store/gameControllerSlice"

const useMoveControls = () => {
    const dispatch = useAppDispatch()
    
    return (gameStatus:TGameStatus)=>{
        dispatch(setGameStatus(gameStatus))
    }
}

export default useMoveControls